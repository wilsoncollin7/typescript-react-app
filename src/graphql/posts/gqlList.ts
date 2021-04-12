import gql from "graphql-tag";

export class PostGqlList {
  CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
  `;

  GET_POSTS = gql`
  query GetPosts($options: PageQueryOptions!) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
    }
  }
  `;
}


