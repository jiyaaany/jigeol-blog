import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Comment, Post } from '../../../instance';
import CommentForm from '../../../components/CommentForm';
import CommentCard from '../../../components/CommentCard';
import axios from '../../../plugins/axios';

const Detail = () => {
  const router = useRouter();

  const [comments, setComments] = useState<Comment[]>([]);
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    if (router.query.post_idx) {
      axios.get(`/posts/${router.query.post_idx}`).then(({ data }) => {
        setPost(data);
      });
    }
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <>
      <Card>
        <Card.Header className="text-center"></Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <CommentForm/>
      {
        comments.map((comment) => (
          <CommentCard />
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