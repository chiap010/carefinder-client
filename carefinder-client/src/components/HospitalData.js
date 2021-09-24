import React from 'react'

const HospitalData = (props) => {
    return (
        <div>
            <center><h1>Hospital List</h1></center>
            
            
            { props.hospitals.data.map( (h) =>
                    <div> {h.name}</div>
                    )
                }
        </div>
    )
};

export default HospitalData