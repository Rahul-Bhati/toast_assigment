import React, { useEffect, useState } from "react";

const ToastComponent = ({ onClose, isOpen, variant, timer, toastData }) => {
  let { title, img, details, children } = toastData;

  const [progress, setProgress] = useState(0);

  const [isHovering, setIsHovering] = useState(false);

  if (variant === "success") {
    title = "Success";
    img = "check.svg";
    details = "This is a success message";
    children = <p>other msg</p>;
  } else if (variant === "error") {
    title = "Error";
    img = "error.svg";
    details = "This is an error message";
    children = <p>other msg</p>;
  } else if (variant === "info") {
    title = "Info";
    img = "info.svg";
    details = "This is an info message";
    children = <p>other msg</p>;
  } else if (variant === "warning") {
    title = "Warning";
    img = "warning.svg";
    details = "This is a warning message";
    children = <p>other msg</p>;
  }

  useEffect(() => {
    let intervalId;

    if (isOpen && !isHovering && timer) {
      setProgress(0); // Reset progress on open
      intervalId = setInterval(() => {
        setProgress((oldProgress) => {
          const diff = 100 / (timer / 100); // Calculate progress increment
          return Math.min(oldProgress + diff, 100);
        });
      }, 100); // Update progress every 100ms

      // Auto close toast after timer
      const timeoutId = setTimeout(() => {
        onClose();
      }, timer);

      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }
  }, [isOpen, timer, onClose, isHovering]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setProgress(0); // Finish progress animation
    setIsHovering(false);
     
    onClose();
  }

  return (
    <div
      className={`toast toast-${variant}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="toast-body">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <img src={img} alt={title} className="filter-white" />
          <div className="toast-detail">
            <strong>{title}</strong>
            <p>{details}</p>
            {children}
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