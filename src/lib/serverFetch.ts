type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

export async function spacexGraphQL<T>(
  query: string,
  variables: Record<string, unknown>
): Promise<T> {
  const res = await fetch(process.env.NEXT_PUBLIC_SPACEX_GRAPHQL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const json = (await res.json()) as GraphQLResponse<T>;

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  if (json.errors?.length) {
    // console.log("GRAPHQL ERRORS:", json.errors);
    // console.log("QUERY:", query);
    // console.log("VARS:", variables);
    throw new Error(json.errors[0].message);
  }
  if (!json.data) throw new Error("No data");

  return json.data;
}
