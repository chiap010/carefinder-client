import React, {Component} from 'react';
import HospitalData from '../../components/HospitalData';

class HospitalName extends Component {


    constructor(props) {
        super(props);

        this.state = {
            hospitals: [],
            searchValue: ""
        }; 
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchFromServer = this.fetchFromServer.bind(this);
    }

    handleChange(event) {
        this.setState({ searchValue: event.target.value}, () => 
        { 


            let url = "http://mango.cs.uwp.edu:3000/api/v1/hospitals?name=" + this.state.searchValue
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


    
     

    fetchFromServer() {



       
    }

    render() {
      return (

        <div >
        <h1>Hospital List - Search by Name</h1>

        <p><a href="/">Back</a></p>

        <form onSubmit={this.handleSubmit}>
        <label>
          Search by Hospital Name:
          <input value={this.state.searchValue} onChange={this.handleChange} />
        </label>
        
      </form>

        
        <HospitalData hospitals={this.state.hospitals} />
         
        </div>

 
      )
  }
}

export default HospitalName;