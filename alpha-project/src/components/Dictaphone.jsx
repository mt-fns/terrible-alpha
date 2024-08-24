import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { callAPI } from '../../backend/backend';
const Dictaphone = () => {
  const [resultPending, setResultPending] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleMicOn = () => {
    SpeechRecognition.startListening();
  }

  const handleMicOff = () => {
    SpeechRecognition.stopListening();
    setResultPending(true);
    callAPI(transcript).then(results => {
      console.log(results);
      setResultPending(false);
    })
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button disabled={resultPending} onClick={handleMicOn}>Start</button>
      <button onClick={handleMicOff}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;