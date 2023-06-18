require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// const sessions = require('./src/middlewares/sessions');
const cors = require('./src/middlewares/cors');

const authRouter = require('./src/routers/authRouter');
const fetcProductsRouter = require('./src/routers/fetcProductsRouter');
const fetchFavoritesRouter = require('./src/routers/fetchFavoritesRouter');

const app = express();

const PORT = process.env.PORT ?? 6622;

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
// app.use(sessions);

app.use('/', authRouter);
app.use('/products', fetcProductsRouter);
app.use('/favorites', fetchFavoritesRouter);
app.use('*', (request, response) => {
  response.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
