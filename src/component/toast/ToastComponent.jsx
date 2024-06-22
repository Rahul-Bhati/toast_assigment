// import React, { useEffect, useState } from "react";

// const preloadImage = (src) => {
//   const image = new Image();
//   image.src = src;
// };

// const ToastComponent = ({ onClose, isOpen, variant, timer, toastData }) => {
//   let { title, img, details, children } = toastData;

//   const [progress, setProgress] = useState(0);

//   const [isHovering, setIsHovering] = useState(false);

//     // Preload images based on variant
//     useEffect(() => {
//       preloadImage("check.svg");
//       preloadImage("error.svg");
//       preloadImage("info.svg");
//       preloadImage("warning.svg");
//     }, []);

//   if (variant === "success") {
//     title = "Success";
//     img = "check.svg";
//     details = "This is a success message";
//     children = <p>other msg</p>;
//   } else if (variant === "error") {
//     title = "Error";
//     img = "error.svg";
//     details = "This is an error message";
//     children = <p>other msg</p>;
//   } else if (variant === "info") {
//     title = "Info";
//     img = "info.svg";
//     details = "This is an info message";
//     children = <p>other msg</p>;
//   } else if (variant === "warning") {
//     title = "Warning";
//     img = "warning.svg";
//     details = "This is a warning message";
//     children = <p>other msg</p>;
//   }

//   useEffect(() => {
//     let intervalId;

//     if (isOpen && !isHovering && timer) {
//       setProgress(0); // Reset progress on open
//       intervalId = setInterval(() => {
//         setProgress((oldProgress) => {
//           const diff = 100 / (timer / 100); // Calculate progress increment
//           return Math.min(oldProgress + diff, 100);
//         });
//       }, 100); // Update progress every 100ms

//       // Auto close toast after timer
//       const timeoutId = setTimeout(() => {
//         onClose();
//       }, timer);

//       return () => {
//         clearTimeout(timeoutId);
//         clearInterval(intervalId);
//       };
//     }
//   }, [isOpen, timer, onClose, isHovering]);

//   const handleMouseEnter = () => setIsHovering(true);
//   const handleMouseLeave = () => setIsHovering(false);

//   if (!isOpen) return null;

//   const handleClose = () => {
//     setProgress(0); // Finish progress animation
//     setIsHovering(false);

//     onClose();
//   }

//   return (
//     <div
//       className={`toast toast-${variant}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="toast-body">
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "flex-start",
//             gap: "10px",
//           }}
//         >
//           <img src={img} alt={title} className="filter-white" />
//           <div className="toast-detail">
//             <strong>{title}</strong>
//             <p>{details}</p>
//             {children}
//           </div>
//         </div>
//         <button onClick={handleClose} className="toast-close">
//           x
//         </button>
//       </div>
//       <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//     </div>
//   );
// };

// export default ToastComponent;

import { cleanup } from "@testing-library/react";
import React, { useEffect, useState, useRef } from "react";

const ToastComponent = ({ onClose, isOpen, variant, timer }) => {
  // let { title, details, children } = toastData;

  const [progress, setProgress] = useState(0);

  const [isHovering, setIsHovering] = useState(false);
  const imgRef = useRef(null); // Create a ref for the image

  // Lazy load images based on variant
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            observer.unobserve(lazyImage);
          }
        });
      },
      { threshold: 0.01 }
    );

    const img_ref = imgRef.current;

    if (img_ref) {
      observer.observe(img_ref);
    }

    return () => {
      if (img_ref) {
        observer.unobserve(img_ref);
      }
      cleanup(img_ref);
    };

  }, []);

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
        return "placeholder.svg"; // A default placeholder
    }
  };

  let variantData = {
    "success": {
      title: "Success",
      details: "This is a success message",
      children: <p>other msg</p>,
    },
    "error": {
      title: "Error",
      details: "This is an error message",
      children: <p>other msg</p>,
    },
    "info": {
      title: "Info",
      details: "This is an info message",
      children: <p>other msg</p>,
    },
    "warning": {
      title: "Warning",
      details: "This is a warning message",
      children: <p>other msg</p>,
    }
  }

  // if (variant === "success") {
  //   title = "Success";
  //   // img = "check.svg";
  //   details = "This is a success message";
  //   children = <p>other msg</p>;
  // } else if (variant === "error") {
  //   title = "Error";
  //   // img = "error.svg";
  //   details = "This is an error message";
  //   children = <p>other msg</p>;
  // } else if (variant === "info") {
  //   title = "Info";
  //   // img = "info.svg";
  //   details = "This is an info message";
  //   children = <p>other msg</p>;
  // } else if (variant === "warning") {
  //   title = "Warning";
  //   // img = "warning.svg";
  //   details = "This is a warning message";
  //   children = <p>other msg</p>;
  // }

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
  };

  console.log(variantData[variant])

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
          {/* Use ref and data-src for lazy loading */}
          <img
            ref={imgRef}
            src={getImagePath(variant)}
            data-src={getImagePath(variant)}
            alt={variantData[variant].title}
            className="filter-white"
          />
          <div className="toast-detail">
            <strong>{variantData[variant].title}</strong>
            <p>{variantData[variant].details}</p>
            {variantData[variant].children}
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
