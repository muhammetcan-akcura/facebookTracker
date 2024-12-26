require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3001,
  FACEBOOK_API_KEY: process.env.FACEBOOK_API_KEY,
  FACEBOOK_API_SECRET: process.env.FACEBOOK_API_SECRET
};