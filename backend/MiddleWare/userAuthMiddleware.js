const jwt = require("jsonwebtoken");
// Middleware to verify JWT token
module.exports = function verifyToken(req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];
  console.log(token)

  if (!token) {
    return res.status(403).json({ error: "No token provided" }); //TODO standardise response
  }

  jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.username = decoded.username;
    next();
  });
};