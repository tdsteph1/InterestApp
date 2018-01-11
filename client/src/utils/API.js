import axios from "axios";

export default
{
	//Login: function 1
	getUsers: function()
	{
    console.log("getUsers");
		return axios.get("/api/users");
	},

	//Find user inside user DB by passing in (id) parameter.
	getUser: function(id) 
  {
    	return axios.get("/api/signin/" + id);
  },

  getPUser: function(id) 
  {
    	return axios.get("/profile/" + id);
  },

	// Saves a user to the database
  saveUser: function(userData) 
  {
    	return axios.post("/api/users", userData);
  },


  //Sets user online(updates fiedld online: true)
  userOnline: function(id)
  {

  		return axios.put("/api/users/" + id);

  },

  addSignUserId: function(id)
  {
  	return axios.post("/api/users/", id);
  	
  },


  //Profile: Get id that stored in collection (signins)'s field IdOfSignUser 
  getIdOfLoggedInUser: function()
  {
    return axios.get("/api/signin");
  },

  //Profile: adds the idea field inside (user) collection
  addField: function(id)
  {
    return axios.get("/api/idea/" + id);
  },

  //Profile: Saves a idea to the idea field defined in user(collection)
  saveIdea: function(id, ideaData) 
  {

    return axios.post("/api/idea/" + id, ideaData);
  },

  //PersonalInfo: returns an array of all ideas objects from mongoDB
  getAllIdeas: function()
  {

    return axios.get("/api/idea");
  },

  //PersonalInfo: returns idea object by searching for idea with id parameter we pass in.
  getIdea: function(id)
  {
    return axios.get("/api/personalinfo/" + id);
  },

  // Document Schema
  popFile: function(id)
  {
    return axios.get("/api/file/" + id);
  },

  saveFile: function(id, fileData)
  {
    return axios.post("/api/file/" + id, fileData);
  },

  removeFile: function(id)
  {
    return axios.delete("/api/file/" + id);
  },

  // Contact Schema
  saveContact: function(id, contactData)
  {
    return axios.post("/api/contacts/" + id, contactData);
  },

  removeContact: function(id)
  {
    return axios.delete("/api/contacts/" + id);
  },

  // Upload profile pic
  changePhoto: function(id, field)
  {
    return axios.put("/api/photo/" + id, field);
  },

  // For Notes on Profile page
  popNote: function(id)
  {
    return axios.get("/api/notes/" + id);
  },

  saveNote: function(id, noteData)
  {
    return axios.post("/api/notes/" + id, noteData);
  },

};