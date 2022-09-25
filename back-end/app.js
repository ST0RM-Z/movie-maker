const express = require('express');
const app = express();
const mongoose =require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const movieSchema = require('./schema/schema')
const resolvers = require('./resolvers/resolvers')
mongoose.connect('mongodb+srv://root:root@cluster0.wm0xbsl.mongodb.net/?retryWrites=true&w=majority');



// 
// setting graphql
app.use('/graphql',graphqlHTTP({
    schema:movieSchema,
    graphiql: true,
    rootValue: resolvers
}))
app.get('/',(req,res)=>{
    res.send('hello from backend')
})

app.listen(4000,()=>{
   console.log( 'Running on 4000');
})