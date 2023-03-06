import { useState } from "react";
import "./App.css";

function App() {
  const [transcript, setTranscript] = useState("");

  const handleListen = () => {
    const recognition = new window.SpeechRecognition();
    recognition.start();
    recognition.onresult = (event) => {
      setTranscript(event.results[0][0].transcript);
    };
  };

  return (
    <div>
      <h3>Speech Recognition App</h3>
      <button onClick={handleListen}>Start Listening</button>
      <p>{transcript}</p>
    </div>
  );
}

export default App;
