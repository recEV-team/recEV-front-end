import { gql } from 'apollo-boost';

export const FETCH_CHARITIES = gql`
  {
    fetchCharities {
      charityLegalName
      smallDescription
    }
  }
`;
