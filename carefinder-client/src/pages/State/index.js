import React, {Component} from 'react';
import HospitalData from '../../components/HospitalData';

class State extends Component {


    constructor(props) {
        super(props);

        this.state = {
            hospitals: [],
            searchValue: ""
        }; 
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ searchValue: event.target.value}, () => 
        { 


            let url = "http://mango.cs.uwp.edu:3000/api/v1/hospitals?state=" + this.state.searchValue
            // never use & to append
            
                
                fetch(url)
        
        
            .then(res => res.json())
            .then((data) => {
                this.setState({ hospitals: data })
            })
            .catch(console.log)
                    
            

        })
    }
            
        

      handleSubmit(event) {
        event.preventDefault();
      }


    
     



    render() {
      return (

        <div >
        <h1>Hospital List - Search by State</h1>

        <p><a href="/">Back</a></p>

        <form onSubmit={this.handleSubmit}>
        <label>
          Search by State:
          <input value={this.state.searchValue} onChange={this.handleChange} />
        </label>
        
      </form>

        
        <HospitalData hospitals={this.state.hospitals} />
         
        </div>

 
      )
  }
}

export default State;