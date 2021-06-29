import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from '../plugins/axios';
import { Post, Comment } from '../instance';

type CommentFormProps = {
  post: Post,
  addComment: (comment: Comment) => void
}

const CommentForm = ({ post, addComment }: CommentFormProps) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    axios.post('/comments')
  }, [content]);

  const submitForm = (e) => {
    e.preventDefault();

    axios.post('/comments', { content, user_idx: 1, post_idx: post.post_idx, action: 'add' })
      .then((response) => {
        if (response.status) {
          addComment(response.data);
          setContent('');
        }
      });
  }

  return (
    <div style={{ display: 'flex' }}>
      <Form.Control as="textarea" row={3} value={content} placeholder="댓글을 입력하세요." onChange={(e) => setContent(e.target.value)} />

      <Button variant="grape" style={{ width: 100 }} onClick={submitForm}>
        저장
      </Button>
    </div>
  )
}

export default CommentForm;
