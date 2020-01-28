/**
 * @file Startup file.
 */

// Required External Modules
import { config } from "dotenv";
import express from "express";

// Enviroment variables configuration
config();

// App Variables
const port = process.env.PORT || 3000;

// App Configuration
const app = express();

// Server Activation
app.listen(port, () =>
    console.log(`Starting server on port ${port}`)
);