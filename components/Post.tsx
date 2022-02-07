import { Box, Flex, Heading, Spacer, Text, VStack } from '@chakra-ui/react';

import Comment from '../components/Comment'
import WordGroup from './WordGroup'
import type { PostT } from '../types/commentPost'

type Props = { post: PostT }

const Post: React.VFC<Props> = ({ post }) => {
  const createdAt = new Date(post.createdAt)
  const updatedAt = new Date(post.updatedAt)

  return (
    <Box
      p={4}
      borderWidth='1px'
      borderRadius='lg'
      borderColor='gray.300'
    >
      <Heading color='gainsboro' textTransform='uppercase'>{post.title}</Heading>
      <Text color='GrayText' fontSize='sm' >Written by {post.authors.map(({ name }) => name).join(', ')}</Text>
      <Text my={4} align='justify' noOfLines={2}>{post.description}</Text>
      <Flex>
        <Text color='GrayText' fontSize='xs'>Published on <WordGroup>{createdAt.toLocaleString().slice(0, -3)}</WordGroup></Text>
        <Spacer />
        {updatedAt.valueOf() !== createdAt.valueOf() &&
          <Text color='GrayText' fontSize='xs'>Last Updated on <WordGroup>{updatedAt.toLocaleString().slice(0, -3)}</WordGroup></Text>
        }
      </Flex>
      <VStack spacing={6}>
        {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </VStack>
    </Box>
  )
}

export default Post
