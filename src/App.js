import React, { useState } from 'react';
import { ToastComponent } from './component';
import "./App.css";


const App = () => {
    const [isOpen, setToastOpen] = useState(false);

    const [variant, setVariant] = useState("");

    let toastData = {
        title :"",
        img: "",
        details : '',
        children: null,
    };

     // Function to open the toast
    const showToast = () => setToastOpen(true);

    // Function to close the toast
    const closeToast = () => setToastOpen(false);

    const handleToast = () => {
        const variantData = ["success", "error", "info", "warning"];
        const rand = Math.floor(Math.random() * variantData.length);

        setVariant(variantData[rand]);

        showToast();
    } 

    console.log(isOpen)
    
    return (
        <div className='center'>          
           <ToastComponent 
            isOpen={isOpen}
            onClose={closeToast}
            variant={variant} 
            timer={15000} // Toast will close after 5 seconds
            toastData={toastData}
           />
          <button className='click-me' onClick={handleToast}>
              Click me
          </button>
          <div id="toast-root"></div>
        </div>
    );
}
export default App;

