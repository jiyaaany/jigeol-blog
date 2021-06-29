import { Form, Button, Card } from 'react-bootstrap';
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
    <>
      <Card>
        <Card.Header>로그인</Card.Header>
        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                로그인
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>


      <KakaoLogin
        token={'1cf05b9954067e1ab017a8c77e84eb6c'}
        onSuccess={console.log}
        onFail={console.error}
        onLogout={console.info}
        useLoginForm
      />

      <Button onClick={responseSuccess}>성공</Button>
      <Button onClick={responseFail}>실패</Button>
    </>
  )
}

export default login;