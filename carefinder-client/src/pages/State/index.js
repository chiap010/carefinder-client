import React, { Component } from "react";
import ShowIndividualHospital from "../../components/ShowIndividualHospital";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";

class State extends Component {
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
                  // state parameter in the query string.
                  let url = encodeURI(
                        "http://mango.cs.uwp.edu:3000/api/v1/hospitals?state=" +
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

      render() {
            return (
                  <div>
                        <NavBar />
                        <PageHeader heading="Hospitals by State Name" />

                        <form onSubmit={this.handleSubmit}>
                              <label>
                                    Search:
                                    <select
                                          value={this.state.searchTerm}
                                          onChange={this.handleChange}
                                    >
                                          <option value="">
                                                -- Select One --
                                          </option>
                                          <option value="AL">Alabama</option>
                                          <option value="AK">Alaska</option>
                                          <option value="AZ">Arizona</option>
                                          <option value="AR">Arkansas</option>
                                          <option value="CA">California</option>
                                          <option value="CO">Colorado</option>
                                          <option value="CT">
                                                Connecticut
                                          </option>
                                          <option value="DE">Delaware</option>
                                          <option value="DC">
                                                District Of Columbia
                                          </option>
                                          <option value="FL">Florida</option>
                                          <option value="GA">Georgia</option>
                                          <option value="HI">Hawaii</option>
                                          <option value="ID">Idaho</option>
                                          <option value="IL">Illinois</option>
                                          <option value="IN">Indiana</option>
                                          <option value="IA">Iowa</option>
                                          <option value="KS">Kansas</option>
                                          <option value="KY">Kentucky</option>
                                          <option value="LA">Louisiana</option>
                                          <option value="ME">Maine</option>
                                          <option value="MD">Maryland</option>
                                          <option value="MA">
                                                Massachusetts
                                          </option>
                                          <option value="MI">Michigan</option>
                                          <option value="MN">Minnesota</option>
                                          <option value="MS">
                                                Mississippi
                                          </option>
                                          <option value="MO">Missouri</option>
                                          <option value="MT">Montana</option>
                                          <option value="NE">Nebraska</option>
                                          <option value="NV">Nevada</option>
                                          <option value="NH">
                                                New Hampshire
                                          </option>
                                          <option value="NJ">New Jersey</option>
                                          <option value="NM">New Mexico</option>
                                          <option value="NY">New York</option>
                                          <option value="NC">
                                                North Carolina
                                          </option>
                                          <option value="ND">
                                                North Dakota
                                          </option>
                                          <option value="OH">Ohio</option>
                                          <option value="OK">Oklahoma</option>
                                          <option value="OR">Oregon</option>
                                          <option value="PA">
                                                Pennsylvania
                                          </option>
                                          <option value="RI">
                                                Rhode Island
                                          </option>
                                          <option value="SC">
                                                South Carolina
                                          </option>
                                          <option value="SD">
                                                South Dakota
                                          </option>
                                          <option value="TN">Tennessee</option>
                                          <option value="TX">Texas</option>
                                          <option value="UT">Utah</option>
                                          <option value="VT">Vermont</option>
                                          <option value="VA">Virginia</option>
                                          <option value="WA">Washington</option>
                                          <option value="WV">
                                                West Virginia
                                          </option>
                                          <option value="WI">Wisconsin</option>
                                          <option value="WY">Wyoming</option>
                                    </select>
                              </label>
                        </form>

                        <ShowIndividualHospital
                              hospitals={this.state.hospitals}
                        />
                  </div>
            );
      }
}

export default State;
