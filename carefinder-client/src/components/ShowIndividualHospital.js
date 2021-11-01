import React from "react";
import "../css/styles.css";

const ShowIndividualHospital = (props) => {
      // https://www.debuggr.io/react-map-of-undefined/
      // This component requires an array to be passed into the props.  If there is no data,
      // we need to check for that.  If we don't, this React app could crash when
      // props.hospitals.data is undefined, when we attempt to map().  (Mapping on undefined does not work.)

      let divsToShow;
      // Make sure the array is ready and filled before we attempt mapping.
      if (props.hospitals.data) {
            divsToShow = props.hospitals.data.map((item, index) => {
                  // Format phone number
                  let phoneLine =
                        item.phone_number.phone_number !== "" ||
                        item.phone_number.phone_number !== undefined
                              ? "Ph:  " + item.phone_number.phone_number
                              : "";

                  // Format county name.  Doing some ternary operator stuff to get some practice!
                  let countyNameLine =
                        item.county === undefined
                              ? ""
                              : item.county + " COUNTY";

                  // Render the output
                  return (
                        <div key={index} className="hospitalOutterDiv">
                              <div className="individualHospital">
                                    <span className="hospitalName">
                                          {item.hospital_name}
                                    </span>
                                    <span> #{item.provider_id}</span>
                                    <div>
                                          {item.city} {item.state}{" "}
                                          {item.zip_code}
                                    </div>
                                    <div>{countyNameLine}</div>
                                    <div>{phoneLine}</div>
                              </div>
                        </div>
                  );
            });
      } else {
            divsToShow = "";
      }

      return <div>{divsToShow}</div>;
};

export default ShowIndividualHospital;
