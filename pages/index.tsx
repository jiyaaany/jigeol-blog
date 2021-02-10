import Head from 'next/head'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'
import { Card, Button } from 'react-bootstrap';

const posts = [...Array(10).keys()].map((v) => ({
  id: v + 1,
  title: `title${v}`,
  content: `content${v}content${v}content${v}content${v}content${v}`
}));


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="//via.placeholder.com/100x100" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </main>

      <footer className={styles.footer}>
        <img src="/images/git_logo.png" alt="Git Logo" className={styles.logo} />
        <Link href="//github.com/jiyaaany">
          <a>
            github.com
          </a>
        </Link>
      </footer>
    </div>
  )
}
