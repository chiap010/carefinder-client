import React from 'react'

const HospitalData = ({hospitals}) => {
    return (
        <div>
            <center><h1>Hospital List</h1></center>
            
           { hospitals.map((hospital) =>
                <h6>{hospital.city}</h6>
           )}
               
        </div>
    )
};

export default HospitalData