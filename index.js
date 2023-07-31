'use strict'

const express = require('express')

const { PORT = '3000' } = process.env
const app = express()

const index = require("./routes/index.js");
const user = require("./routes/user.js");
const group = require("./routes/group.js");

app.use("/", index);
app.use("/users", user);
app.use("/groups", group);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});