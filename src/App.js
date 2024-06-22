import React, { useState } from "react";
import { ToastComponent } from "./component";
import "./App.css";
import { createPortal } from "react-dom";

const App = () => {
  const [isOpen, setToastOpen] = useState(false);

  const [variant, setVariant] = useState("");

  // Function to open the toast
  const showToast = () => setToastOpen(true);

  // Function to close the toast
  const closeToast = () => setToastOpen(false);

  const handleToast = () => {
    const variantData = ["success", "error", "info", "warning"];
    const rand = Math.floor(Math.random() * variantData.length);

    setVariant(variantData[rand]);

    showToast();
  };

  return (
    <div className="center">
      {createPortal(
        <ToastComponent
          isOpen={isOpen}
          onClose={closeToast}
          variant={variant}
          timer={5000} // Toast will close after 5 seconds
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
