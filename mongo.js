const mongoose = require("mongoose");
const mongoPath =
  "mongodb+srv://xenonstack:xenonstack@cluster0.jzhsw.mongodb.net/?retryWrites=true&w=majority";

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose;
};
