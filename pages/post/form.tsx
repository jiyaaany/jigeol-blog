import Header from '../../components/base/Header';
import { Form, Button } from 'react-bootstrap';

const form = () => {
    return (
        <div>
            <Header></Header>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="제목" />
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={10} />
                </Form.Group>

                <Button type="submit">저장</Button>
                <Button variant="success" onClick={() => {location.href="/"}}>목록</Button>
            </Form>
        </div>
    )
}

export default form;