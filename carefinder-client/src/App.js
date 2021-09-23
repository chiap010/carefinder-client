import React, {Component} from 'react';
import HospitalData from './components/HospitalData';


class App extends Component {
    render() {
        return (
            <HospitalData hospitals={this.state.hospitals} />

        )
    }

    state = {
        hospitals: []
    }; 

    componentDidMount() {
        fetch('http://knautzfamilywi.com/CareFinder-1.0.0/api/hospitals/city/Racine', 
        {
              headers: { "X-API-KEY": "2e5fc98ee50e2b1c3b8e3ebb40ec476e" }
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ hospitals: data })
            })
            .catch(console.log)
    }
}

export default App;