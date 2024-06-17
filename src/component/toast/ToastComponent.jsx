import React from 'react';
import './ToastComponent.css';

const ToastComponent = (props) => {
  const { onConfirm, toastDetail } = props;

  return (
    <div className="toast-container" >
      <div className="toast" style={{background:"white" , color:"black"}}>
        <div className="toast-header">
          <button className="toast-close" onClick={onConfirm}>
            X
          </button>
        </div>
        <div className="toast-body">
          <img src="check.svg" alt={toastDetail.img} className={`filter-${toastDetail.bg}`}/>
          <p>{toastDetail.text}</p>
        </div>
      </div>
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