import { gql } from '@apollo/client';

export const GET_BOOK = gql`
  query bookDetails {
  bookById(id: 1) {
    id
    name
    pageCount
  }
}
`;