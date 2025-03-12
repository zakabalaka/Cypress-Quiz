import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token from headers

  if (!token) {
    res.status(401).json({ message: "Access Denied" });
    return;
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    res.status(500).json({ message: "Server configuration error: JWT_SECRET is not defined." });
    return;
  }

  try {
    const verified = jwt.verify(token, jwtSecret);
    (req as any).user = verified;
  } catch (error) {
    res.status(403).json({ message: "Invalid Token" });
    return;
  }
};

export default authenticateToken;
