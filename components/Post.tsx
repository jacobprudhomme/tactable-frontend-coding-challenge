import { Box, Heading } from '@chakra-ui/react';

import type PostT from '../types/post'

type Props = {
  post: PostT
}

const Post: React.VFC<Props> = ({ post }) => (
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
