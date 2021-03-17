import Link from 'next/link';
import { Card } from 'react-bootstrap';
import { Post } from '../instance';

type P = {
    post: Post,
};

export default function BlogPost({ post }: P) {
    return (
        <Link href={{ pathname: '/post/detail', query: { post_idx: post.id } }}>
            <Card style={{ width: '18rem' }} className="m-2">
                <Card.Img variant="top" src="//via.placeholder.com/100x100" />
                <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.content}
                </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}