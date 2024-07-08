import React, { useState } from "react";
import { ToastComponent } from "./component";
import "./App.css";

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
      {isOpen && (
        <ToastComponent
          isOpen={isOpen}
          onClose={() => setToastOpen(false)}
          variant={variant}
          timer={5000} // Toast will close after 5 seconds
        />
      )}
      <button className="click-me" onClick={handleToast}>
        Click me
      </button>
    </div>
  );
};

export default App;