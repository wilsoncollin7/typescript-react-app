import React from 'react';
// styling

import { Container, Button } from 'react-bootstrap';

import { useLazyQuery } from '@apollo/client';
import { PostGqlList } from '../graphql/posts/gqlList'; 

const TestBtn: React.FC = () => {

  const qlList = new PostGqlList();

  const [getPost, { data }] = useLazyQuery(qlList.GET_POSTS);

  return (
    <Container>

      <Button className="mt-5" onClick={() => getPost()}>test</Button>
    </Container>
  );
}

export default TestBtn;
