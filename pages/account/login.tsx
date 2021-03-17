import { Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import KakaoLogin from 'react-kakao-login';

const login = () => {
    const responseSuccess = (response: any) => {
        console.log('success');
        console.log(response);
    }

    const responseFail = (error: any) => {
        console.log('fail');
        console.log(error);
    }

    return (
        <Layout>
            로그인
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <KakaoLogin
                token={'1cf05b9954067e1ab017a8c77e84eb6c'}
                onSuccess={console.log}
                onFail={console.error}
                onLogout={console.info}
                useLoginForm
            />

            <Button onClick={responseSuccess}>성공</Button>
            <Button onClick={responseFail}>실패</Button>
        </Layout>
    )
}

export default login;