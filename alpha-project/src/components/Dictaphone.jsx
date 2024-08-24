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
      {/* <p id="microphone-text" >Microphone: {listening ? 'on' : 'off'}</p> */}
      {/* <img id="mic-image" src={listening ? "./mic-on.png" : "./mic-off.png"}/> */}
      {/* <p id={listening ? 'mic-on' : 'mic-off'}>njdknsjfak</p> */}

      {listening ? 
        <img id="mic-on" src="/mic-on.png"/>
        :
        <img id="mic-off" src="/mic-off.png"/>
      }

      <button class="buttons" id="start-button" onClick={SpeechRecognition.startListening}>Start</button>
      <button class="buttons" id="stop-button" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button class="buttons" id="reset-button" onClick={resetTranscript}>Reset</button>
      <p id="speech-to-text">{transcript}</p>
    </div>
  );
};
export default Dictaphone;