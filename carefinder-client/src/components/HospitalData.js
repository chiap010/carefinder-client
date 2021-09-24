import React from 'react'

const HospitalData = (props) => {

    let itemsToRender;
    if (props.hospitals.data) {
        itemsToRender = props.hospitals.data.map(item => {
          return (
              <div>
                <div>{item.name}</div>
                <div>{item.city} {item.state}</div>
                <div>{item.phoneNumber}</div>
                <div> <br /></div>
              </div>
            );
        });
      } else {
        itemsToRender = "Loading...";
      }

  return <div>{itemsToRender}</div>;

};

export default HospitalData