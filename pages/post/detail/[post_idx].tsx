import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Comment, Post } from '../../../instance';
import CommentForm from '../../../components/CommentForm';
import CommentCard from '../../../components/CommentCard';
import axios from '../../../plugins/axios';
import moment from 'moment';

export const getServerSideProps = async ({params}) => {
  const post_idx = params.post_idx;

  return {
    props: { post_idx }
  }
}


const Detail = () => {
  const router = useRouter();

  const [comments, setComments] = useState<Comment[]>([]);
  const [post, setPost] = useState<Post>();

  const addComment = (comment: Comment) => {
    // setComments(comments.push(comment));
  };

  const deleteComment = (comment: Comment) => {
    axios.delete(`/comments/${comment.comment_idx}`).then(() => {});
  };

  useEffect(() => {
    if (router.query.post_idx) {
      axios.get(`/posts/${router.query.post_idx}`).then(({ data }: { data: Post }) => {
        setPost(data);
      });

      axios.post(`/comments`, {action: 'list', post_idx: router.query.post_idx}).then(({ data }: { data: Comment[] }) => {
        setComments(data);
      });
    }
  }, []);

  useEffect(() => {
  }, [post]);

  useEffect(() => {
  }, [comments]);

  return (
    <>
      { !!post && <Card>
        <Card.Header className="text-center">{post.title}</Card.Header>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{moment(post.reg_date).format('YYYY-MM-DD')}</Card.Footer>
      </Card> }

      <CommentForm post={post} addComment={addComment} />
      { !!comments &&
        comments.map((comment, index) => (
          <CommentCard deleteComment={deleteComment} comment={comment} key={index} style={index ? {marginTop: 5} : {}} />
        ))
      }
      <div className="d-flex justify-content-end mt-1">
        <Button variant="primary">목록</Button>
        <Button variant="danger" className="ml-2">삭제</Button>
      </div>
    </>
  );
}

export default Detail;
