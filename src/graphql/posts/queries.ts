// ALL QUERING FUNCTIONS FOR THE POSTS
// ---------------------------------------------------
import { useQuery, useMutation } from "@apollo/client";
import gql from "graphql-tag";
// Interfaces
import { CreatePostInput, Post } from "../../interfaces/postInterfaces";

// List of GraphQl Queries
import { PostGqlList } from './gqlList'; 
const qlList = new PostGqlList();

// Get First 100 Posts
export const useGetPosts = (): Post[] | undefined => {
  const { data } = useQuery(qlList.GET_POSTS, {
    variables: { options: { paginate: { limit: 1000 } } }
  });
  console.log(data)
  return data?.posts?.data;
};

// Post created Post
export const useCreatePost = (): ((
  createPostInput: CreatePostInput,
) => any) => {
  const [createPost] = useMutation(qlList.CREATE_POST, {
    update(cache,  { data: { createPost } }) {
      cache.modify({
        fields: {
          posts(existingPosts = []) {
            const newPostRef = cache.writeFragment({
              data: createPost,
              fragment: gql`
                fragment NewPost on Post {
                  id,
                  title,
                  body
                }
              `
            });
            return [...existingPosts.data, newPostRef]
          }
        }
      })
    }
  });
  return createPost;
}
