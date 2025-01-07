use ('first');

/* db.personne.insertOne(
    {
        name: 'Bobson',
        firstName: 'Bobby',
        age: 54,
        address: {
            street: 'Rue Antoine Primat',
            number: '34',
            city: 'Villeurbanne',
            zipCode: '69100'
        },
    languages: ['English', 'French','Arab']
}) */

db.personne.find({'address.city': 'Villeurbanne'})