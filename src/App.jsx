import { useState } from "react";
import "./App.css";
import pdf from "./dummy.pdf";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container">
      <button
        className="modal-btn"
        onClick={() => setIsVisible((prevIsVisible) => !prevIsVisible)}
      >
        Show modal
      </button>
      {isVisible && (
        <div className="modal">
          <iframe
            src={pdf}
            frameborder="0"
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
