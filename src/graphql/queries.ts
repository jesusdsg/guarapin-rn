import {gql} from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $name: String) {
    characters(page: $page, filter: {name: $name}) {
      info {
        next
        prev
        pages
      }
      results {
        id
        name
        image
        species
      }
    }
  }
`;
