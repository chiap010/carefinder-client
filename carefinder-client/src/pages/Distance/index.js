import React, { Component } from "react";
import ShowIndividualHospital from "../../components/ShowIndividualHospital";

import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";

import Constants from "../../components/Constants";

class Distance extends Component {
       constructor(props) {
              super(props);

              // State variables to store the searchTerm from the textbox
              // and a state variable to store the hospital information.
              this.state = {
                     searchTermLatitude: "",
                     searchTermLongitude: "",
                     searchTermDistance: "",
                     hospitals: [],
              };

              this.handleChangeLatitude = this.handleChangeLatitude.bind(this);
              this.handleChangeLongitude =
                     this.handleChangeLongitude.bind(this);
              this.handleChangeDistance = this.handleChangeDistance.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);
       }

       handleChangeLatitude(event) {
              this.setState({ searchTermLatitude: event.target.value }, () => {
                     let searchStringLatitude = this.state.searchTermLatitude;
                     let searchStringLongitude = this.state.searchTermLongitude;
                     let searchStringDistance = this.state.searchTermDistance;

                     let url = encodeURI(
                            "http://localhost:5556/hospitals?dist=" +
                                   searchStringDistance +
                                   "&lat=" +
                                   searchStringLatitude +
                                   "&lon=" +
                                   searchStringLongitude
                     );

                     if (
                            searchStringDistance !== "" &&
                            searchStringLatitude !== "" &&
                            searchStringLongitude !== ""
                     ) {
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
                     }
              });
       }

       handleChangeLongitude(event) {
              this.setState({ searchTermLongitude: event.target.value }, () => {
                     let searchStringLatitude = this.state.searchTermLatitude;
                     let searchStringLongitude = this.state.searchTermLongitude;
                     let searchStringDistance = this.state.searchTermDistance;

                     let url = encodeURI(
                            "http://localhost:5556/hospitals?dist=" +
                                   searchStringDistance +
                                   "&lat=" +
                                   searchStringLatitude +
                                   "&lon=" +
                                   searchStringLongitude
                     );

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

       handleChangeDistance(event) {
              this.setState({ searchTermDistance: event.target.value }, () => {
                     let searchStringLatitude = this.state.searchTermLatitude;
                     let searchStringLongitude = this.state.searchTermLongitude;
                     let searchStringDistance = this.state.searchTermDistance;

                     let url = encodeURI(
                            Constants.endpointURL +
                                   "?dist=" +
                                   searchStringDistance +
                                   "&lat=" +
                                   searchStringLatitude +
                                   "&lon=" +
                                   searchStringLongitude
                     );

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

                            <PageHeader heading="Hospitals by Distance" />

                            <form onSubmit={this.handleSubmit}>
                                   <label>
                                          Latitude:
                                          <input
                                                 value={
                                                        this.state
                                                               .searchTermLatitude
                                                 }
                                                 onChange={
                                                        this
                                                               .handleChangeLatitude
                                                 }
                                          />
                                   </label>

                                   <br />

                                   <label>
                                          Longitude:
                                          <input
                                                 value={
                                                        this.state
                                                               .searchTermLongitude
                                                 }
                                                 onChange={
                                                        this
                                                               .handleChangeLongitude
                                                 }
                                          />
                                   </label>
                                   <br />

                                   <label>
                                          Distance (miles):
                                          <input
                                                 value={
                                                        this.state
                                                               .searchTermDistance
                                                 }
                                                 onChange={
                                                        this
                                                               .handleChangeDistance
                                                 }
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

export default Distance;
