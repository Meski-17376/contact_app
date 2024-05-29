const db = require('../DB/db');

const Contact = {
  async create(contact) {
    const { first_name, last_name,email, phone} = contact;
    const query = `
      INSERT INTO contact (first_name, last_name,email, phone)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [first_name, last_name,email, phone];
    const result = await db.query(query, values);
    return result.rows[0];
  },
  // To retrieve all contacts from the database
  async getAll() {
    const query = 'SELECT * FROM contact;';
    const result = await db.query(query);
    return result.rows;
  },
// retrieve by id= returns contact object from the database
  async getById(id) {
    const query = 'SELECT * FROM contact WHERE contact_id = $1;';
    const result = await db.query(query, [id]);
    return result.rows[0];
  },
// To edit contact object
  async update(id, contact) {
    const { first_name, last_name,email, phone } = contact;
    const query = `
      UPDATE contact
      SET first_name = $1, last_name = $2, email = $3, email = $4
      WHERE contact_id = $5
      RETURNING *;
    `;
    const values = [first_name, last_name,email, phone, contact_id];
    const result = await db.query(query, values);
    return result.rows[0];
  },
// delete contact
  async delete(id) {
    const query = 'DELETE FROM contact WHERE contact_id = $1 RETURNING *;';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
};

module.exports = Contact;
