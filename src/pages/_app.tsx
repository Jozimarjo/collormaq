import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme'
import '../styles/globals.css'

// import style from '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider theme={theme}>
      <Component id="meuTest" {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
