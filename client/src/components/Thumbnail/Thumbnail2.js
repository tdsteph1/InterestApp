

import React from "react";




export const Thumbnail2 = props => (

				<div className="img-thumbnail mx-auto" style={{boxShadow: "1px 9px 20px grey",marginTop:"40px"}}>

                      <img src={props.photoURL} width="160" height="160"/>
                      
                      <div className="caption">
                        <p id="text">{props.full_name}</p> 
                        <strong> {props.title} </strong> 
                        <p id="text2"> {props.skills} </p>
                      </div>
                      
                </div>
);