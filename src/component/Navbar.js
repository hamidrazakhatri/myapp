import "./navbar.css";
import React from "react";

export default function Navber() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg top-fixed ">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-3 text-white px" href="#">
          DORSIN

          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item hover__li">
                <a class="nav-link  text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item hover__li">
                <a class="nav-link text-white" href="#">
                  service
                </a>
              </li>

              <li class="nav-item hover__li">
                <a class="nav-link text-white  " aria-disabled="true">
                  Feature
                </a>
              </li>
              <li class="nav-item hover__li">
                <a class="nav-link  text-white" aria-disabled="true">
                  pricing
                </a>
              </li>
              <li class="nav-item hover__li">
                <a class="nav-link  text-white" aria-disabled="true">
                  Team
                </a>
              </li>
              <li class="nav-item hover__li">
                <a class="nav-link  text-white " aria-disabled="true">
                  Blog
                </a>
              </li>
              <li class="nav-item hover__li">
                <a class="nav-link  text-white" aria-disabled="true">
                  Contact
                </a>
              </li>
            </ul>
            {/* <form class="d-flex" role="search"> */}

            <button class="btn btn-success button__margin" type="submit">
              Try it Free
            </button>
            {/* </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
