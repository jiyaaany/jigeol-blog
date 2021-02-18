import Link from 'next/link';
import Head from 'next/head';

const Header = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/profile">
      <a>Profile</a>
    </Link>
    <Link href="/post/form">
      <a>글쓰기</a>
    </Link>
  </div>
);

export default Header;