const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const limiter = require('./middlewares/rateLimiter');
const routeSignup = require('./routes/signup');
const routeSignin = require('./routes/signin');
const auth = require('./middlewares/auth');
const routeUsers = require('./routes/users');
const routeCards = require('./routes/cards');

const NotFoundError = require('./errors/NotFoundError');
const errorHandler = require('./middlewares/errorHandler');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const URL = 'mongodb://127.0.0.1:27017/mestodb';
const { PORT = 3000 } = process.env;
const app = express();

app.use(cors({
  // origin: ['http://talidoom.students.nomoredomainsmonster.ru', 'http://api.talidoom.students.nomoredomainsmonster.ru'],
  origin: '*',
}));

mongoose.set('strictQuery', true);

mongoose
  .connect(URL)
  .then(() => {
    console.log('БД подключена');
  })
  .catch(() => {
    console.log('Ошбика подключения к БД');
  });

app.use(requestLogger); // Подключаем логгер до обработчиков роутов

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(limiter);

app.use('/', routeSignup);
app.use('/', routeSignin);
// app.post('sign-up', )

app.use(auth);

app.use('/users', routeUsers);
app.use('/cards', routeCards);

app.use((req, res, next) => next(new NotFoundError('Ресурс не найден')));
app.use(errorLogger); // Подключаем логгер до обработчиков роутов
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
