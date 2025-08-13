const pool = require("./pool");

module.exports = {
  async getAllMessages() {
    const { rows } = await pool.query(
      "SELECT * FROM messages ORDER BY added DESC"
    );
    return rows;
  },

  async createMessage({ text, user }) {
    await pool.query("INSERT INTO messages (text, user) VALUES ($1, $2)", [
      text,
      user,
    ]);
  },

  async getMessageById(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
      id,
    ]);
    return rows[0];
  },
};
