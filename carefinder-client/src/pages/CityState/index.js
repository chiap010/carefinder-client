import React, { Component } from "react";
import ShowIndividualHospital from "../../components/ShowIndividualHospital";

import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";

import Constants from "../../components/Constants";

class CityState extends Component {
       constructor(props) {
              super(props);

              // State variables to store the searchTerm from the textbox
              // and a state variable to store the hospital information.
              this.state = {
                     searchTermCity: "",
                     searchTermState: "",
                     hospitals: [],
              };

              this.handleChangeCity = this.handleChangeCity.bind(this);
              this.handleChangeState = this.handleChangeState.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);
       }

       handleChangeCity(event) {
              this.setState({ searchTermCity: event.target.value }, () => {
                     // All the city data appears to be in uppercase so lets store the string off
                     // and then in building the URL, we'll uppercase the search string
                     let searchStringCity = this.state.searchTermCity;
                     let searchStringState = this.state.searchTermState;

                     // Build the URL.  Attach the searchTerm provided by the state to the
                     // city parameter in the query string.
                     let url = encodeURI(
                            "http://localhost:5556/hospitals?city=" +
                                   searchStringCity.toUpperCase() +
                                   "&state=" +
                                   searchStringState.toUpperCase()
                     );

                     // Run fetch, but only if the searchTerm isn't an empty string.
                     //if (this.state.searchTermCity !== "") {
                     fetch(url, {
                            headers: {
                                   "X-API-KEY": Constants.myAPIkey,
                            },
                     })
                            .then((document) => document.json())
                            .then((data) => {
                                   this.setState({ hospitals: data });
                            })
                            .catch(console.log);
              });
       }

       handleChangeState(event) {
              this.setState({ searchTermState: event.target.value }, () => {
                     // All the city data appears to be in uppercase so lets store the string off
                     // and then in building the URL, we'll uppercase the search string
                     let searchStringCity = this.state.searchTermCity;
                     let searchStringState = this.state.searchTermState;

                     // Build the URL.  Attach the searchTerm provided by the state to the
                     // city parameter in the query string.
                     let url = encodeURI(
                            Constants.endpointURL +
                                   "?city=" +
                                   searchStringCity.toUpperCase() +
                                   "&state=" +
                                   searchStringState
                     );

                     // Run fetch, but only if the searchTerm isn't an empty string.
                     //if (this.state.searchTermState !== "--") {
                     fetch(url, {
                            headers: {
                                   "X-API-KEY": Constants.myAPIkey,
                            },
                     })
                            .then((document) => document.json())
                            .then((data) => {
                                   this.setState({ hospitals: data });
                            })
                            .catch(console.log);
                     //}
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

                            <PageHeader heading="Hospitals by City and State" />

                            <form onSubmit={this.handleSubmit}>
                                   <label>
                                          City:
                                          <input
                                                 value={
                                                        this.state
                                                               .searchTermCity
                                                 }
                                                 onChange={
                                                        this.handleChangeCity
                                                 }
                                          />
                                   </label>

                                   <br />
                                   <br />

                                   <label>
                                          State:
                                          <select
                                                 value={
                                                        this.state
                                                               .searchTermState
                                                 }
                                                 onChange={
                                                        this.handleChangeState
                                                 }
                                          >
                                                 <option value="">
                                                        -- Select One --
                                                 </option>
                                                 <option value="AL">
                                                        Alabama
                                                 </option>
                                                 <option value="AK">
                                                        Alaska
                                                 </option>
                                                 <option value="AZ">
                                                        Arizona
                                                 </option>
                                                 <option value="AR">
                                                        Arkansas
                                                 </option>
                                                 <option value="CA">
                                                        California
                                                 </option>
                                                 <option value="CO">
                                                        Colorado
                                                 </option>
                                                 <option value="CT">
                                                        Connecticut
                                                 </option>
                                                 <option value="DE">
                                                        Delaware
                                                 </option>
                                                 <option value="DC">
                                                        District Of Columbia
                                                 </option>
                                                 <option value="FL">
                                                        Florida
                                                 </option>
                                                 <option value="GA">
                                                        Georgia
                                                 </option>
                                                 <option value="HI">
                                                        Hawaii
                                                 </option>
                                                 <option value="ID">
                                                        Idaho
                                                 </option>
                                                 <option value="IL">
                                                        Illinois
                                                 </option>
                                                 <option value="IN">
                                                        Indiana
                                                 </option>
                                                 <option value="IA">
                                                        Iowa
                                                 </option>
                                                 <option value="KS">
                                                        Kansas
                                                 </option>
                                                 <option value="KY">
                                                        Kentucky
                                                 </option>
                                                 <option value="LA">
                                                        Louisiana
                                                 </option>
                                                 <option value="ME">
                                                        Maine
                                                 </option>
                                                 <option value="MD">
                                                        Maryland
                                                 </option>
                                                 <option value="MA">
                                                        Massachusetts
                                                 </option>
                                                 <option value="MI">
                                                        Michigan
                                                 </option>
                                                 <option value="MN">
                                                        Minnesota
                                                 </option>
                                                 <option value="MS">
                                                        Mississippi
                                                 </option>
                                                 <option value="MO">
                                                        Missouri
                                                 </option>
                                                 <option value="MT">
                                                        Montana
                                                 </option>
                                                 <option value="NE">
                                                        Nebraska
                                                 </option>
                                                 <option value="NV">
                                                        Nevada
                                                 </option>
                                                 <option value="NH">
                                                        New Hampshire
                                                 </option>
                                                 <option value="NJ">
                                                        New Jersey
                                                 </option>
                                                 <option value="NM">
                                                        New Mexico
                                                 </option>
                                                 <option value="NY">
                                                        New York
                                                 </option>
                                                 <option value="NC">
                                                        North Carolina
                                                 </option>
                                                 <option value="ND">
                                                        North Dakota
                                                 </option>
                                                 <option value="OH">
                                                        Ohio
                                                 </option>
                                                 <option value="OK">
                                                        Oklahoma
                                                 </option>
                                                 <option value="OR">
                                                        Oregon
                                                 </option>
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
                                                 <option value="TN">
                                                        Tennessee
                                                 </option>
                                                 <option value="TX">
                                                        Texas
                                                 </option>
                                                 <option value="UT">
                                                        Utah
                                                 </option>
                                                 <option value="VT">
                                                        Vermont
                                                 </option>
                                                 <option value="VA">
                                                        Virginia
                                                 </option>
                                                 <option value="WA">
                                                        Washington
                                                 </option>
                                                 <option value="WV">
                                                        West Virginia
                                                 </option>
                                                 <option value="WI">
                                                        Wisconsin
                                                 </option>
                                                 <option value="WY">
                                                        Wyoming
                                                 </option>
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

export default CityState;
