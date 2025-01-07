/* global use, db */

use ('first');

/* db.personne.find(); // SELECT * FROM personne

// 2 requetes à priori équivalente pour recuperer le nombre d'élément dans une collection
db.personne.find().count();
db.personne.countDocuments(); */

/* db.personne.find({firstName: 'John'}) // SELECT * FROM personn Where firstName='John

db.personne.find({firstName: 'John', age: 30}) */

db.personne.find({
    age:{ $gte:50}
})

/* db.personne.find({
    age : { $gte:50, $lt: 90}
}) */

