import React, { Component } from "react";
import ShowIndividualHospital from "../../components/ShowIndividualHospital";

import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";

// AllHospitals component.  This will make a call to the default endpoint /hospitals
// which has nothing in the query string.
class AllHospitals extends Component {
      constructor(props) {
            super(props);

            // We need to store the hospital data from the api endpoint.
            this.state = {
                  hospitals: [],
            };
      }

      // I wanted to execute right as the component is loaded into the DOM.
      // I don't have a handler event, since there is no input field in this component.
      // Therefore, I used componentDidMount() lifecycle event.
      componentDidMount() {
            fetch("http://localhost:5556/hospitals?")
                  .then((document) => document.json())
                  .then((data) => {
                        this.setState({ hospitals: data });
                  })
                  .catch(console.log);
      }

      // Our render should consist of a NavBar component, a Page Hader, and
      // the ShowIndividualHospital component which takes in the array from the JSON fetch.
      render() {
            return (
                  <div>
                        <NavBar />

                        <PageHeader heading="All Hospitals List" />

                        <ShowIndividualHospital
                              hospitals={this.state.hospitals}
                        />
                  </div>
            );
      }
}

export default AllHospitals;
