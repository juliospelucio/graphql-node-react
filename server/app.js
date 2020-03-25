const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/Schema');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mongodb
// mongoose.connect('mongodb+srv://test:mongodb@study-sa6oi.gcp.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//     console.log('Connected to database');
// });

mongoose
     .connect( 'mongodb+srv://test:mongodb@study-sa6oi.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000')
})