const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log("Hai all this is achu ");
    })
  )
  .catch((err) => console.error("error conneting to mongodb", err));
