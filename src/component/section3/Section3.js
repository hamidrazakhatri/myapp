import "./section3.css";
import React from "react";

export default function Section3() {
  return (
    <div>
      <div className="background___img">
        <div className="container">
          <div className="row  py-5">
            <div className="col-md-6 p-5">
              <h2  className="text-dark fs-2">
                A digital web design studio creating  modern & engaging online
                experiences
              </h2><br/>
              <p className="opcity">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p><br/>   
              <ul className="my-2">
                <li className="opcity list">We put a lot of effort in design.</li>
                <li className="opcity list">The most important ingredient of successful website.</li>
                <li className="opcity list">Sed ut perspiciatis unde omnis iste natus error sit.</li>
                <li className="opcity list">Submit Your Organization.</li>
              </ul><br/>
              <button  className="button">Learn-More</button>
            </div>
            <div className="col-md-6 py-5 px-5">
                <img src="http://dorsin.react.themesbrand.com/assets/images/online-world.svg" width="600px"/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
