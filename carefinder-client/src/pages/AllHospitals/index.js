import React, {Component} from 'react';
import HospitalData from '../../components/HospitalData';

class AllHospitals extends Component {


    constructor(props) {
        super(props);

        this.state = {
            hospitals: []
        }; 
    }


    
     

    componentDidMount() {
        fetch('http://mango.cs.uwp.edu:3000/api/v1/hospitals/')
        //fetch('https://c94a0730-800b-40e7-8a56-630cd0ddb300.usrfiles.com/ugd/c94a07_8d646812b3624daf8959df11687fc8b3.txt')
        
            .then(res => res.json())
            .then((data) => {
                this.setState({ hospitals: data })
            })
            .catch(console.log)
    }

    render() {
      return (

        <div >
        <h1>Hospital List - All Hospitals</h1>

        <p><a href="/">Back</a></p>
        
        <HospitalData hospitals={this.state.hospitals} />
         
        </div>

 
      )
  }
}

export default AllHospitals;