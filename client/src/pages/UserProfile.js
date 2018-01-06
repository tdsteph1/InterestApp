import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactFilestack, { client } from 'filestack-react';
import Navbar from "../components/Navbar";
import API from "../utils/API";
import "../style/connectColl.css";



class UserProfile extends Component
{
   state = 
  {
    logInUser: {}
  };

    componentDidMount() 
    {
      API.getUser(this.props.match.params.id)
      .then(res =>
        this.setState({ logInUser: res.data})
        ).
        catch(err => console.log(err));
    }
  
    uploadFile = (event) => {
      const filestack = client.init('AXodQkfA4Soq1kmjeI2Vbz');
      filestack.pick({
        accept: [".pdf",".doc",".docx",".docm"],
        fromSources:["local_file_system", "url","googledrive","dropbox","evernote","onedrive","clouddrive"],
        maxFiles: 1,
      }).then(function(result) {
        console.log(JSON.stringify(result.filesUploaded));
        var fileUrl = result.filesUploaded[0].url;
        var fileName = result.filesUploaded[0].filename;
        console.log(fileName + " " + fileUrl);
        // Need to write code to send fileName, fileURL, and user ID to database to save.
        document.getElementById("docUpload").innerHTML += `<p><a href="` + fileUrl + `">` + fileName +`</a></p>`;
      })
    };

