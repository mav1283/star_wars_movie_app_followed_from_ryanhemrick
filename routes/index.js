var express = require('express');
var router = express.Router();
var moviesJSON = require('../movies.json');
var movies = moviesJSON.movies;

// Home route
router.get('/', function(req, res){
    
    res.render('home', {
        // you can pass an object here
        title: "Star Wars Movies",
        movies: movies
    });
});


//movie_single
router.get('/star_wars_episode/:episode_number?', function(req, res){
    var episode_number = req.params.episode_number;
    //res.send('This is the pae for episode '+ episode_number);
    
    if(episode_number >= 1 && episode_number <= 6){
        var movie = movies[episode_number -1];
        var title = movie.title;
        var mainChar = movie.main_characters;

        res.render('movie_single',{
            movies: movies,
            title: title,
            movie: movie,
            main_characters: mainChar
        });
    } else {
        //res.send('This is not the page you are looking for');
        res.render('notFound', {
           movies: movies,
            title: "This is not the page you are looking for"
        });
    }
    
    
});

// notFound
router.get('*', function(req, res){
    //res.send('This is not the page that you are looking for');
    res.render('notFound', {
           movies: movies,
            title: "This is not the page you are looking for"
        });
});

module.exports = router