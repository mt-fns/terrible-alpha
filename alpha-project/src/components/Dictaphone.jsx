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
    setResultPending(true);
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

      {listening ? 
        <img id="mic-on" src="/mic-on.png"/>
        :
        <img id="mic-off" src="/mic-off.png"/>
      }

      <button className="buttons" id="start-button" disabled={resultPending} onClick={handleMicOn}>Start</button>
      <button className="buttons" id="stop-button" onClick={handleMicOff}>Stop</button>
      <button className="buttons" id="reset-button" onClick={resetTranscript}>Reset</button>
      <p id="speech-to-text">{transcript}</p>
      <p id="text-to-speech">the fitnessgram Pacer test is a multi-stage Arabic capacity test that progressively gets more difficult as a continuous a 20 metre pays or test will begin in 30 seconds line up at the start the running speed starts slowly but gets faster instrumented after you hear the signal a single app should be completed each time you hear the sound remember to run in a straight line and run as long as possible the second time you feel to complete a lab before the sound it is it's over to this will begin when the world starts on your market set ready start</p>
    </div>
  );
};
export default Dictaphone;