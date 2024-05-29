const db = require('../DB/db');
const bcrypt = require('bcryptjs'); // password hashing algorithm

const User = {
  async create(user) {
    const { email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 17);
    const query = `
      INSERT INTO users (email, password_hash)
      VALUES ($1, $2)
      RETURNING user_id, email;
    `;
    const values = [email, hashedPassword];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1;';
    const result = await db.query(query, [email]);
    return result.rows[0];
  }
};

module.exports = User;
