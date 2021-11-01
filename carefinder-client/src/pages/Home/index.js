import React, { Component } from "react";

import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";

class Home extends Component {
      constructor(props) {
            super(props);

            this.state = {};
      }

      // Show a NavBar, a Page Header, and we'll list out the menu using an unordered list.
      render() {
            return (
                  <div>
                        <NavBar />

                        <PageHeader heading="CareFinder - Search Options" />

                        <ul>
                              <li>
                                    <a href="/AllHospitals">All Hospitals</a>
                              </li>
                              <li>
                                    <a href="/HospitalID">
                                          Search Hospitals by Hospital Provider
                                          ID
                                    </a>
                              </li>
                              <li>
                                    <a href="/HospitalName">
                                          Search Hospitals by Hospital Name
                                    </a>
                              </li>
                              <li>
                                    <a href="/CityName">
                                          Search Hospitals by City Name
                                    </a>
                              </li>
                              <li>
                                    <a href="/State">
                                          Search Hospitals by State
                                    </a>
                              </li>
                              <li>
                                    <a href="/CityState">
                                          Search Hospitals by City / State
                                    </a>
                              </li>
                              <li>
                                    <a href="/ZipCode">
                                          Search Hospitals by Zip Code
                                    </a>
                              </li>
                              <li>
                                    <a href="/CountyName">
                                          Search Hospitals by County
                                    </a>
                              </li>
                        </ul>
                  </div>
            );
      }
}

export default Home;
