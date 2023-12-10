const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../utils/constants');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const bearer = 'Bearer ';
  const errorMsg = 'Неправильные почта или пароль';

  if (!authorization || !authorization.startsWith(bearer)) {
    return next(new UnauthorizedError(`${errorMsg}(${authorization})!`));
  }

  const token = authorization.replace(bearer, '');

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new UnauthorizedError(`${errorMsg}!`));
  }

  req.user = payload;

  return next();
};
