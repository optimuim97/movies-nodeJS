const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 3000;

const newLocal = 'public';
app.use('/public', express.static(newLocal))
app.use(bodyParser.urlencoded({extended: false}))
app.set('views')
app.set('view engine', 'ejs')


app.get('/', function(req, res) {
    return res.render('index');
});

app.get('/movies', function(req, res) {

    const title ='Movies Listes';

    const frenchMovies = [
        {title: 'Diners part en vri', year: "1997"},
        {title: 'Bienvenue sur la page', year: "1997"},
        {title: 'Les lascards', year : '1993'}
    ];

    //  res.send('Liste des movies');
    res.render('movies', { 'frenchMovies' : frenchMovies, title: title})
});

app.post('/movies', function(req, res){
    const data = req.body
    console.log(data)

    res.sendStatus(201);
});


app.get('/movies/:id/:title', function(req, res) {
    const id = req.params.id
    const title = req.params.title
    // res.send(`Voici l'id : ${id}`)
    res.render('movies-details', {id:id,title : title})
});



app.listen(PORT, function() {
    console.log(`On écoute le port ${PORT}`);
});