require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  credentials: true,
};

/* **********MIDDLEWARES******** */
app.use(express.static(path.resolve(__dirname, './public')));
app.use(morgan('tiny'));
app.use(cors(corsOptions));
app.set('view engine', 'ejs');
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    key: 'user_cookie',
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 120000 }, //120000 = 2minutos
  })
);

/* **********SISTEMA DE RUTAS******** */
const usersRouter = require('./src/routes/users.routes');
const productsRouter = require('./src/routes/products.routes');
const brandsRouter = require('./src/routes/brands.routes');
const authRouter = require('./src/routes/auth.routes');
const adminRouter = require('./src/routes/admin.routes');
const categoriesRouter = require('./src/routes/categories.routes');
// app.use(morgan("tiny"))
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/brands', brandsRouter);
app.use('/categories', categoriesRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);

/* *******ARRANCAR SERVIDOR******** */
app.listen(4000, () => {
  console.log('Servidor funcionando en el puerto 4000!');
});
