import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { PostType } from '@/types';

export async function GET() {
  const stmt = db.prepare('SELECT * FROM posts');
  const posts = stmt.all();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, author, body }: Partial<PostType> = await request.json();

  if (!title || !author || !body) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const stmt = db.prepare('INSERT INTO posts (title, author, publishedAt, body) VALUES (?, ?, ?, ?)');
  const result = stmt.run(title, author, new Date().toISOString(), body);

  if (result.changes > 0) {
    return NextResponse.json({ message: 'Post created successfully' });
  } else {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
