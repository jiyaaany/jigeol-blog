import { Card } from 'react-bootstrap';
import { Comment } from '../instance';
import { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

type CommentProps = {
  comment: Comment,
  style?: CSSProperties;
}

const CommentCard = ({ comment, style }: CommentProps) => {
  const [replyUser]

  const replyComment = () => {
    
  }

  return (
    <Card body style={style}>
      {comment.content} <br />
      <FontAwesomeIcon icon={faReply} onClick={replyComment} />
    </Card>  
  );  
};

export default CommentCard;