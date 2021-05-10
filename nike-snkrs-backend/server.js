import mongoose from "mongoose";
import express from "express";
import Cors from "cors";
import Product from "./schema.js";

// App config
const app = express();
const port = process.env.PORT || 8001;
const connectionURL = "";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (request, response) => {
  response.status(200).send("TEST");
});

// Add to collection
app.post("/snkrs", (request, response) => {
  const Card = request.body;
  Product.create(Card, (error, data) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.status(201).send(data);
    }
  });
});

// Return entire collection
app.get("/snkrs", (request, response) => {
  Product.find((error, data) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.status(200).send(data);
    }
  });
});

// Return document with param id
app.get("/snkrs/:id", (request, response) => {
  Product.findById(request.params.id)
    .then((data) => {
      if (!data) {
        return response.status(404).end();
      } else {
        return response.status(200).json(data);
      }
    })
    .catch((error) => console.log(error));
});

// Return document with param value
app.get("/snkrs/?s=:availability", (request, response) => {
  Product.findOne(request.params.id)
    .then((data) => {
      if (!data) {
        return response.status(404).end();
      } else {
        return response.status(200).json(data);
      }
    })
    .catch((error) => console.log(error));
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
