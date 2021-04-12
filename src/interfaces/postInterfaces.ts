export interface Post {
  id: number,
  title: string,
  body: string
}

export interface CreatePostInput {
  variables: {
    input: {
      title: string,
      body: string
    }
  }
}

export interface FormData {
  title: string,
  body: string
}
