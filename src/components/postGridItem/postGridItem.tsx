import * as React from 'react';
// styling 
import './postGridItem.css'
import { Post } from '../../interfaces/postInterfaces';

import { Container, Row } from 'react-bootstrap';

const PostGridItem: React.FC< { post: Post }> = ({ post }: { post: Post } ) => {
  return (
    <Container className="postItemContainer mb-3 rounded shadow">
      <Row className="postHeader p-2 pt-3 rounded-top">
        <p>{post.title}</p>
      </Row>
      <Row className="p-3 postBody">
        <p>{post.body}</p>
      </Row>
    </Container> 
  );
};

export default PostGridItem;
