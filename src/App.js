import React, { useState } from "react";
import { ToastComponent } from "./component";
import "./App.css";
import { createPortal } from "react-dom";

const App = () => {
  const [isOpen, setToastOpen] = useState(false);
  const [variant, setVariant] = useState("");

  const handleToast = () => {
    const variants = ["success", "error", "info", "warning"];
    setVariant(variants[Math.floor(Math.random() * variants.length)]);
    setToastOpen(true); // Open the toast directly
  };

  return (
    <div className="center">
      {isOpen &&
        createPortal(
          <ToastComponent
            isOpen={isOpen}
            onClose={() => setToastOpen(false)}
            variant={variant}
            timer={15000}
          />,
          document.querySelector("#toast-root")
        )}

      <button className="click-me" onClick={handleToast}>
        Click me
      </button>
    </div>
  );
};

export default App;
