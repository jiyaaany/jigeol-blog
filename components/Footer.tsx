import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Footer = () => (
  <footer>
    <img src="/images/git_logo.png" alt="Git Logo" className={styles.logo} />
    <Link href="//github.com/jiyaaany">
      <a>
        github.com
      </a>
    </Link>
  </footer>
);

export default Footer;