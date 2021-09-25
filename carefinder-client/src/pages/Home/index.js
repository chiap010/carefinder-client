import React, {Component} from 'react';

class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            
        }; 
    }

    render() {
      return (

        <div >
        <h1>Home</h1>
        
        <ul>
            <li><a href="/AllHospitals">All Hospitals</a></li>
            <li><a href="/HospitalName">Search Hospitals by Hospital Name</a></li>
            <li><a href="/CityName">Search Hospitals by City Name</a></li>
            <li><a href="/State">Search Hospitals by State</a></li>
            <li><a href="/ZipCode">Search Hospitals by Zip Code</a></li>
            <li><a href="/CountyName">Search Hospitals by County</a></li>
        </ul>
         
        </div>

 
      )
  }
}

export default Home;