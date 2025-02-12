const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});