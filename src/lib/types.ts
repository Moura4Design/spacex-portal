/** Launch summary used in the launches list page */
export type Launch = {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean | null;
  rocket: { rocket_name: string; } | null;
};

/** GraphQL response type for launches list */
export type GetLaunchesPastData = {
  launchesPast: Launch[];
};

/** GraphQL variables for launches list query */
export type GetLaunchesPastVars = {
  limit: number;
  offset: number;
};

/** Detailed launch information used in the launch details page */
export type LaunchDetails = {
  id: string;
  mission_name: string;
  details: string | null;
  rocket: { rocket_name: string | null } | null;
  links: {
    wikipedia: string | null;
    video_link: string | null;
    mission_patch_small: string | null;
    flickr_images: (string | null)[] | null;
  } | null;
  launch_date_utc: string | null;
  launch_success: boolean | null;
};

/** GraphQL response type for launch details query */
export type LaunchDetailsData = {
  launchesPast: LaunchDetails[];
};