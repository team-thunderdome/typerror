import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Score } from "./models/scoreModel.js";

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Express.js route handler for the root of the server
// Takes URL path and a callback function as arguments
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("typeerror");
});

// Route to save a new player score
app.post("/scores", async (request, response) => {
  try {
    if (!request.body.name || !request.body.score) {
      return response
        .status(400)
        .send({ message: "Name and score are required fields" });
    }
    // Create a new score object
    const newScore = {
      name: request.body.name,
      score: request.body.score,
    };
    // Send the score object to the database
    const score = await Score.create(newScore);
    return response.status(201).send(score);
  } catch (error) {
    // Respond with an error message
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    // Test connection running on correct port
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
