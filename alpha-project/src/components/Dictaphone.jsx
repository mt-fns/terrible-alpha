import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { callAPI } from '../../backend/backend';
import { textToSpeech } from '../../backend/text_to_speech';
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
    callAPI(transcript).then(results => {
      textToSpeech(results).then(objectUrl => {
          const audio = new Audio(objectUrl);
          audio.play();
          setResultPending(false);
          resetTranscript();
        }
      )
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