import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

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

      <button class="buttons" id="start-button" onClick={SpeechRecognition.startListening}>Start</button>
      <button class="buttons" id="stop-button" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button class="buttons" id="reset-button" onClick={resetTranscript}>Reset</button>
      <p id="speech-to-text">{transcript}</p>
      <p id="text-to-speech">the fitnessgram Pacer test is a multi-stage Arabic capacity test that progressively gets more difficult as a continuous a 20 metre pays or test will begin in 30 seconds line up at the start the running speed starts slowly but gets faster instrumented after you hear the signal a single app should be completed each time you hear the sound remember to run in a straight line and run as long as possible the second time you feel to complete a lab before the sound it is it's over to this will begin when the world starts on your market set ready start</p>
    </div>
  );
};
export default Dictaphone;