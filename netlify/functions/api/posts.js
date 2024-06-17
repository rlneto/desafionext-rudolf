const Database = require('better-sqlite3');

function openDB() {
  return new Database('./blog.db', { verbose: console.log });
}

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    try {
      const db = openDB();
      const posts = db.prepare('SELECT * FROM posts').all();
      return {
        statusCode: 200,
        body: JSON.stringify(posts),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch posts' }),
      };
    }
  }

  if (event.httpMethod === 'POST') {
    try {
      const { title, author, body } = JSON.parse(event.body);
      if (!title || !author || !body) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Missing required fields' }),
        };
      }

      const db = openDB();
      const stmt = db.prepare('INSERT INTO posts (title, author, publishedAt, body) VALUES (?, ?, ?, ?)');
      const result = stmt.run(title, author, new Date().toISOString(), body);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Post created successfully' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to create post' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method Not Allowed' }),
  };
};
