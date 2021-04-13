import * as React from 'react';
import { Post } from '../../interfaces/postInterfaces';

// components
// import PostGridItem from '../postGridItem/postGridItem';

import { Container, Row, Col } from 'react-bootstrap';





const PostGrid: React.FC<{ posts: Post[] }> = ({ posts }: {posts: Post[] }) => {

  return (
    <Container className="postGridConainer">
      <Row>
        <Col></Col>
        <Col xs="7">
          {/* {posts.map(post => (
          <Row key={post.id}>
            <PostGridItem post={post} />
          </Row>
          ))} */}
        </Col>
        <Col></Col>
      </Row>
      
    </Container> 
  );
};

export default PostGrid;
