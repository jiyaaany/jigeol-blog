import Link from 'next/link';
import { Button, Col } from 'react-bootstrap';
import { Post } from '../instance';
import styled from 'styled-components';

const Card = styled.div`
  width: 20rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardImageLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const CardImageDiv = styled.div`
  padding-top: 52.19206680584551%;
  width: 100%;
  position: relative;
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const CardInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;

const CardInfoLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const CardInfoTitle = styled.h4`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(33, 37, 41);
`;

const CardInfoContent = styled.div`
  flex: 1 1 0%;
`;

const CardInfoBody = styled.p`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(73, 80, 87);
`;

const CardInfoEtc = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgb(134, 142, 150);
`;

const CardInfoEtcSeparator = styled.span`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`;

const CardSubInfo = styled.div`
  padding: 0.625rem 1rem;
  border-top: aliceblue;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export default function PostCard({ post }) {
  return (
    <Card>
      <CardImageLink>
        <CardImageDiv>
          <CardImage src="//picsum.photos/200/200" />
        </CardImageDiv>
      </CardImageLink>
      <CardInfo>
        <CardInfoLink>
          <CardInfoTitle>{post.title}</CardInfoTitle>
          <CardInfoContent>
            <CardInfoBody>{post.body}</CardInfoBody>
          </CardInfoContent>
        </CardInfoLink>

        <CardInfoEtc>
          <span>2021년 6월 10일</span>
          <CardInfoEtcSeparator />
          <span>5개의 댓글</span>
        </CardInfoEtc>
      </CardInfo>
      <CardSubInfo></CardSubInfo>
    </Card>
    // <Col lg={3} md={6} xs={12}>
    //   <Link href={`/post/detail/[post_idx]`} as={`/post/detail/${post.post_idx}`}>
    //     <Card style={{ width: '18rem' }} className="m-2">
    //       <Card.Img variant="top" src="//via.placeholder.com/100x100" />
    //       <Card.Body>
    //         <Card.Title>{post.title}</Card.Title>
    //         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    //           <Card.Text>
    //             {post.content}
    //           </Card.Text>

    //           <div>
    //             <Button variant="outline-primary">1</Button>
    //           </div>
    //         </div>
    //       </Card.Body>
    //     </Card>
    //   </Link>
    // </Col>
  );
}
