import Link from 'next/link';
import {Card} from 'react-bootstrap';
import {Post} from '../instance';

type P = {
  post: Post,
};

export default function PostCard({post}: P) {
  return (
      <Card>
        <Card.Img variant="top" src="//via.placeholder.com/100x50"/>
        <Card.Body>
          <Link href={`/post/detail/[post_idx]`} as={`/post/detail/${post.id}`}>
            <div>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                {post.content}
              </Card.Text>
            </div>
          </Link>
          <div className={'sub-info'}>
            <span>2021년 5월 20</span>
            <span className={'separator'}>·</span>
            <span>2개의 댓글</span>
          </div>
        </Card.Body>
        <div className={'user-info'}>
          <Link href={`/users`} as={`/users`}>
            <div style={{display: 'flex'}}>
              <img src="//via.placeholder.com/50x50" alt="사용자 프로필" className={'user-img'} />
              <span style={{color: '#868E96'}}>by <b>jigeol</b></span>
            </div>
          </Link>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" className={'likes'}>
              <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
            </svg>
            78
          </div>
        </div>
      </Card>
  )
}
