import gql from "graphql-tag";

export class PostGqlList {
  GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      body
    }
  }
  `;
  
  // CREATE_POST = gql`
  // mutation CreatePost($input: CreatePostInput!) {
  //   createPost(input: $input) {
  //     id
  //     title
  //     body
  //   }
  // }
  // `;
}
