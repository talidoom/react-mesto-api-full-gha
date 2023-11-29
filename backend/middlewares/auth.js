const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../utils/constants');
const { JWT_TOKEN } = require('../utils/constants');

const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const bearer = 'Bearer ';
  if (!authorization || !authorization.startsWith(bearer)) {
    return next(new UnauthorizedError(`${'Нет токена авторизации'}(${authorization})!`));
  }

  const token = authorization.replace(bearer, '');
  let payload;
  // const JWT_TOKEN = jwt.sign({ _id: 1234567811 }, JWT_SECRET);
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new UnauthorizedError(`${'Передан неверный токен авторизации'}!`));
  }

  req.user = payload;

  return next();
};
