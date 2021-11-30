import React from "react";
import "../css/styles.css";
import parse from "html-react-parser";

const ShowIndividualHospital = (props) => {
      // https://www.debuggr.io/react-map-of-undefined/
      // This component requires an array to be passed into the props.  If there is no data,
      // we need to check for that.  If we don't, this React app could crash when
      // props.hospitals.data is undefined, when we attempt to map().  (Mapping on undefined does not work.)

      let divsToShow;
      // Make sure the array is ready and filled before we attempt mapping.
      if (props.hospitals.data && !props.hospitals.data.error) {
            divsToShow = props.hospitals.data.map((item, index) => {
                  let mapLink = "";
                  if (
                        item.latitude !== undefined ||
                        item.longitude !== undefined
                  ) {
                        let mapsURL = encodeURI(
                              "https://www.google.com/maps/search/?api=1&query=" +
                                    item.latitude +
                                    "," +
                                    item.longitude
                        );
                        mapLink =
                              "<a target='_blank' href='" +
                              mapsURL +
                              "'>Map</a>";
                  }

                  // Format phone number
                  let phoneLine =
                        item.phone_number !== "" ||
                        item.phone_number !== undefined
                              ? "Ph:  " + item.phone_number
                              : "";

                  // Format county name.  Doing some ternary operator stuff to get some practice!
                  let countyNameLine =
                        item.county === undefined
                              ? ""
                              : item.county + " COUNTY";

                  // Emergency services line
                  let emergencyServicesLineYesNo = item.emergency_services;
                  let emergencyServicesLine = "";
                  if (emergencyServicesLineYesNo === "true") {
                        emergencyServicesLine = "Emergency Services Available";
                  }

                  // Render the output
                  return (
                        <div key={index} className="hospitalOutterDiv">
                              <div className="individualHospital">
                                    <span className="hospitalName">
                                          {item.hospital_name}{" "}
                                    </span>
                                    <span> #{item.provider_id}</span>
                                    <div>
                                          {item.city} {item.state}{" "}
                                          {item.zip_code}
                                    </div>
                                    <div>{countyNameLine}</div>
                                    <div>{phoneLine}</div>
                                    <div className="emergencyServices">
                                          {emergencyServicesLine}
                                    </div>
                                    <div className="mapLink">
                                          {parse(mapLink)}
                                    </div>
                                    <div></div>
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
