import "./section2.css";
import React from "react";
import { SlDiamond } from "react-icons/sl";
import {BiSolidCopyAlt} from "react-icons/bi"
import {GiHelicoprion} from "react-icons/gi"
import {BiLogoReact} from "react-icons/bi"
import {MdMultilineChart} from "react-icons/md"
import {FaRocket} from "react-icons/fa"
export default function Section2() {
  return (
    <div>
      <div className="main__color">
        <div className="text-center font__size my-5">
          <h2>OUR SERVICES</h2>
          <p className="opcity">
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that <br /> have meaning and add
            a value for our clients.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-3 hover">
           <div className="rounded"> <SlDiamond className="icons-center"/></div><br/>
                <h3 className="text-center">Digital Design</h3>
                <p className="opcity text text-center">Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
            </div>
            <div className="col-md-4  my-3 hover">
            <div className="rounded"> <BiSolidCopyAlt className="icons-center"/></div><br/>
                <h3 className="text-center">Unlimited Colors</h3>
                <p className="opcity text text-center">Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.tincidunt ut laoreet.</p>
            </div>
            <div className="col-md-4 my-3 hover">
            <div className="rounded"> <GiHelicoprion className="icons-center"/></div><br/>
                <h3 className="text-center">Strategy Solutions</h3>
                <p className="opcity text text-center">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
            </div><br/><br/>
            <div className="col-md-4 my-3 hover">
           <div className="rounded"> <BiLogoReact className="icons-center"/></div><br/>
                <h3 className="text-center">Awesome Support</h3>
                <p className="opcity text text-center">It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>
            </div>

            <div className="col-md-4 my-3 hover">
           <div className="rounded"> <MdMultilineChart className=" color icons-center"/></div><br/>
                <h3 className="text-center">Truly Multipurpose</h3>
                <p className="opcity text text-center">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>

            <div className="col-md-4 my-3 hover">
           <div className="rounded"> <FaRocket className="icons-center"/></div><br/>
                <h3 className="text-center">Easy to customize</h3>
                <p className="opcity text text-center">Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
