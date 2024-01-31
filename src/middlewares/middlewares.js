// corsMiddleware.js
const corsMiddleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Erlaube Anfragen von allen Ursprüngen (kann angepasst werden)
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Erlaube bestimmte Header
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Erlaube bestimmte HTTP-Methoden
  next();
};

export default corsMiddleware;
