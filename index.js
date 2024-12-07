const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});

app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});

app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});

app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});