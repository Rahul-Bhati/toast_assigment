import React, { useEffect, useState } from "react";

const ToastComponent = ({ onClose, isOpen, variant, timer }) => {
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isOpen && !isHovering && timer) {
      setProgress(0); // Reset progress on open
      const intervalId = setInterval(() => {
        setProgress((oldProgress) =>
          Math.min(oldProgress + 100 / (timer / 100), 100)
        );
      }, 100); // Update progress every 100ms

      const timeoutId = setTimeout(onClose, timer); // Auto close toast after timer

      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }
  }, [isOpen, timer, onClose, isHovering]);

  if (!isOpen) return null;

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const handleClose = () => {
    onClose();
  };

  const variantData = {
    success: { title: "Success", details: "This is a success message" },
    error: { title: "Error", details: "This is an error message" },
    info: { title: "Info", details: "This is an info message" },
    warning: { title: "Warning", details: "This is a warning message" },
  };

  // const getImagePath = (variant) => `${variant}.svg`;

  // Define image paths based on variant
  const getImagePath = (variant) => {
    switch (variant) {
      case "success":
        return "check.svg";
      case "error":
        return "error.svg";
      case "info":
        return "info.svg";
      case "warning":
        return "warning.svg";
      default:
        return "logo192.png"; // A default placeholder
    }
  };

  return (
    <div
      className={`toast toast-${variant}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="toast-body">
        <div className="toast-content">
          <img
            src={getImagePath(variant)}
            alt={variantData[variant].title}
            className="filter-white"
          />
          <div className="toast-detail">
            <strong>{variantData[variant].title}</strong>
            <p>{variantData[variant].details}</p>
          </div>
        </div>
        <button onClick={handleClose} className="toast-close">
          x
        </button>
      </div>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ToastComponent;
