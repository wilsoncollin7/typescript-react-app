// ALL QUERING FUNCTIONS FOR THE POSTS
// ---------------------------------------------------
// import { useMutation } from "@apollo/client";
import { client } from '../apollo-client/apollo-client';
// import gql from "graphql-tag";
// Interfaces
// import { CreatePostInput, Post } from "../../interfaces/postInterfaces";

// List of GraphQl Queries
import { PostGqlList } from './gqlList'; 
const qlList = new PostGqlList();
// const apollo = client;

export const GetPosts = () => {
  return client.query({
    query: qlList.GET_POSTS
  }).then(res => {
    const data = res.data;
    console.log(data.posts);
    return data.posts;
  },
    error => {
      console.log(error);
    });
};

// // Post created Post
// export const useCreatePost = (): ((
//   createPostInput: CreatePostInput,
// ) => any) => {
//   const [createPost] = useMutation(qlList.CREATE_POST, {
//     update(cache,  { data: { createPost } }) {
//       cache.modify({
//         fields: {
//           posts(existingPosts = []) {
//             const newPostRef = cache.writeFragment({
//               data: createPost,
//               fragment: gql`
//                 fragment NewPost on Post {
//                   id,
//                   title,
//                   body
//                 }
//               `
//             });
//             return [...existingPosts.data, newPostRef]
//           }
//         }
//       })
//     }
//   });
//   return createPost;
// }
