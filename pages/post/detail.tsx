import Header from '../../components/base/Header';
import { Post } from '../../instance';
import { Card, Button } from 'react-bootstrap';
import Comment from '../../components/Comment';

const post = {
    id: 1,
    title: 'title1',
    content: 'content1content1content1content1content1content1',
};

const detail = () => (
    <>
        <Card>
            <Card.Header className="text-center">{post.title}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                {post.content}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        {/* <Comment></Comment> */}
        <div className="d-flex justify-content-end mt-1">
            <Button variant="primary">목록</Button>
            <Button variant="danger" className="ml-2">삭제</Button>
        </div>
    </>
)

export default detail;