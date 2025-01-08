/* global use, db */

use('first');

// db.personne.find(); // SELECT * FROM person;


// //2 requêtes à priori équivalente pour récupérer le nombre d'éléments dans une collection
// db.personne.find().count();
// db.personne.countDocuments();

// db.personne.find({firstName:'Johnny'}) // SELECT * FROM person WHERE firstName='Johnny';


// db.personne.find({firstName:'Johnny', age: 20}); // équivalent d'un AND

// db.personne.find({
//     age: { $gte:50 }
// }); // SELECT * FROM person WHERE age >= 50

// db.personne.find({
//     age: { $gte:50, $lt: 90 }
// }) // SELECT * FROM person WHERE age BETWEEN 50 AND 90

/* db.personne.find({
    firstName: {$regex: /^Jo/}
}) //équivalent à SELECT * FROM person WHERE firstName LIKE "Jo%"
 */

//On peut tout à fait faire un insert en se "trompant" de nom de champs et de
//type de donnée, MongoDB ne considérera pas ça comme une erreur par défaut
// db.personne.insertOne({
//     name:'Test',
//     firstname: 100
// })

/* db.movies.find() */
//On a même des requête permettant de tester le type d'un champ ou s'il existe
// db.personne.find({firstname: {$type:'string'}})

