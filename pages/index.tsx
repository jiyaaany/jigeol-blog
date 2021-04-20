import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { Post } from '../instance';
import PostCard from '../components/PostCard';
import axios from '../plugins/axios';
import { useEffect, useState } from 'react';

// Router.push({
//   pathname: '/post/detail',
//   query: { post_idx: '' }
// })

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
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`} classes={'mt-10'}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const Home = () => {
  // const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // console.log('component did mount');

    // axios.post('/posts').then(({data}) => {
    //   setPosts(data);
    // });

    // return () => console.log('component will unmount');
  }, []);

  useEffect(() => {
    // console.log('component did update');
  }, [posts]);

  return (
    <>
      <div>
        <Button variant="danger" onClick={() => {
          location.href = "/post/form"
        }}>글쓰기</Button>
      </div>
      <h1>Friends List</h1>
      <ProfileLink profile="Jake"/>
      <ProfileLink profile="Peter"/>
      <ProfileLink profile="Yumi"/>

      <div className={'flex-center'}>
      {
        posts.map((post, index) => (
          <PostCard post={post} key={index}/>
        ))
      }
      </div>
    </>
  )
}
export default Home;
