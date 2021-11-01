import React, { Component } from "react";
import ShowIndividualHospital from "../../components/ShowIndividualHospital";

import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";

class ZipCode extends Component {
      constructor(props) {
            super(props);

            // State variables to store the searchTerm from the textbox
            // and a state variable to store the hospital information.
            this.state = {
                  searchTerm: "",
                  hospitals: [],
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      }

      // This handleChange() function is called anytime the value of the textbox is changed.
      // When this happens, update the state searchTerm variable.  However, we use the
      // arrow function syntax to only run after the the state is updated.
      // Without the callback syntax, the fetch might be run without the updated searchTerm,
      // which can crash the app.
      handleChange(event) {
            this.setState({ searchTerm: event.target.value }, () => {
                  // Build the URL.  Attach the searchTerm provided by the state to the
                  // zipCode parameter in the query string.
                  let url = encodeURI(
                        "http://localhost:5556/hospitals?zipCode=" +
                              this.state.searchTerm
                  );

                  // Run fetch, but only if the searchTerm isn't an empty string.
                  if (this.state.searchTerm !== "") {
                        fetch(url)
                              .then((document) => document.json())
                              .then((data) => {
                                    this.setState({ hospitals: data });
                              })
                              .catch(console.log);
                  }
            });
      }

      handleSubmit(event) {
            event.preventDefault();
      }

      // Our render should consist of a NavBar component, a Page Hader, and
      // the ShowIndividualHospital component which takes in the array from the JSON fetch.
      // Note that our input textbox will have the value of whatever is stored in the
      // state for searchTerm.  Each time the input textbox is changed, the handleChange()
      // function is run, updating the state searchTerm, and re-fetches from the endpoint using that
      // new search term.
      render() {
            return (
                  <div>
                        <NavBar />
                        <PageHeader heading="Hospitals by Zip Code" />

                        <form onSubmit={this.handleSubmit}>
                              <label>
                                    Search:
                                    <input
                                          value={this.state.searchTerm}
                                          onChange={this.handleChange}
                                    />
                              </label>
                        </form>

                        <ShowIndividualHospital
                              hospitals={this.state.hospitals}
                        />
                  </div>
            );
      }
}

export default ZipCode;
