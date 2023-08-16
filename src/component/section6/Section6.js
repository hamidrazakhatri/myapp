import "./section6.css";
import React from "react";

export default function Section6() {
  return (
    <div><br/><br/><br/><br/>

<div className="d-flex   justify-content-center h-100 align-items-center text-center">
         <div>
         <h1 className="fs-1 fw-bold">
            We help startups launch their <br /> products
          </h1>
            <p className="  opcity ">
            Etiam sed.Interdum consequat proin vestibulum class at.   
            </p>
            {/* <div> <PiStopCircle className="icons"/></div> */}
         </div>
        </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-3 hover  my-5">
            <div className="border">
                <img className="text-center " width="280px" height="250px"src="http://dorsin.react.themesbrand.com/assets/images/team/img-1.jpg"/> <br/> <br/>
                <h4 className="text-center ">Frank Johnson</h4>
                <p className="text-center opcity">CEO</p>
            </div>
          </div>

          <div className="col-md-3 hover my-5 ">
            <div className="border">
                <img className="text-center " width="280px" height="250px"src="http://dorsin.react.themesbrand.com/assets/images/team/img-2.jpg"/> <br/> <br/>
                <h4 className="text-center ">Elaine Stclair</h4>
                <p className="text-center opcity">DESIGNER</p>
            </div>
          </div>

          <div className="col-md-3 hover my-5 ">
            <div className="border">
                <img className="text-center " width="280px" height="250px"src="http://dorsin.react.themesbrand.com/assets/images/team/img-3.jpg"/> <br/> <br/>
                <h4 className="text-center ">Wanda Arthur</h4>
                <p className="text-center opcity">DEVELOPER</p>
            </div>
          </div>


          <div className="col-md-3 hover   my-5">
            <div className="border">
                <img className="text-center " width="280px" height="250px"src="http://dorsin.react.themesbrand.com/assets/images/team/img-4.jpg"/> <br/> <br/>
                <h4 className="text-center ">Joshua Stemple</h4>
                <p className="text-center opcity">MANAGER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
