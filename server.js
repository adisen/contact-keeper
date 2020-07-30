const express = require("express");
const app = express();

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
