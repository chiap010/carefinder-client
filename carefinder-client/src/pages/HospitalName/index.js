import React, { Component } from "react";
import HospitalData from "../../components/HospitalData";

class HospitalName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitals: [],
      searchValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // The function called to handle a change in the search textbox
  handleChange(event) {

    // Set the state of the searchValue state variable.  
    // setState() also has a option of something to happen after the callback, which 
    // happens after the state is updated.  Without doing it this way, it's unpredictable
    // when the state is updated.  This way, we are guaranteed the state is updated, and then
    // we make our call to fetch().
    this.setState({ searchValue: event.target.value }, () => {
      let url =
        "http://mango.cs.uwp.edu:3000/api/v1/hospitals?name=" +
        this.state.searchValue;

      // Fetch json data from the url built above.
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ hospitals: data });
        })
        .catch(console.log);
    });
  }

  // The function that is run when a form submit happens.
  handleSubmit(event) {
    event.preventDefault();
  }

  // Component render
  // Pass in the state variable of the hospital information into the HospitalData
  // component so that component can be also rendered.
  render() {
    return (
      <div>
        <h1>Hospital List - Search by Hospital Name</h1>

        <p>
          <a href="/">Back</a>
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Search by Hospital Name:
            <input
              value={this.state.searchValue}
              onChange={this.handleChange}
            />
          </label>
        </form>

        <HospitalData hospitals={this.state.hospitals} />
      </div>
    );
  }
}

export default HospitalName;
