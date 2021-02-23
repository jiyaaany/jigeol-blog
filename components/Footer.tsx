import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Nav from 'react-bootstrap/Nav';

const Footer = () => (
  <footer>
    <Nav className="justify-content-center" style={{ backgroundColor: 'black', }}>
      <img src="/images/git_logo.png" alt="Git Logo" className={styles.logo} />
      <Link href="//github.com/jiyaaany">
        <a>
          github.com
        </a>
      </Link>
    </Nav>
    
  </footer>
);

export default Footer;