import React from 'react';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';
import { appId,appKey } from '../../utils/config';
const apiKey = appKey;
class Diagnosis extends React.Component {
  state = {
    loading: true,
    diagnosis: null,
  };

  componentDidMount() {
    const symptoms = this.props.previousStep.value;
    const requestBody = {
      sex: 'male', // or 'female'
      age: {
        value:20
      },
      // evidence: symptoms?.map((symptom) => ({
      //   id: "s_488",
      //   choice_id: 'present',
      // })),
      evidence: [
        {
          id: "s_1193",
          choice_id: "present",
          source: "initial"
        },
        {
          id: "s_488",
          choice_id: "present"
        },
        {
          id: "s_418",
          choice_id: "present"
        }
    ]

      
    };

    axios.post('https://api.infermedica.com/v3/diagnosis', requestBody, {
      headers: {
        'App-Id': appId,
        'App-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response)
        const diagnosis = response.data.conditions[0].name;
        this.setState({ loading: false, diagnosis });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false, diagnosis: null });
      });
  }

  render() {
    const { loading, diagnosis } = this.state;
    return loading
      ? <p>Identifying disease...</p>
      : <p>The most likely diagnosis is {diagnosis}.</p>;
  }
}

const steps = [
  {
    id: '1',
    message: 'Welcome! What symptoms are you experiencing?',
    trigger: 'symptoms',
  },
  {
    id: 'symptoms',
    user: true,
    trigger: 'identifyDisease',
  },
  {
    id: 'identifyDisease',
    message: 'Identifying disease...',
    trigger: 'getDiagnosis',
  },
  {
    id: 'getDiagnosis',
    component: <Diagnosis />,
    asMessage: true,
    waitAction: true,
    trigger: 'symptoms',
  },
];


const Chatbot = () => {
  return (
    <ChatBot
      headerTitle="AI Doctor"
      steps={steps}
    />
  );
};

export default Chatbot;
