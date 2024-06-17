import Database from 'better-sqlite3';

const db = new Database('blog.db', { verbose: console.log });

export default db;
