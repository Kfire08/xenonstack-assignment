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
        name: "Rohan",
        email: "rohan@gmail.com",
        message: "hey I am rohan",
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
  if (
    document.getElementById("email").value == "akash.11801431@lpu.in" &&
    document.getElementById("password").value == "placed"
  ) {
    document.location.href = "index.html";
  } else {
    alert("Incorrect Email or Password");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
}
