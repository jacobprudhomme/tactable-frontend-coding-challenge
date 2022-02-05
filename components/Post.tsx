import { NextComponentType } from "next";

import { Box, Heading } from "@chakra-ui/react";

type Author = {
  id: number
  name: string
  avatar: string
  postId: number
  createdAt: Date
  updatedAt: Date
}

type PostShared = {
  id: number
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}

type Comment = PostShared & { postId: number }

type Props = {
  post: PostShared & {
    authors: Author[]
    comments: Comment[]
  }
}

const Post = ({ post }: Props) => (
  <Box
    borderWidth='1px'
    borderRadius='lg'
  >
    <Heading>{post.title}</Heading>
    <p>{post.description}</p>
    <p>Written by {post.authors.map(({ name }) => name).join(', ')}</p>
    <p>Date Created: {post.createdAt.toLocaleString()}</p>
    {post.updatedAt?.valueOf() !== post.createdAt.valueOf() &&
      <p>Last Updated: {post.updatedAt.toLocaleString()}</p>
    }
  </Box>
)

export default Post
