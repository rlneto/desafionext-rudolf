import db from './db';
import { PostType } from '@/types';

export function getPosts(): PostType[] {
  const stmt = db.prepare('SELECT * FROM posts');
  const posts = stmt.all() as PostType[];
  console.log('Fetched posts from database:', posts); // Debug log
  return posts;
}
