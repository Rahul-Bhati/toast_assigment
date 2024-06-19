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



// import React, { useEffect, useState } from 'react';
// import { ToastComponent } from './component';
// import "./App.css";

// const App = () => {
//     const handleConfirm = () => {
//         console.log('Confirm clicked');
//     };

//     let [toast, setToast] = useState({
//         text :"",
//         status: false,
//         bg: "",
//         img: ""
//     });

//     const randToast = () => {
//         const bgAndImg = [
//             {bg: "green", img: "check-mark.png"},
//             {bg: "red", img: "exclamation-circle.png"},
//             {bg: "blue", img: "info-circle.png"},
//             {bg: "yellow", img: "exclamation-tringle.png"}
//         ];

//         const rand = Math.floor(Math.random() * bgAndImg.length);

//         return bgAndImg[rand];
//         // const bg = ["green", "red", "blue", "yellow"];
//         // const rand = Math.floor(Math.random() * bg.length);
//         // return bg[rand];
//     }
//     const handleToast = () => {
//         const {bg, img} =  randToast()
//         setToast({
//             text: "Wow so easy",
//             status: true,
//             bg: bg,
//             img: img
//         });
//     } 

//     useEffect(() => {
//         let timer;
//         if (toast.status) {
//             timer = setTimeout(() => {
//                 setToast({...toast, status: false});
//             }, 3000);
//         }
//         return () => {
//             clearTimeout(timer);
//         };
//     }, [toast]);
    
//     return (
//         <div className='center'>          
//           {toast.status && <ToastComponent onConfirm={handleConfirm} toastDetail={toast}/>}
//           <button className='click-me' onClick={handleToast}>
//               Click me
//           </button>
//           <div id="toast-root"></div>
//         </div>
//     );
// }
// export default App;





// import React, { useEffect, useState } from 'react';
// import { ToastComponent } from './component';
// import "./App.css";

// const App = () => {
//     const handleConfirm = () => {
//         console.log('Confirm clicked');
//     };

//     let [toast, setToast] = useState(false);

//     useEffect(() => {
//         let timer;
//         if (toast) {
//             timer = setTimeout(() => {
//                 setToast(false);
//             }, 3000);
//         }
//         return () => {
//             clearTimeout(timer);
//         };
//     }, [toast]);
    
//     return (
//         <div className='center'>          
//           {toast && <ToastComponent onConfirm={handleConfirm} />}
//           <button className='click-me' onClick={() => setToast(true)}>
//               Click me
//           </button>
//           <div id="toast-root"></div>
//         </div>
//     );
// }
// export default App;

