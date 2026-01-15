/** Used to execute GraphQL queries */
import { gql } from "@apollo/client";

/**
 * CSR — Apollo Client (Client Components)
*/
export const GET_LAUNCHES_PAST = gql`
  query GetLaunchesPast($limit: Int!, $offset: Int!) {
    launchesPast(
      limit: $limit
      offset: $offset
      sort: "launch_date_utc"
      order: "desc"
    ) {
      id
      mission_name
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        mission_patch_small
        wikipedia
        video_link
      }
    }
  }
`;

/**
 * SSR — Server Components (fetch)
 */
export const GET_LAUNCH_DETAILS_SSR = `
  query GetLaunchDetails($id: ID!) {
    launchesPast(find: { id: $id }) {
      id
      mission_name
      details
      rocket { rocket_name }
      links {
        wikipedia
        video_link
        mission_patch_small
        flickr_images
      }
      launch_date_utc
      launch_success
    }
  }
`;

