import React from "react";
import axios from "axios";
import { appId, appKey } from "../../utils/config";
import { useState } from "react";
import { predictorUrl } from "../../utils/urls";
const Predictor = () => {
    const[conditions,setConditions]=useState([])
  const requestBody = {
    sex: "male", 
    age: {
      value: 20,
    },
    evidence: [
      {
        id: "s_1193",
        choice_id: "present",
        source: "initial",
      },
      {
        id: "s_488",
        choice_id: "present",
      },
      {
        id: "s_418",
        choice_id: "present",
      },
    ],
  };
  const handleSubmit = () => {
    axios
      .post(`${predictorUrl}/diagnosis`, requestBody, {
        headers: {
          "App-Id": appId,
          "App-Key": appKey,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.conditions)
        console.log("most prolly: ",response.data.conditions[0].name)
        setConditions(response.data.conditions)
      });
  };
  return (
    <div>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        click{" "}
      </button>
    </div>
  );
};

export default Predictor;
