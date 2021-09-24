import React, {Component} from 'react';
import HospitalData from './components/HospitalData';

class App extends Component {
    
    state = {
        hospitals: []
    }; 

    componentDidMount() {
        fetch('http://mango.cs.uwp.edu:3000/api/v1/hospitals/')
        
            .then(res => res.json())
            .then((data) => {
                this.setState({ hospitals: data })
            })
            .catch(console.log)
    }

    render() {
      return (
          <HospitalData hospitals={this.state.hospitals} />

      )
  }
}

export default App;