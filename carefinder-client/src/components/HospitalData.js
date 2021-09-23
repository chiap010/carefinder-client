import React from 'react'

const HospitalData = ({hospitals}) => {
    return (
        <div>
            <center><h1>Hospital List</h1></center>
            {hospitals.map((hospital) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{hospital.hopsital_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{hospital.address}</h6>
                        <p class="card-text">{hospital.city}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default HospitalData