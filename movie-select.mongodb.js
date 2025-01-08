use('first');

// 1.Récupérer tous les documents de type movies

/* db.movies.find({type:'movie'}) */

// 2.Récupérer tous les documents réalisés par George Miller

/* db.movies.find({ directors: "George Miller" }); */

// .3.Récupérer tous les documents dont le runtime est supérieur à 2h

/* db.movies.find({ runtime: { $gte: 120 } }) */

//4. Récupérer tous les films avec Emma Stone et Ryan Gosling

/*  db.movies.find({ cast: ["Emma Stone", "Ryan Gosling"] }); */

// 5. Récupérer tous les films sortis avant 1960 ayant gagné 2 récompenses ou plus


// 6. Récupérer uniquement les titles des films français (faut chercher comment faire des projections)


// 7. Récupérer les films qui ont un rating imdb supérieur à 7 et plus de 1000 votes

// 8. Récupérer les films qui ont un score rottentomatoes (tomatoes dans la db)  supérieur à 4 pour les viewers et 7 pour la critique

// 9. Récupérer les films dont le synopsys mentionne le mot 'dragon'

// 10. Afficher les 10 films avec le meilleurs rating imdb 

// CORRECTION JEAN DEMEL

use('first');

// db.movies.find({type: 'movie'});

// db.movies.find({directors: 'George Miller'});

// db.movies.find({
//     runtime: {$gte:120}
// });

db.movies.find({cast: {$all: ['Emma Stone', 'Ryan Gosling']}})
db.movies.find({$and: [{cast: 'Emma Stone'}, {cast: 'Ryan Gosling'}]}) //même chose qu'au dessus avec un $and

db.movies.find({
    year: {$lt: 1960}, 
    'awards.wins':{$gte:2}
})

db.movies.find({countries: ['France']}, {title:true}) // SELECT title FROM movies;

db.movies.find({'imdb.rating': {$gte:7}, 'imdb.votes':{$gte: 2000}})
db.movies.find({'tomatoes.viewer.rating': {$gte:4}, 'tomatoes.critic.rating':{$gte: 7}})

db.movies.find({fullplot: {$regex: /dragon/}})

db.movies.find({'imdb.rating':{$type:'number'}}).sort({'imdb.rating':-1})


db.movies.aggregate([
    {$group: {_id:'$year', count: {$sum:1}, avgImdb:{$avg:'$imdb.rating'}}}
]).sort({avgImdb:-1})

