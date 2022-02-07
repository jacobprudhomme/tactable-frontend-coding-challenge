import { Box, Flex, Spacer, Text } from '@chakra-ui/react'

import WordGroup from './WordGroup'
import type { CommentT } from '../types/commentPost'

type Props = { comment: CommentT }

const Comment: React.VFC<Props> = ({ comment }) => {
  const createdAt = new Date(comment.createdAt)
  const updatedAt = new Date(comment.updatedAt)

  return (
    <Flex align='stretch' mt={6}>
      <Box w={4} mr={2} bg='teal.300' />
      <Box>
        <Text as='b'>{comment.title}</Text>
        <Text my={3}>{comment.description}</Text>
        <Flex>
          <Text color='GrayText' fontSize='xs'>Published on <WordGroup>{createdAt.toLocaleString().slice(0, -3)}</WordGroup></Text>
          <Spacer minW={4} />
          {updatedAt.valueOf() !== createdAt.valueOf() &&
            <Text color='GrayText' fontSize='xs'>Last Updated on <WordGroup>{updatedAt.toLocaleString().slice(0, -3)}</WordGroup></Text>
          }
        </Flex>
      </Box>
    </Flex>
  )
}

export default Comment
