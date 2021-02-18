import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout';
import { Card, Button } from 'react-bootstrap';

const posts = [...Array(10).keys()].map((v) => ({
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

const Index = () => (
  <Layout>
    <h1>Friends List</h1>
    <ProfileLink profile="Jake" />
    <ProfileLink profile="Peter" />
    <ProfileLink profile="Yumi" />

    {[...Array(10).keys()].map(v => (
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
    ))}
    
  </Layout>
);

export default Index;