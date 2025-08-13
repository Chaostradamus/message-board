const { Client } = require("pg");
require("dotenv").config();

(async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Required for Neon
  });

  try {
    await client.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        user VARCHAR(255) NOT NULL,
        added TIMESTAMP DEFAULT NOW()
      );
      
      -- Optional: Seed initial data
      INSERT INTO messages (text, user) VALUES
        ('Hi there!', 'Amando'),
        ('Hello World!', 'Charles')
      ON CONFLICT DO NOTHING;
    `);
    console.log("Database initialized!");
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    await client.end();
  }
})();
