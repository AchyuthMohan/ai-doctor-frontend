import React from "react";
import axios from "axios";
import { predictorUrl } from "../../utils/urls";
import { appKey, appId } from "../../utils/config";
// import { useState } from "react";
const TreatmentPredic = ({ conditionId }) => {
console.log(conditionId)
    const requestBody = {
        sex: "male",
        age: {
          value: 20,
        },
      };
//   const [treatment, setTreatment] = useState([]);
  const getTreatment = () => {
    axios
      .get(`https://api.infermedica.com/v3/conditions/${conditionId}/info`, {
        headers: {
          "App-Id": appId,
          "App-Key": appKey,
          "Content-Type": "application/json",
        },
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={getTreatment}>Get Treatment</button>
    </div>
  );
};

export default TreatmentPredic;
