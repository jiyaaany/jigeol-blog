import Link from 'next/link'
import {Post} from '../instance';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import { Button } from 'react-bootstrap';

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

  </Layout>
);

export default Home;