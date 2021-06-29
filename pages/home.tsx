import axios from '../plugins/axios';
import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    setPosts(await axios.get('/posts'));
  }, []);

  return (
    <div>
      {
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      }
    </div>
  );

}

export async function getStaticProps() {
  const posts = await axios.get('/posts');

  return {
    props: {
      posts,
    },
  }
}


export default Home;
