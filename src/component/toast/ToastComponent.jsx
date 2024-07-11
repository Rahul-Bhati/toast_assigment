import React, { useEffect, useState } from "react";
import { ReactComponent as Info } from './assets/info.svg';
import { ReactComponent as Warning } from './assets/warning.svg';
import { ReactComponent as Error } from './assets/error.svg';
import { ReactComponent as Check } from './assets/check.svg';

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
  console.log(variant , typeof variant);
  const getImagePath = (variant) => {
    switch (variant) {
      case "success":
        return <Check className="filter-white"/>;
      case "error":
        return <Error className="filter-white"/>;
      case "info":
        return <Info className="filter-white"/>;
      case "warning":
        return <Warning className="filter-white"/>;
      default:
        return "./assets/Logomark.png"; // A default placeholder
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
          {getImagePath(variant)}
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
