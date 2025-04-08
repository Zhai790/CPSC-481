import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceToText: React.FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <p>{transcript}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
    </div>
  );
};

export default VoiceToText;
