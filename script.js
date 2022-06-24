const mongo = require("./mongo");
const userSchema = require("./schemas/user-schema");
const contactSchema = require("./schemas/contact-schema");

var cname = "";
var cemail = "";
var cmessage = "";

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log("connected to mongodb!");

      const contact = {
        name: cname,
        email: cemail,
        message: cmessage,
      };

      await new contactSchema(contact).save();
    } finally {
      mongoose.connection.close();
    }
  });
};

connectToMongoDB();
function handlecontact() {
  document.location.href = "index.html";
}
function handlelogin() {
  document.location.href = "index.html";
}
