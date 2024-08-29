const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`App is running on port : ${port}`);
});
