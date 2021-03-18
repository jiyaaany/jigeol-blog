import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from '../plugins/axios';

const CommentForm = () => {
  const [comment, setComment] = useState<string>('');

  useEffect(() => {
    console.log(comment);
  }, [comment]);

  const submitForm = (e) => {
    e.preventDefault();

    axios.post('/comment',{comment})
      .then((response) => {
        if (response.status) {
          //modal
          setComment('');
        }
    });
  }

  return (
    <div style={{display: 'flex'}}>
      <Form.Control type="text" value={comment} placeholder="댓글을 입력하세요." onChange={(e) => setComment(e.target.value)} />

      <Button variant="primary" style={{width: 100}} onClick={submitForm}>
        저장
      </Button>
    </div>
  )
}

export default CommentForm;