import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set

// Connect to the database
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json()); // This is the middleware for parsing JSON bodies

// Debugging middleware to log incoming requests (optional)
app.use("/api/auth", (req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.originalUrl}`);
  next();
});

// Register the authentication routes
app.use("/api/auth", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
