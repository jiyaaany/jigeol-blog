import { Card } from 'react-bootstrap';
import { Post } from '../instance';

type P = {
    post: Post,
};

export default function BlogPost(props: P) {
    return (
        <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src="//via.placeholder.com/100x100" />
            <Card.Body>
            <Card.Title>{props.post.title}</Card.Title>
            <Card.Text>
                {props.post.content}
            </Card.Text>
            </Card.Body>
        </Card>
    )
}