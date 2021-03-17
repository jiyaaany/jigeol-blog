import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const [comment, setComment] = useState<string>('');

const Comment = () => {
  return (
    <div style={{display: 'flex'}}>
      <Form.Control type="text" value={comment} placeholder="댓글을 입력하세요." onChange={() => setComment('123')} />

      <Button variant="primary" type="submit" style={{width: 100}}>
        저장
      </Button>
    </div>
  )
}

export default Comment;