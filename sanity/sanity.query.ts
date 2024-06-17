import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPost() {
  console.log('Fetching posts from Sanity...');
  try {
    const data = await client.fetch(
      groq`*[_type == "post"]{
        _id,
        title,
        author->{name},
        publishedAt,
        body
      }`
    );
    console.log('Fetched posts:', data);
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
