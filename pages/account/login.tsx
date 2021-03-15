import { Form, Button } from 'react-bootstrap';

const login = () => {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="제목" />
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={10} />
            </Form.Group>

            <Button type="submit">로그인</Button>
        </Form>
    )
}

export default login;