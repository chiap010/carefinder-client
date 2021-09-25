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
            <li><a href="/HospitalName">Search Hospitals by Name</a></li>
        </ul>
         
        </div>

 
      )
  }
}

export default Home;