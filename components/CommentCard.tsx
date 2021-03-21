import { Card } from 'react-bootstrap';
import { Comment } from '../instance';
import {CSSProperties} from "react";

type CommentProps = {
  comment: Comment,
  style?: CSSProperties;
}

const CommentCard = ({ comment, style }: CommentProps) => (
    <Card body style={style}>{comment.content}</Card>
);

export default CommentCard;