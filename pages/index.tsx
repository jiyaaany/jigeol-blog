import Link from 'next/link'
import { Card, Button } from 'react-bootstrap';
import {Post} from '../instance';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import axios from '../plugins/axios';
import { useEffect, useState } from 'react';

// const posts: Post[] = [...Array(10).keys()].map((v) => ({
//   id: v + 1,
//   title: `title${v}`,
//   content: `content${v}content${v}content${v}content${v}content${v}`
// }));

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

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    console.log('component did mount');

    axios.post('/posts').then(({ data }) => {
      setPosts(data);
    });

    return () => console.log('component will unmount');
  }, []);
  
  useEffect(() => {
    console.log('component did update');
    console.log(posts);
  }, [posts]);

  return (
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
};

export default Home;