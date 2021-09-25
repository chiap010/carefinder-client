import React from 'react'

const HospitalData = (props) => {
 
    // https://www.debuggr.io/react-map-of-undefined/  -- why I did itemsToRender

    let itemsToRender;
    if (props.hospitals.data) {
        itemsToRender = props.hospitals.data.map((item, index) => {
          return (
              <div key={index}>
                <div>{item.name}</div>
                <div>{item.city} {item.state}</div>
                <div>{item.phoneNumber}</div>
                <div> <br /></div>
              </div>
            );
        });
      } else {
        itemsToRender = "";
      }

  return <div>{itemsToRender}</div>;

};

export default HospitalData