import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js"; // Assuming your controllers are correctly set up

const router = express.Router();

// Use POST for signup and login since they require request bodies
router.post("/signup", signup);   // Handle POST request for signup
router.post("/login", login);     // Handle POST request for login
router.post("/logout", logout);    // GET request for logout (usually no body needed)

// Export the router
export default router;
