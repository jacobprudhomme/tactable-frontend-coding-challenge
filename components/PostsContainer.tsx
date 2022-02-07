import { useState } from 'react'
import { useQuery } from 'react-query'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, Spacer, Text, VStack } from '@chakra-ui/react'

import Post from './Post'
import { PAGE_SIZE, getPosts } from '../lib/posts'
import type { PostT } from '../types/commentPost'

type Query = {
  posts: PostT[]
  pageCount: number
}

const PostsContainer: React.VFC = () => {
  const { isLoading, isError, data, error } = useQuery<Query, Error>('posts', getPosts)
  const { posts, pageCount } = data || { posts: [], pageCount: 1 }
  const [ page, setPage ] = useState(1)

  if (isLoading) {
    return <Heading color='teal.500'>Loading...</Heading>
  } else if (isError) {
    return (
      <VStack>
        <Heading color='teal.500'>There was an error</Heading>
        <Text>{error?.message}</Text>
      </VStack>
    )
  } else {
    const postsToShow = Array
      .from(
        { length: PAGE_SIZE },
        (_, i) => (page - 1) * PAGE_SIZE + i
      )
      .map(i =>
        i < posts.length &&
          <Post key={posts[i].id} post={posts[i]} />
      )

    return (
      <VStack
        w={{
          base: '90%',
          md: '80%',
          xl: '50%',
        }}
        spacing={8}
        align='stretch'
      >
        {postsToShow}
        <Flex>
          <Button
            leftIcon={<ArrowBackIcon />}
            bgColor='gray.50'
            _hover={{ background: 'gray.300' }}
            disabled={page === 1}
            onClick={() => { setPage(page - 1); window.scrollTo(0, 0) }}
          >
            Prev Page
          </Button>
          <Spacer />
          <Button
            rightIcon={<ArrowForwardIcon />}
            bgColor='gray.50'
            _hover={{ background: 'gray.300' }}
            disabled={page === pageCount}
            onClick={() => { setPage(page + 1); window.scrollTo(0, 0) }}
          >
            Next Page
          </Button>
        </Flex>
      </VStack>
    )
  }
}

export default PostsContainer
