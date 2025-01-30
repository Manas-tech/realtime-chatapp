import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";                
import messageRoutes from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config();
const app = express();
const PORT = process.env.PORT;




connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: 'http://localhost:5173', // Allow requests only from this origin
      credentials: true, // Allow cookies and credentials
    })
  );
  app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
// app.get('/api', (req, res) => {
//     res.json({ message: 'CORS enabled!' });
//   });

// app.use("/api/auth", (req, res, next) => {
//  console.log(`${req.method} ${req.originalUrl}`);
//  next();
// });



app.listen(PORT, () => {
 console.log(`Server running on port: ${PORT}`);
});