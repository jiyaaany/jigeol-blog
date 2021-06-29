import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, CardDeck, Card } from 'react-bootstrap';
import { Comment, Post, User } from '../instance';
import PostCard from '../components/PostCard';
import moment from 'moment';
import axios from '../plugins/axios';

// Router.push({
//   pathname: '/post/detail',
//   query: { post_idx: '' }
// })

// Router.push({
//   pathname: '/post/detail',
//   query: { post_idx: '' }
// })

type ProfileProps = {
  profile: string;
};

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const ProfileLink = (props: ProfileProps) => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const comments: Comment[] = [...Array(10).keys()].map(index => ({
  id: index + 1,
  comments: `${index + 1} 번째 댓글`,
  user: {
    id: 1,
    user_id: 'jiyaaany',
    email: 'jiyaaany@gmail.com',
    name: '김지연',
    nick_name: '지걸',
  },
  reg_date: moment().toDate(),
}));

export const getStaticProps = async () => {
  const [posts, setPosts] = useState([]);

  axios.get('/posts')
    .then(posts => {
      setPosts(
        Object.values(posts).map(async post => {
          return ({
            ...post,
            content: post.body,
            reg_date: randomDate(moment("2021-01-01").toDate(), moment().toDate()),
            user: await axios.get(`/users/${post.userId}`),
            comments: await axios.get(`/posts/${post.id}/comments`),
          });
        })
      );
    });

  return {
    props: { posts }
  }

}

const Home = (props) => {
  console.log(props);

  // const posts: Post[] = [...Array(100).keys()].map((v) => ({
  //   id: v + 1,
  //   title: `개발 블로그 포스트 ${v}`,
  //   content: `개발 블로그 포스팅 ${v} 개발 블로그 포스팅 ${v} 개발 블로그 포스팅 ${v} 개발 블로그 포스팅 ${v}`,
  //   reg_date: moment().toDate(),
  //   user: {
  //     user_idx: 1,
  //     user_id: 'jiyaaany',
  //     email: 'jiyaaany@gmail.com',
  //     name: '김지연',
  //     nick_name: '지걸',
  //   },
  //   comments,
  // }));

  return (
    <>
      <div>
        <Button variant="danger" onClick={() => {
          location.href = "/post/form"
        }}>글쓰기</Button>
      </div>
      <h1>Friends List</h1>
      <ProfileLink profile="Jake" />
      <ProfileLink profile="Peter" />
      <ProfileLink profile="Yumi" />

      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
        content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </>
  )
}
export default Home;
