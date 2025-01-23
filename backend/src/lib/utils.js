import jwt from "jsonwebtoken";

export const generateToken = (userID, res) => {
    // Generate the JWT
    const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
        expiresIn: "7d", // Corrected spelling to "expiresIn"
    });

    // Set the JWT as a cookie in the response
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        httpOnly: true, // Ensures the cookie is accessible only by the web server
        sameSite: "strict", // Corrected "samesite" to "sameSite" (case-sensitive)
        secure: process.env.NODE_ENV !== "development", // Use secure cookies in non-development environments
    });

    return token; // Return the generated token
};
