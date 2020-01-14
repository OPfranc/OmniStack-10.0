const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
 
 
const app = express();

mongoose.connect('mongodb+srv://opjfranc:!Q2w3e4r5t@cluster0-caaja.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// mongoose.connect('mongodb://opjfranc:!Q2w3e4r5t@cluster0-shard-00-00-caaja.mongodb.net:27017,cluster0-shard-00-01-caaja.mongodb.net:27017,cluster0-shard-00-02-caaja.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

app.use(express.json());

app.use(routes);

app.listen(3333);