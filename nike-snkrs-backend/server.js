import mongoose from 'mongoose';
import express from 'express';
import Cors from 'cors';
import Card from './dbCard.js';

// App config
const app = express();
const port = process.env.PORT || 8001;
const connectionURL = '';

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// API Endpoints
app.get('/', (request, response) => {
    response.status(200).send('TEST');
});

app.post('/snkrs', (request, response) => {
    const dbCard = request.body;
    Card.create(dbCard, (error, data) => {
        if(error){
            response.status(500).send(error);
        } else {
            response.status(201).send(data);
        }
    })
});

app.get('/snkrs', (request, response) => {
    Card.find((error, data) => {
        if(error){
            response.status(500).send(error);
        } else {
            response.status(200).send(data);
        }
    })
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));