import Link from 'next/link'
import { Card, Button } from 'react-bootstrap';
import {Post} from '../instance';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';

const posts: Post[] = [...Array(10).keys()].map((v) => ({
  id: v + 1,
  title: `title${v}`,
  content: `content${v}content${v}content${v}content${v}content${v}`
}));

type ProfileProps = {
  profile: string;
};

const ProfileLink = (props: ProfileProps) => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const Home = () => (
  <Layout>
    <div>
      <Button variant="danger" onClick={() => {
        location.href = "/post/form"
      }}>글쓰기</Button>
    </div>
    <h1>Friends List</h1>
    <ProfileLink profile="Jake"/>
    <ProfileLink profile="Peter"/>
    <ProfileLink profile="Yumi"/>

    {
      posts.map((post, index) => (
        <Link href={'/post/detail'} key={index}>
          <BlogPost post={post}/>
        </Link>
      ))
    }
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
  </Layout>
);

export default Home;