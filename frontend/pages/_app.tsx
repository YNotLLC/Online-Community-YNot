import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider, client } from '../lib/apollo/apollo';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../lib/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </Provider>
    );
}
