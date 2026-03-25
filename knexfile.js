require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/record-store-locator'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};