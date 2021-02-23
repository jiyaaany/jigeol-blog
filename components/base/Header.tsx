import Image from 'next/image';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Link href="/">
            <div style={{flex: 1, backgroundColor: 'red'}}>
                <Image src="/images/bg-header.png" width={100} height={100} />
                지걸 Blog
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/account/login">로그인</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1" href="/account/signup">회원가입</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Link>
    );
}

export default Header;