    render()
    {
      
      return(
      <div>
      <Navbar />

      <div id="section1">
          <div id="photo" className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-1">
                <div tabIndex="1" className="box1">
                <span id='clickableAwesomeFont'><i className=" fa fa-list" style={{fontSize: "40px", color:"black"}} ></i></span>
                <p id="personal">Personal Info</p>
                </div>
                <div tabIndex="2"className="box2">
                <span id='clickableAwesomeFont'><i className=" fa fa-address-book" data-toggle="modal" data-target=".bs-example-modal-sm" style={{fontSize: "40px", color:"black"}} ></i></span>
                <p id="contacts">Contacts</p>
                </div>
              </div>
                       

              <div className="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-dialog" role="document">
                  <div className="modal-body"style={{backgroundColor:" #343d46"}}>
                    <div className="modal-header">
                      <h5 className="modal-title" id="modaltitle"style={{marginLeft:"40%"}}>CONTACTS</h5>

                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                    </div>
                                 
                          <div className="modal-body" style={{backgroundColor:" white"}}>               
                            <div className="modal-dialog modal-lg" role="document">
                              <div className="modal-content">
                                <div className="modal-body" style={{backgroundColor:" white"}}>

                                            <form id="input" style={{width:"93%", marginLeft:"20px",marginBottom:"40px"}}>

                                               <div className="form-group">

                                                 <a href="Bethany Pfeister" alt="Bethany">
                                                 <img src="css/images/bethany.jpg" width="30" height="30" style={{marginTop:"30px",marginLeft:"30px"}}/>
                                                 <p alt="Bethany Pfeister" style={{marginLeft:"90px", marginTop:"-20px"}}>Bethany Pfeister - Web Developer</p>
                                                 </a>

                                                 <a href="Jesse Forte" alt="Jesse">
                                                 <img src="css/images/Jesse1.jpg" width="30" height="30" style={{marginLeft:"30px"}}/>
                                                 <p alt="Jesse Forte" style={{marginLeft:"90px", marginTop:"-20px"}}>Jesse Forte - Web Developer</p>
                                                 </a>

                                                 <a href="TJ Stephens" alt="TJ">
                                                 <img src="css/images/tj.jpg" width="30" height="30" style={{marginLeft:"30px"}}/>
                                                 <p alt="TJ Stephens" style={{marginLeft:"90px", marginTop:"-20px"}}>TJ Stephens - Web Developer</p>
                                                 </a>
                                                  
                                                 <a href="Reyna Perez" alt="Reyna">
                                                 <img src="css/images/reyna.jpg" width="30" height="30" style={{marginLeft:"30px"}}/>
                                                 <p alt="Reyna Perez" style={{marginLeft:"90px", marginTop:"-20px"}}>Reyna Perez - Web Developer</p>
                                                 </a>

                                                 <a href="John Anders" alt="Reyna">
                                                 <img src="css/images/john.jpg" width="30" height="30" style={{marginLeft:"30px"}}/>
                                                 <p alt="John Anders" style={{marginLeft:"90px", marginTop:"-20px"}}>John Anders - Web Developer</p>
                                                 </a>
                                                 

                                               </div>
                                                                                       

                                            </form>
                                          
                              </div>

                                         <div className="modal-footer" style={{backgroundColor:" white"}}>
                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>      
                                        </div>

                           </div>
                        </div>                                
                     </div> 
                  </div>
                </div>
              </div>

              
                           


              <div className="col-md-2">
              
                <div tabIndex="3"className="box3">
                  <Link to="/messages">
                    <span id='clickableAwesomeFont'><p id="cuatro" style={{fontSize: "30px", fontWeight: "bold", marginLeft: "30px",paddingTop:"30px"}}>4</p></span>
                    <p id="textmessage" >Messages</p>
                  </Link>
                </div>



                
                <div tabIndex="4"className="box4">
                <span id='clickableAwesomeFont'><p id="cuatro" style={{fontSize: "30px", fontWeight: "bold",  marginLeft: "25px",paddingTop:"26px"}}>11</p></span>
                <p id="textinvitation" >Invitations</p>
                </div>
              </div>
                
              <div className="col-md-4">
                <div className="img-thumbnail mx-auto"style={{boxShadow: "1px 9px 20px grey"}}>

                  <img src={this.state.logInUser.photoURL} width="200" height="200" style={{marginLeft: "70px"}}/>
                  <div className="caption">
                    <p id="text">{this.state.logInUser.full_name}</p> 
                    <p id="text2">{this.state.logInUser.title} <br/> {this.state.logInUser.skills} <br/></p>
                  </div>

                </div>
              </div>

              <div className="col-md-1"></div>
              <div className="col-md-3">
                <button id="btn1" type="button" className="btn btn-danger">Recent Activity</button>
                <button type="button" className="btn btn-danger" onClick={this.uploadFile}>Portfolios link</button> 
                <div id="docUpload">
                </div>
              </div>
            </div>
          </div>


      <section id="services">
          <div className="container">

            <div className="row">
              <div className="col-sm-12">

                <div className="service row">   
                  <div className="col-md-4 ">
                    <div className="searchprofile" style={{boxShadow: "9px 9px 20px grey"}}>
                      <span id='clickableAwesomeFont'>
                        <Link to="/connect&collaborate">
                          <i className="fa fa-search fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i>
                        </Link>
                      </span>

                      <h2 id="connect">Connect or Collaborate</h2>
                      <p id="connectp">Connect with people who are looking for ideas <br/><br/>Find ideas you like and collarate with them
                      </p> 
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div id="messageprofile"style={{boxShadow: "9px 9px 20px grey"}}>
                      <span id='clickableAwesomeFont'>
                        <Link to="/messages">
                          <i className="fa fa-envelope fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i>
                        </Link>
                      </span>
                      <h2 id="message">Message Box</h2>
                      <p id="messagep">Keep your messages organized</p>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div id="ideasprofile"style={{boxShadow: "9px 9px 20px grey"}}>
                      <span id='clickableAwesomeFont'><i className="fa fa-lightbulb-o fa-4x circle-icon" data-toggle="modal" data-target="#exampleModal" style={{fontSize: "40px", color:"red"}}></i></span>
                      <h2 id="ideas">Add and Keep Ideas</h2>
                      <p id="ideasp">Add as many ideas you have <br/>
                       See how many ideas you have submitted, keep, update or delete them
                      </p>

                    

                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content"style={{backgroundColor:" #f9bd05"}}>
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel"style={{marginLeft:"40%"}}>ADD IDEA</h5>

                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body" style={{backgroundColor:" white"}}>
                                              <form id="input" style={{width:"93%", marginLeft:"20px",marginBottom:"40px"}}>

                                             <div className="formName-group">
                                               <label className="col-form-label" for="formGroupExampleInput2"style={{color:"#65737e"}}>Idea's Name</label>
                                               <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
                                             </div>
                                          
                                          
                                             <div className="form-group">
                                               <label className="col-form-label" for="formGroupExampleInput" style={{color:"#65737e"}}>What is your idea?</label>
                                               <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                                             </div>
                                              
                                             <div className="form-group">
                                               <label for="exampleFormControlTextarea1"style={{color:"#65737e"}}>Why is a good idea?</label>
                                               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                             </div>
                                             <div className="form-group">
                                             
                                              
                                              <img src="css/images/health.jpg" alt="..." className="img-thumbnail" style={{width:"100%"}} />
                                              <button id="addideaphoto" type="button" className="btn btn-secondary" style={{marginLeft:"0px",marginTop:"-10px"}}>add photo</button>

                                           
                                             </div>
                                             
                                            

                                            </form>
                                          
                                        </div>
                                        <div className="modal-footer" style={{backgroundColor:" white"}}>
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-danger">save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                                    

                     </div>
                   </div>
                 </div>
               </div>
             </div>

          </div>
      </section>
    </div>
  </div>

    );
  }
}

export default UserProfile; 