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
// // 4. have red hair or green eyes
// Vampire.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]}, (error, emerald) => {
//     error ? console.log(error) : console.log(emerald);
//     process.exit();
// })


//### Select objects that match one of several values

// ### 6\. Select objects that match one of several values
// Select all the vampires that:

// // 1. love either frilly shirtsleeves or frilly collars
// Vampire.find({$or: [{loves: {$in: 'frilly shirtsleeves'}}, {loves: {$in: 'frilly collars'}}]}, (error, frillies) => {
//     error ? console.log(error) : console.log(frillies);
//     process.exit();
// })
// // 2. love brooding
// Vampire.find({loves: {$in: 'brooding'}}, (error, brooder) => {
//     error ? console.log(error) : console.log(brooder);
//     process.exit();
// })
// // 3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({$or: [{loves: {$in: 'appearing innocent'}},
// {loves: {$in: 'trickery'}},
// {loves: {$in: 'lurking in rotting mansions'}},
// {loves: {$in: 'R&B music'}}]}, (error, faves) => {
//     error ? console.log(error) : console.log(faves);
//     process.exit();
// })
// // 4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// Vampire.find({$and: [{loves: {$in: 'fancy cloaks'}}, {loves: {$nin: 'top hats'}}, {loves: {$nin: 'virgin blood'}}]}, (error, particulars) => {
//     error ? console.log(error) : console.log(particulars);
//     process.exit();
// })

// ### 7\. Negative Selection
// Select all vampires that:

// // 1. love ribbons but do not have brown eyes
// Vampire.find({$and: [{loves: {$in: 'ribbons'}}, {eye_color: {$ne: 'brown'}}]}, (error, data) => {
//     error ? console.log(error) : console.log(data);
//     process.exit();
// })
// // 2. are not from Rome
// Vampire.find({location: {$ne: 'Rome'}}, (error, nonRomans) => {
//     error ? console.log(error) : console.log(nonRomans);
//     process.exit();
// })
// // 3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({$and: [
//     {loves: {$nin: 'fancy cloaks'}},
//     {loves: {$nin: 'frilly shirtsleeves'}},
//     {loves: {$nin: 'appearing innocent'}},
//     {loves: {$nin: 'being tragic'}},
//     {loves: {$nin: 'brooding'}}
// ]}, (error, data) => {
//     error ? console.log(error) : console.log(data);
//     process.exit();
// })

// // 5. have not killed more than 200 people
// Vampire.find({victims: {$lte: 200}}, (error, nonProlifics) => {
//     error ? console.log(error) : console.log(nonProlifics);
//     process.exit();
// })


// // ## 8\. Replace

// 1. Replace the vampire called 'Claudia' with a vampire called 'Eve'. 
Vampire.replaceOne({name: 'Claudia'}, {name: 'Eve'}, (error, eveRecord) => {
    error ? console.log(error) : console.log(eveRecord);
    process.exit();
})

// ## 9\. Update

// 2. Update 'Eve' to have a gender of 'm'
// 5. Rename 'Eve's' name field to 'moniker'
// 6. We now no longer want to categorize female gender as "f", but rather as **fems**. Update all females so that the they are of gender "fems".

// <hr>
// &#x1F534;  Commit. Suggested message: "updated vampire data"
// <hr>

// ## 10\. Remove

// 1. Remove a single document wherein the hair_color is 'brown'
// 2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.


// <hr>
// &#x1F534;  Commit. Suggested message: "remove vampire data"
// <hr>

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
