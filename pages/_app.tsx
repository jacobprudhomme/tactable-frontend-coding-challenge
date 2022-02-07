import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'

const queryClient = new QueryClient()

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </QueryClientProvider>
)

export default MyApp
