import { PortableTextBlock } from "sanity";

export type PostType = {
  title: string;
  author: {
    _ref: string;
    _type: 'reference';
  };
  publishedAt: string;
  body: any;
};
