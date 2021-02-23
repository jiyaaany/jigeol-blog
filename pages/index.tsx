import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Button } from 'react-bootstrap';
import { Post } from '../instance';
import BlogPost from '../components/BlogPost';
import Header from '../components/base/Header'; 

const posts: Post[] = [...Array(10).keys()].map((v) => ({
  id: v + 1,
  title: `title${v}`,
  content: `content${v}content${v}content${v}content${v}content${v}`
}));


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        <div>
          <Button variant="danger" onClick={() => {location.href="/post/form"}}>글쓰기</Button>
        </div>
        <div className={styles.main}>
          {
            posts.map((post, index) => (
              <a href="/post/detail" key={index}>
                <BlogPost post={post}></BlogPost>
              </a>
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <img src="/images/git_logo.png" alt="Git Logo" className={styles.logo} />
        <Link href="//github.com/jiyaaany">
          <a target="_blank">
            github.com
          </a>
        </Link>
      </footer>
    </div>
  )
}
