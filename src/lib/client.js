import sanityClient from "@sanity/client";
export const client = sanityClient({
  projectId: "fx8lmjh5",
  dataset: "production",
  apiVersion: "2023-01-10",
  useCdn: true,
});
