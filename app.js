const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // Parses form data
app.set("view engine", "ejs"); // Configures EJS templating

// Routes
app.use("/", require("./routes/index")); // All routes live in routes/index.js

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
