import Link from 'next/link';
import { Card, Button, Col } from 'react-bootstrap';
import { Post } from '../instance';

type P = {
    post: Post,
};

export default function PostCard({ post }: P) {
  return (
    <Col lg={3} md={6} xs={12}>
      <Link href={`/post/detail/[post_idx]`} as={`/post/detail/${post.post_idx}`}>
          <Card style={{ width: '18rem' }} className="m-2">
              <Card.Img variant="top" src="//via.placeholder.com/100x100" />
              <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Card.Text>
                      {post.content}
                  </Card.Text>

                  <div>
                      <Button variant="outline-primary">1</Button>
                  </div>
              </div>
              </Card.Body>
          </Card>
      </Link>
    </Col>
  )
}
