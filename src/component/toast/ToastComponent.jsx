import React from 'react';
import './ToastComponent.css';

const ToastComponent = ({ onConfirm }) => {
  return (
    <div className="toast-container">
      <div className="toast">
        <div className="toast-header">
          <h3 className="toast-title">Title</h3>
          <button className="toast-close" onClick={onConfirm}>
            X
          </button>
        </div>
        <div className="toast-body">
          <p>This is a toast message</p>
        </div>
        <div className="toast-footer">
          <button className="confirm-button" onClick={onConfirm}>
            Confirm
          </button>
          <button className="toast-button" onClick={onConfirm}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToastComponent;

// write test for above mention code (ToastComponent.jsx)
// Path: src/component/toast/ToastComponent.test.jsx
// Compare this snippet from src/App.test.js:
// import { render, screen } from '@testing-library/react';
// import App from './App';
// 
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// import { render, screen } from '@testing-library/react';
// import ToastComponent from './ToastComponent';

// test('renders toast component', () => {
//   render(<ToastComponent />);
//   const toastElement = screen.getByText(/This is a toast message/i);
//   expect(toastElement).toBeInTheDocument();
// });