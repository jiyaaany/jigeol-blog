import Link from 'next/link';
import { Button, CardDeck, CardColumns, Card } from 'react-bootstrap';
import {Comment, Post, User} from '../instance';
import PostCard from '../components/PostCard';
import moment from 'moment';
import axios from '../plugins/axios';
import { useEffect, useState } from 'react';
import { Container } from 'next/app';

// Router.push({
//   pathname: '/post/detail',
//   query: { post_idx: '' }
// })

// Router.push({
//   pathname: '/post/detail',
//   query: { post_idx: '' }
// })

const posts: Post[] = [...Array(10).keys()].map((v) => ({
  id: v + 1,
  title: `title${v}`,
  content: `content${v}content${v}content${v}content${v}content${v}`,
  reg_date: new Date(moment().format()),
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

// export const getStaticProps = async () => {
//   const posts = await axios.post('/posts');
//
//   return {
//     props: { posts }
//   }
//
// }

const Home = () => {
  return (
    <>
      <ProfileLink profile="Jake"/>
      <ProfileLink profile="Peter"/>
      <ProfileLink profile="Yumi"/>

      <CardColumns>
        {
          posts.map((post, index) => (
            <PostCard key={index} post={post}/>
          ))
        }
      </CardColumns>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160"/>
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
          <Card.Img variant="top" src="holder.js/100px160"/>
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
          <Card.Img variant="top" src="holder.js/100px160"/>
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
  );
}
export default Home;
