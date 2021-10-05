import React from "react";
import "../css/styles.css";

const HospitalData = (props) => {
      // I wanted to use map to parse out the hospital data array coming from props.
      // However, I found that data (props.hospitals.data) isn't always guaranteed
      // to be there when this is called.  Therefore, I did a data check to only map()
      // when the data is available.
      // https://www.debuggr.io/react-map-of-undefined/

      let itemsToRender;
      if (props.hospitals.data) {
            itemsToRender = props.hospitals.data.map((item, index) => {
                  return (
                        <div key={index} className="hospitalOutterDiv">
                              <div className="individualHospital">
                                    <div className="hospitalName">
                                          {item.name}
                                    </div>
                                    <div>
                                          {item.city} {item.state}{" "}
                                          {item.zipCode}
                                    </div>
                                    <div>County of {item.county}</div>
                                    <div>{item.phoneNumber}</div>
                              </div>
                        </div>
                  );
            });
      } else {
            itemsToRender = "";
      }

      return <div>{itemsToRender}</div>;
};

export default HospitalData;
