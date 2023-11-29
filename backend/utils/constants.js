const OK_STATUS = 200;
const HTTP_CREATED_CODE = 201;
const HTTP_BAD_REQUEST_CODE = 400;
const NOT_FOUND_PAGE_CODE = 404;
const SERVER_ERROR = 500;

// регулярка
const urlRegexPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

// node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
const JWT_SECRET = '2897bcd5085f35a55a0b99984a428c0e1d502b67caf9ae789b9b400404445b77';
// const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzAxMjcyMzE0fQ.l9w-71hBtRut6yM_dbngU2Uhzn2XZVJLsi12s-8KJo4';
module.exports = {
  JWT_SECRET,
  // JWT_TOKEN,
  urlRegexPattern,
  OK_STATUS,
  HTTP_CREATED_CODE,
  HTTP_BAD_REQUEST_CODE,
  NOT_FOUND_PAGE_CODE,
  SERVER_ERROR,
};
