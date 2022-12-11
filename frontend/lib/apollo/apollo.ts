import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export { ApolloProvider };

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT,
  cache: new InMemoryCache(),
});