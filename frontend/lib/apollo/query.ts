import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        title
        content
        date
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;
