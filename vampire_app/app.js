// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const Vampire = require('./models/Vampire.js');
// 3. Require your extra data source
const populate = require('./populateVampires');
// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/vampires';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected.')
})
mongoose.connection.on('error', (error) => {
    console.log(`MongoDB connection error: ${error}`)
})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(populate, (error, createdSet) => {
    // error ? console.log(`Jed's Error: ` + error) : console.log(createdSet);
})
// ### Add some new vampire data

let vamps = [
    {
        name: 'Matthew',
        gender: 'm',
    },
    {
        name: 'Mark',
        gender: 'm',
    },
    {
        name: 'Mary',
        gender: 'f',
    },
    {
        name: 'Monica',
        gender: 'f',
    }
]

// Vampire.collection.insertMany(vamps, (error, newVamps) => {
//     error ? console.log(error) : console.log(newVamps);
//     process.exit();
// })

// ### Select by comparison

// // 1. Find all the vampires that that are females
// Vampire.find({gender: 'f'}, (error, foundFemales) => {
//     error ? console.log(error) : console.log(foundFemales);
//     process.exit();
// })
// // 2. have greater than 500 victims
// Vampire.find({victims: {$gt: 500}}, (error, massVamps) => {
//     error ? console.log(error) : console.log(massVamps);
//     process.exit();
// })
// // 3. have fewer than or equal to 150 victims
// Vampire.find({victims: {$lte: 100}}, (error, smallVamps) => {
//     error ? console.log(error) : console.log(smallVamps);
//     process.exit();
// })
// // 4. have a victim count is not equal to 210234
//     Vampire.find({victims: {$ne: 210234}}, (error, otherVamps) => {
//         error ? console.log(error) : console.log(otherVamps);
//         process.exit();
//     })

// // 5. have greater than 150 AND fewer than 500 victims
// Vampire.find({victims: {$gt: 150,$lt: 500}}, (error, rightVamps) => {
//     error ? console.log(error) : console.log(rightVamps);
//     process.exit;
// })

// // ### Select by exists or does not exist
// // 1. have a title property
// Vampire.find({title: {$exists: true}}, (error, propertied) => {
//     error ? console.log(error) : console.log(propertied);
//     process.exit;
// })
// // 2. do not have a victims property
// Vampire.find({victims: {$exists: false}}, (error, harmless) => {
//     error ? console.log(error) : console.log(harmless);
//     process.exit;
// })
// // 3. have a title AND no victims
// Vampire.find({title: {$exists: true}, victims: {$exists: false}}, (error, minimal) => {
//     error ? console.log(error) : console.log(minimal);
//     process.exit;
// })
// // 4. have victims AND the victims they have are greater than 1000
// Vampire.find({victims: {$gt: 1000}}, (error, prolific) => {
//     error ? console.log(error) : console.log(prolific);
//     process.exit;
// })

// ### Select with OR

// // 1. are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]}, (error, spots) => {
//     error ? console.log(error) : console.log(spots);
//     process.exit();
// })
// // 2. love brooding or being tragic
// Vampire.find({$or: [{loves: {$in: 'brooding'}}, {loves: {$in: 'being tragic'}}]}, (error, sad) => {
//     error ? console.log(error) : console.log(sad);
//     process.exit();
// })
// // 3. have more than 1000 victims or love marshmallows
// Vampire.find({$or: [{victims: {$gt: 1000}}, {loves: {$in: 'marshmallows'}}]}, (error, strange) => {
//     error ? console.log(error) : console.log(strange);
//     process.exit();
// })
// 4. have red hair or green eyes
Vampire.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]}, (error, emerald) => {
    error ? console.log(error) : console.log(emerald);
    process.exit();
})

// <hr>
// &#x1F534;  Commit. Suggested message: "selected more vampires with OR"
// <hr>
/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
