import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  // 1. Get the Authorization header
  const authHeader = req.headers["authorization"];

  // 2. Check if header is present
  if (!authHeader) {
    return res.status(401).json({ error: "Access Denied. No token provided." });
  }

  // 3. Extract the token (Format: "Bearer <token>")
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ error: "Access Denied. Invalid token format." });
  }

  try {
    // 4. Verify the token using your secret key
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // 5. Attach decoded user data to the request object
    req.user = verified;

    // 6. Pass control to the next middleware/route handler
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

export default verifyToken;
