import { Comment, Post } from '../../../instance';
import CommentForm from '../../../components/CommentForm';
import CommentCard from '../../../components/CommentCard';
import axios from '../../../plugins/axios';
import moment from 'moment';

export const getStaticPaths = async () => {
  const posts: Post[] = await axios.post('/posts');

  const paths = posts.map(post => {
    return {
      params: { post_idx: post.post_idx.toString() }
    }
  });

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const post = await axios.get(`/posts/${context.params.post_idx}`);

  return {
    props: { post }
  }
}

const Detail = ({ post }: { post: Post }) => {
  const addComment = (comment: Comment) => {
    // setComments(comments.push(comment));
  };

  const deleteComment = (comment: Comment) => {
    axios.delete(`/comments/${comment.comment_idx}`).then(() => { });
  };

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
      </Card>}

      <CommentForm post={post} addComment={addComment} />
      { !!post.comments &&
        post.comments.map((comment, index) => (
          <CommentCard deleteComment={deleteComment} comment={comment} key={index} style={index ? { marginTop: 5 } : {}} />
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
