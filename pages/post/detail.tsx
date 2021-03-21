import { Post, Comment } from '../../instance';
import {Card, Button} from 'react-bootstrap';
import CommentForm from '../../components/CommentForm';
import CommentCard from '../../components/CommentCard';
import { useState } from 'react';
import axios from "../../plugins/axios";

const post = {
  id: 1,
  title: 'title1',
  content: 'content1content1content1content1content1content1',
};

const detail = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [comments, setComments] = useState<Comment[]>([])

  axios.get(`/post/{`).then((response) => {
    console.log(response);
  })

  return (
    <>
      <Card>
        <Card.Header className="text-center">{post.title}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            {post.content}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <CommentForm post={post} />
      {
        comments.map((comment, index) => (
          <CommentCard comment={comment} key={index} />
        ))
      }
      <div className="d-flex justify-content-end mt-1">
        <Button variant="primary">목록</Button>
        <Button variant="danger" className="ml-2">삭제</Button>
      </div>
    </>
  )
}

export default detail;