import * as React from 'react';
// bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// utils
import { GetPosts } from '../../graphql/posts/queries';
// components
import PostGridItem from '../postGridItem/postGridItem';

const PostGrid: React.FC = () => {

  const [ posts, setPosts ] = React.useState<any[]>([]);

  const init = () => {
    GetPosts().then(res => setPosts(res))
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <Container className="postGridConainer">
      <Row>
        <Col></Col>
        <Col xs="7">
          {posts !== undefined ? 
            posts.map(post => (
              <Row key={post.id}>
                <PostGridItem post={post} />
              </Row>
            ))
            :
            <h1>loading...</h1> 
          }
          
        </Col>
        <Col></Col>
      </Row>
      
    </Container> 
  );
};

export default PostGrid;
