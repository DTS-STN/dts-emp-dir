
const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const router = require('./routes/index');

const app = express();
const PORT = 6001;
const MONGO_CONN_STR = ``;

//app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', router);

mongoose.connect(MONGO_CONN_STR, { useNewUrlParser: true, useFindAndModify: false });
mongoose.connection.once('open', function(){
    console.log('connected to the Database.');
});
mongoose.connection.on('error', function(error) {
    console.log('Mongoose Connection Error : ' + error);
});

console.log(process.env.MONGO_USER);

app.get('/', function(request, response) { response.send('Hello World!') });

app.listen(PORT, function() { console.log(`Server listening on port ${PORT}`) });