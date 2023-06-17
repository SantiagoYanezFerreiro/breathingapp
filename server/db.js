const mongoose = require("mongoose");

//Connect to Database
mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParse: true,
  useUnifiedTypology: true,
});

const userSchema = new mongoose.schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
