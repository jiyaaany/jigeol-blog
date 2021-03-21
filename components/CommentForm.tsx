import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from '../plugins/axios';
import { Post, Comment } from '../instance';

type CommentFormProps = {
  post: Post,
  addComment: (comment: string) => void
}

const CommentForm = ({ post, addComment }: CommentFormProps) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    axios.post('/comments')
  }, [content]);

  const submitForm = (e) => {
    e.preventDefault();

    axios.post('/comments', {content, user_idx: 1, post_idx: post.post_idx})
      .then((response) => {
        if (response.status) {
          addComment(content);
          setContent('');
        }
    });
  }

  return (
    <div style={{display: 'flex'}}>
      <Form.Control type="text" value={content} placeholder="댓글을 입력하세요." onChange={(e) => setContent(e.target.value)} />

      <Button variant="primary" style={{width: 100}} onClick={submitForm}>
        저장
      </Button>
    </div>
  )
}

export default CommentForm;