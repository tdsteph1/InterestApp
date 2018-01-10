const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({

  contactUserId: 
  { 
  	type: String, 
    required: true,
    unique: true
  }
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;