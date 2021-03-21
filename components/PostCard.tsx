import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { Post } from '../instance';

type P = {
    post: Post,
};

export default function PostCard({ post }: P) {
    return (
        <Link href={`/post/detail/[post_idx]`} as={`/post/detail/${post.post_idx}`}>
            <Card style={{ width: '18rem' }} className="m-2">
                <Card.Img variant="top" src="//via.placeholder.com/100x100" />
                <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        {post.content}
                    </div>
                    <div>
                        <Button variant="outline-primary">1</Button>
                    </div>
                </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}