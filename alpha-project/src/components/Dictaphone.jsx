import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { callAPI } from '../../backend/backend';
import { textToSpeech } from '../../backend/text_to_speech';
const Dictaphone = () => {
  const [resultPending, setResultPending] = useState(false);
  const [apiResult, setApiResult] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleMicOn = () => {
    resetTranscript();
    setApiResult("");
    SpeechRecognition.startListening();
  }

  const handleMicOff = () => {
    SpeechRecognition.stopListening();
    setResultPending(true);
    callAPI(transcript).then(results => {
      setApiResult(results);
      textToSpeech(results).then(objectUrl => {
          const audio = new Audio(objectUrl);
          audio.play();
          setResultPending(false);
        }
      )
    })
  }

  const handleReset = () => {
    setApiResult("");
    resetTranscript();
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div>

      {listening ? 
        <img id="mic-on" src="/mic-on.png"/>
        :
        <img id="mic-off" src="/mic-off.png"/>
      }

      <button className="buttons" id="start-button" disabled={resultPending} onClick={handleMicOn}>Start</button>
      <button className="buttons" id="stop-button" onClick={handleMicOff}>Stop</button>
      <button className="buttons" id="reset-button" onClick={handleReset}>Reset</button>
      <p id="speech-to-text">{transcript}</p>
      <p id="text-to-speech">{apiResult}</p>
    </div>
  );
};
export default Dictaphone;