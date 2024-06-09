export { default as ToastComponent } from './toast/ToastComponent';

/*
Test Description:
Create a React component that replicates the design in this Figma file: Figma Link

Requirements:

Implement the Toast component without using any external libraries.
Aim for pixel-perfect implementation as much as possible.
The Toast component should accept an 'onConfirm' property for both buttons (or now it can do nothing or just print the 'console.log').
Integrate this component into the 'index.ts' file, adding a basic HTML button labeled 'click me'. Clicking this button should trigger the display of the Toast in the top-right corner.
Make the Toast component generic so that it can be reused across different parts of an application.
Brownie Points: You can earn extra credit by writing test cases for the Toast component. Show us your attention to detail!

*/

// Path: src/component/toast/ToastComponent.js
// import React from 'react';
// import './ToastComponent.css';

// const ToastComponent = ({ onConfirm }) => {
//     return (
//         <div className="toast-container">
//         <div className="toast">
//             <div className="toast-header">
//             <h3 className="toast-title">Title</h3>
//             <button className="toast-close" onClick={onConfirm}>
//                 X
//             </button>
//             </div>
//             <div className="toast-body">
//             <p>This is a toast message</p>
//             </div>
//             <div className="toast-footer">
//             <button className="toast-button" onClick={onConfirm}>
//                 Confirm
//             </button>
//             <button className="toast-button" onClick={onConfirm}>
//                 Cancel
//             </button>
//             </div>
//         </div>
//         </div>
//     );
//     };

// export default ToastComponent;

// Path: src/component/toast/ToastComponent.css
// .toast-container {
//     position: fixed;
//     top: 20px;
//     right: 20px;
// }

// .toast {
//     width: 300px;
//     background-color: #f8d7da;
//     border: 1px solid #f5c6cb;
//     border-radius: 5px;
//     padding: 10px;
// }

// .toast-header {
//     display: flex;
//     justify-content: space-between;
// }

// .toast-title {
//     margin: 0;
// }

// .toast-close {
//     background-color: transparent;
//     border: none;
//     cursor: pointer;
// }

// .toast-body {
//     margin: 10px 0;
// }

// .toast-footer {
//     display: flex;
//     justify-content: flex-end;
// }

// .toast-button {
//     background-color: #dc3545;
//     color: white;
//     border: none;
//     padding: 5px 10px;
//     margin-left: 5px;
//     cursor: pointer;
// }

// Path: src/component/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ToastComponent } from './toast/ToastComponent';

// const App = () => {
//     const handleConfirm = () => {
//         console.log('Confirm clicked');
//     };

//     return (
//         <div>
//         <button onClick={() => ReactDOM.render(<ToastComponent onConfirm={handleConfirm} />, document.getElementById('toast-root'))}>
//             Click me
//         </button>
//         <div id="toast-root"></div>
//         </div>
//     );
// }

