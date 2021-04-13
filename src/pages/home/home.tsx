import * as React from 'react';

import PostGrid from '../../components/postGrid/postGrid';
// import PostForm from '../../components/postsForm/postForm';
import { Container, Row, Col } from 'react-bootstrap';

import { GetPosts } from '../../graphql/posts/queries';

const Home: React.FC = () => {

  const [ posts, setPosts ] = React.useState([]);

  const init = () => {
    const posts: any = GetPosts();
    setPosts(posts);
  };

  // const getData = () => {
  //   fetch('/api/posts')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setPosts(data);
  //     }); 
  // }

  React.useEffect(() => {
    // getData();
    init();
  }, []);

  return ( 
    <Container>
      <Row>
        <Col></Col>
        <Col xs={9}>
          {/* <PostForm /> */}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <PostGrid posts={posts || []} />
      </Row>
    </Container>
  );
};

export default Home;
