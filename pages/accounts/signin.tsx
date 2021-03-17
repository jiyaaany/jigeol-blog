import { Form, Button } from 'react-bootstrap';
import KakaoLogin from 'react-kakao-login';
import NaverLogin from 'react-naver-login';
import GoogleLogin from 'react-google-login';

const signIn = () => {
  const responseSuccess = (response) => {
    console.log(response);
    // TODO.. access_token 넘겨주기
  };

  const responseFail = (e) => {
    console.log(e);
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"/>
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
      </Form>

      <KakaoLogin
        token={'1cf05b9954067e1ab017a8c77e84eb6c'}
        onSuccess={responseSuccess}
        onFail={responseFail}
      ></KakaoLogin>

      <NaverLogin 
        clientId="Y7K2kPuQ_cRM3rxUeDv2"
        callbackUrl="http://localhost:3000/accouts/signin"
        render={(props) => <Button onClick={props.onClick}>네이버 아이디로 로그인</Button>}
        onSuccess={(naverUser) => console.log('success' + naverUser)}
        onFailure={(result) => console.error(result)}
      />

      <GoogleLogin
        clientId="1085926558450-r9elqfedcb2i7kfvov3jk843m3icdore.apps.googleusercontent.com"
        buttonText="구글 아이디로 로그인"
        onSuccess={(response) => console.log(response)}
        onFailure={(message) => console.log(message)}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}

export default signIn;