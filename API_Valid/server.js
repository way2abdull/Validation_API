const express = require('express');

let dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(express.json());

const authRoutes = require('./routes/userRoutes');
const genToken = require("./routes/generateToken")
app.use(authRoutes);
app.use(genToken)


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//port is hidden in env bcz we dont want to disclose