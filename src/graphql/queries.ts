/** Used to execute GraphQL queries */
import { gql } from "@apollo/client";

export const GET_LAUNCHES_PAST = gql`
  query GetLaunchesPast($limit: Int) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_local
      rocket {
        rocket_name
      }
    }
  }
`;