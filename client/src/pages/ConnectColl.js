import React, {Component} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Col from "../components/Col";
import ImgCard from "../components/ImgCard";
import AddContactBtn from "../components/AddContactBtn";
import API from "../utils/API";
import "../style/connectColl.css";
import ReactFilestack, { client } from 'filestack-react';
import Footer from "../components/Footer";

class ConnectColl extends Component {
  state = 
  {
    user: {},
    users: [],
    IdOfSignedUser: "",
    contacts: [],
    id: "",
    dummyPhoto: "css/images/addphoto.png"
  };

  componentDidMount() 
  {
    this.loadLoggedUsers();
    this.loadUsers();
    
  }

  //Function1: Get the Id of the user that is signed in
  loadLoggedUsers = () => 
  {
    
      API.getIdOfLoggedInUser().then(res =>
        
        this.setState({ IdOfSignedUser: res.data[0].IdOfSignedUser }, this.getUser(res.data[0].IdOfSignedUser) )

        ).catch(err => console.log(err))

  };

  //Function2: use the recently obtained (id) to get user object
  getUser = (id) =>
  {

    API.getUser(id).then(res => 
          this.setState({ user: res.data, contacts: res.data.contacts }, console.log(res.data))
          ).catch(err => console.log(err))
  };

  // Function3: load other users
  loadUsers = () => 
  {
    API.getUsers()
      .then( res =>
        this.setState({ users: res.data})
        ).
        catch(err => console.log(err));
  };

  handleClick = (event) => {
    event.preventDefault();
    const contactId = event.target.attributes.getNamedItem("data-id").value;
    // console.log(contactId);
    // Use ID value to redirect to that person's profile page.
    if (this.state.contacts.indexOf(contactId) === -1) {
      this.addContact(contactId);
    }
    else{
      alert("Contact has already been added.");
    }
  };

  addContact = (contactId) => {
    // if (this.state.guessedCards.indexOf(id) === -1) 
    API.saveContact(this.state.IdOfSignedUser,
      { 
        contacts: contactId
        }).then(res => alert("Contact added."))
        .catch(err => console.log(err));
    this.getUser(this.state.IdOfSignedUser);
  };

  //When user clicks on profile pic, before we link to (FriendProfile) we
  //need to store the id of photo inside the field (IdOfUserProfile) of profile collection 
  seeProfile = id => 
  {

    API.addIdOfProfilePic(id).then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  render() {
    return(

<div>
  <Navbar />
  
<div className="cd-fixed-bg cd-bg-1">

<div id="section1">
 <div id="photo" className="container">

<Row>
<Col size="md-12">
   <h1 id="titleconnections" className="bounceInUp" style={{marginTop:"50px"}}>Connect & Collaborate</h1> 
  </Col>
</Row>

      <div className="radiobuttons">
        <label style={{color:"white"}}>
          <input type="radio" className="option-input radio" name="example" / >
          Tech
        </label>
        <label>
          <input type="radio" className="option-input radio" name="example" />
          Art
        </label>
        <label>
          <input type="radio" className="option-input radio" name="example" />
          Science
        </label>
         <label>
          <input type="radio" className="option-input radio" name="example" />
          Entertainment
        </label>
         <label>
          <input type="radio" className="option-input radio" name="example" />
          Entrepreneurship
        </label>
        <button style={{marginTop:"-10px"}} type="button" className="btn btn-outline-danger">search</button>
      </div>

    <Row>
      {this.state.users.filter(user => user._id != this.state.IdOfSignedUser)
      .map(card => (
        <Col size="md-3" className="zoom">

        <Link to="/friendprofile" className="nav-link" >

        {(card.photoURL !=="") ?        
          (<ImgCard
            onClick={this.seeProfile}
            photoURL={card.photoURL}
            full_name={card.full_name}
            title={card.title}
            skills={card.skills}
            key={card._id}
            id={card._id}
          />) :
          (<ImgCard
            onClick={this.seeProfile}
            photoURL={this.state.dummyPhoto}
            full_name={card.full_name}
            title={card.title}
            skills={card.skills}
            key={card._id}
            id={card._id}
          />)}
          
        </Link>
          
          <AddContactBtn id={card._id} handleClick={this.handleClick}/>
        </Col>
      ))}
    </Row>
</div>

<section id="services">
 <div className="container">

  
</div>
</section>
</div>
</div>
<Footer />
</div>



    );
  }
}

export default ConnectColl;
