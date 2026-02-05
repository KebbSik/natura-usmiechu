const HYGRAPH_API_URL = process.env.HYGRAPH_API_URL!;
const HYGRAPH_API_TOKEN = process.env.HYGRAPH_API_TOKEN;

type FetchOptions = {
  query: string;
  variables?: Record<string, any>;
};

export async function fetchHygraph<T>({
  query,
  variables,
}: FetchOptions): Promise<T> {
  const res = await fetch(HYGRAPH_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(HYGRAPH_API_TOKEN && {
        Authorization: `Bearer ${HYGRAPH_API_TOKEN}`,
      }),
    },
    body: JSON.stringify({
      query,
      variables,
    }),

    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Hygraph data");
  }

  const json = await res.json();

  return json.data;
}
