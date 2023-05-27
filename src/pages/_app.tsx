import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contents/SidebarDrawerContext'
import { makeServer } from '../services/mirage'

if(process.env.NODE_ENV === 'development') {
  makeServer()
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default App