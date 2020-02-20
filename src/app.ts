/**
 * @file Startup file.
 */

// Required External Modules
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// Route imports
import paragraphRoutes from './routes/paragraph';

// Enviroment variables configuration
config();

// App Variables
const port = process.env.PORT || 3000;

// App Configuration
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

// Routes
app.use("/paragraph", paragraphRoutes);

// Server Activation
app.listen(port, () =>
    console.log(`Starting server on port ${port}`)
);