import "./Section.css";
import {PiStopCircle} from 'react-icons/pi'
import Navber  from "../Navbar";

import React from "react";

export default function Section1() {
  return (
    <div>
      <div className="main__background">
      <Navber/>
        <div className="d-flex   justify-content-center h-100 align-items-center text-center">
         <div>
         <h1 className="fs-1 text-white fw-bold">
            We help startups launch their <br /> products
          </h1>
            <p className=" text-white opcity ">
            Etiam sed.Interdum consequat proin vestibulum class at.   
            </p>
            <div> <PiStopCircle className="icons"/></div>
         </div>
        </div>
        
      </div>
      
    </div>
    
  );
}
