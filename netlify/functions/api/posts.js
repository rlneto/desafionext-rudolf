const { parse } = require('url');
const { createClient } = require('@vercel/postgres');
const db = createClient();

module.exports = async (req, res) => {
  const { pathname } = parse(req.url, true);
  if (pathname === '/api/posts' && req.method === 'POST') {
    const { title, author, body } = req.body;
    if (!title || !author || !body) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const result = await db.query(
      'INSERT INTO posts (title, author, publishedAt, body) VALUES ($1, $2, $3, $4)',
      [title, author, new Date().toISOString(), body]
    );
    return res.status(200).json({ message: 'Post created successfully' });
  } else if (pathname === '/api/posts' && req.method === 'GET') {
    const result = await db.query('SELECT * FROM posts');
    return res.status(200).json(result.rows);
  }
};
