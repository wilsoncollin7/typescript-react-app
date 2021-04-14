import * as React from 'react';
// styling 
import './postGridItem.css'
// bootstrap
import { Container, Row } from 'react-bootstrap';
// utils
import { Post } from '../../interfaces/postInterfaces';


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
