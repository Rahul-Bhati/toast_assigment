// import React from 'react';
// import './ToastComponent.css';

// const ToastComponent = (props) => {
//   const { onConfirm, toastDetail } = props;

//   return (
//     <div className="toast-container" >
//       <div className="toast" style={{background:"white" , color:"black"}}>
//         <div className="toast-header">
//           <button className="toast-close" onClick={onConfirm}>
//             X
//           </button>
//         </div>
//         <div className="toast-body">
//           <img src="check.svg" alt={toastDetail.img} className={`filter-${toastDetail.bg}`}/>
//           <p>{toastDetail.text}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToastComponent;

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

    if (isOpen && !isHovering) {
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
          {img && <img src={img} alt={title} className="filter-white" />}
          <div className="toast-detail">
            <strong>{title}</strong>
            <p>{details}</p>
            {children}
          </div>
        </div>
        <button onClick={onClose} className="toast-close">
          x
        </button>
        {/* adding progress bar that is depend on timer */}
        {/* {timer && (
          <div className='toast-progress' style={{ animationDuration: `${timer}ms` }} />
        )} */}
      </div>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ToastComponent;

// import React from 'react';
// import './ToastComponent.css';

// const ToastComponent = ({ onConfirm }) => {
//   return (
//     <div className="toast-container">
//       <div className="toast">
//         <div className="toast-header">
//           <h3 className="toast-title">Title</h3>
//           <button className="toast-close" onClick={onConfirm}>
//             X
//           </button>
//         </div>
//         <div className="toast-body">
//           <p>This is a toast message</p>
//         </div>
//         <div className="toast-footer">
//           <button className="confirm-button" onClick={onConfirm}>
//             Confirm
//           </button>
//           <button className="toast-button" onClick={onConfirm}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToastComponent;
