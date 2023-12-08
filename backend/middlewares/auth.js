const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../utils/constants');
// const { JWT_TOKEN } = require('../utils/constants');

const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { Authorization } = req.headers;
  console.log(req.headers);
  const bearer = 'Bearer ';
  if (!Authorization || !Authorization.startsWith(bearer)) {
    throw new UnauthorizedError(`${'Нет токена авторизации'}(${Authorization})!`);
  }

  const token = Authorization.replace(bearer, '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedError(`${'Передан неверный токен авторизации'}!`);
  }

  req.user = payload;

  return next();
};
