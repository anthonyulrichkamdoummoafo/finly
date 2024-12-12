const express = require('express');
const app = express();
const morgan = require( 'morgan' );
const userRouter = require( './routes/user.route' );
const session = require( 'express-session' );
const dashboardRouter = require( './routes/dashboard.route' );

require( 'dotenv' ).config();
require( './libs/dbConnect' );

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(morgan( 'dev' ));
app.use(express. static ('./public' ));
app.use(morgan( 'dev' ));
app.use(express.urlencoded({ extended : false }));


app.use(
    session({
        secret : process.env.AUTH_SECRET,
        saveUninitialized : true ,
        resave : false ,
    })
);

app.use( '/' , userRouter);
app.use( '/dashboard' , dashboardRouter);
app.use( '/users' , userRouter);

app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});