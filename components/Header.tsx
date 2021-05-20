import Link from 'next/link';
import Head from 'next/head';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

const Header = () => (
  <div>
    <Head>
      <title>jigeol-blog</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Navbar bg="dark" variant="dark" fixed="top" style={{height: 56}}>
      <Navbar.Brand href="/">지걸Blog</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="">About Me</Nav.Link>
        <Nav.Link href="">Resume</Nav.Link>
        <Nav.Link href="/posts/form">글쓰기</Nav.Link>
      </Nav>
      <div>
        <Button variant="danger" onClick={() => {
          location.href = "/post/form"
        }}>글쓰기</Button>
      </div>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
      <NavDropdown title="김지연" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/account/login">로그인</NavDropdown.Item>
        <NavDropdown.Item href="/account/signup">회원가입</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">로그아웃</NavDropdown.Item>
      </NavDropdown>
  </Navbar>
  </div>
);

export default Header;
