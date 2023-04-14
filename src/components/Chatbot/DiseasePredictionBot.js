import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';
import { appKey,appId } from '../../utils/config';
const TreatmentBot = () => {
  const [treatments, setTreatments] = useState([]);

  const fetchTreatments = (steps) => {
    console.log("fettreaneant called")
    const symptoms = steps.symptoms.value;
    axios
      .post('https://api.infermedica.com/v3/diagnosis', {
        sex: 'Male',
        age: 30,
        evidence: [{ id: symptoms, choice_id: 'present' }],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'App-Id': appId,
          'App-Key': appKey,
        },
      })
      .then((response) => {
        const { conditions } = response.data;
        const treatmentList = conditions.map((condition) => condition.treatment);
        setTreatments(treatmentList);
        console.log(treatmentList)
      })
      .catch((error) => console.log(error));
  };

  return (
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'What symptoms are you experiencing?',
          trigger: 'symptoms',
        },
        {
          id: 'symptoms',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Checking for treatments...',
          trigger: '4',
          delay: 1000,
        },
        {
          id: '4',
          action: (steps) => {
            fetchTreatments(steps);
            return { done: true };
          },
          message:'final',
          end: true,
        },
      ]}
      headerTitle="Treatment Bot"
      floating={true}
      opened={true}
    />
  );
};

export default TreatmentBot;
