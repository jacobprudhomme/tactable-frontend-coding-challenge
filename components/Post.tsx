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
      p={8}
      bgColor='white'
      borderRadius='lg'
      boxShadow='lg'
    >
      <Heading color='teal.300' textTransform='uppercase'>
        {post.title}
      </Heading>
      <Text color='GrayText' fontSize='sm' >
        Written by{' '}
        {post.authors.map(({ name }) => name).join(', ')}
      </Text>
      <Text my={4} align='justify'>
        {post.description}
      </Text>
      <Flex>
        <Text color='GrayText' fontSize='xs'>
          Published on{' '}
          <WordGroup>{createdAt.toLocaleString().slice(0, -3)}</WordGroup>
        </Text>
        <Spacer minW={2} />
        {updatedAt.valueOf() !== createdAt.valueOf() &&
          <Text color='GrayText' fontSize='xs'>
            Last Updated on{' '}
            <WordGroup>{updatedAt.toLocaleString().slice(0, -3)}</WordGroup>
          </Text>
        }
      </Flex>
      <VStack spacing={6}>
        {post.comments.map(comment =>
          <Comment key={comment.id} comment={comment} />
        )}
      </VStack>
    </Box>
  )
}

export default Post
