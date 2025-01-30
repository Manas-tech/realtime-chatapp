import express from "express";
import { 
    checkAuth, 
    login, 
    logout, 
    signup,
     
    updateProfile 
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Updated route for profile update with file upload
router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router; // Ensure this line is present