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
    error ? console.log(`Jed's Error: ` + error) : console.log(createdSet);
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

Vampire.collection.insertMany(vamps, (error, newVamps) => {
    error ? console.log(error) : console.log(newVamps);
    process.exit();
})

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

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
