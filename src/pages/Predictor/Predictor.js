import "./Predictor.css";
import axios from "axios";
import { appId, appKey } from "../../utils/config";
import { useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { predictorUrl } from "../../utils/urls";
import { symptoms } from "../../data/symptoms";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import TreatmentPredic from "./TreatmentPredic";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Predictor = () => {
  const [conditionId, setConditionId] = useState('');
  const[selectedSymptoms,setSelectedSymtoms]=useState([])
  const[showTreat,setShowTreat]=useState(false);
  const[disease,setDisease]=useState('')
  const requestBody = {
    sex: "male",
    age: {
      value: 20,
    },
    
    evidence:selectedSymptoms,
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
        console.log(response.data.conditions);
        console.log("most prolly: ", response.data.conditions[0].name);
        setDisease(response.data.conditions[0].name)
        setConditionId(response.data.conditions[0].id)
        setShowTreat(true);
      });
  };
  return (
    <MainLayout>
      <div>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={symptoms}
          onChange={(event, value) => {
            setSelectedSymtoms(value.map(({ id,choice_id  }) => ({ id,choice_id })));
          }}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.name}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Checkboxes" placeholder="Favorites" />
          )}
        />
        <button onClick={handleSubmit}>Predict now: </button>
        <p>The disease is: {disease}</p>
      </div>
       {showTreat?<TreatmentPredic conditionId={conditionId}/>:null}
    </MainLayout>
  );
};

export default Predictor;
