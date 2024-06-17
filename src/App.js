import React, { useEffect, useState } from 'react';
import { ToastComponent } from './component';
import "./App.css";

const App = () => {
    const handleConfirm = () => {
        console.log('Confirm clicked');
    };

    let [toast, setToast] = useState({
        text :"",
        status: false,
        bg: "",
        img: ""
    });

    const randToast = () => {
        const bgAndImg = [
            {bg: "green", img: "check-mark.png"},
            {bg: "red", img: "exclamation-circle.png"},
            {bg: "blue", img: "info-circle.png"},
            {bg: "yellow", img: "exclamation-tringle.png"}
        ];

        const rand = Math.floor(Math.random() * bgAndImg.length);

        return bgAndImg[rand];
        // const bg = ["green", "red", "blue", "yellow"];
        // const rand = Math.floor(Math.random() * bg.length);
        // return bg[rand];
    }
    const handleToast = () => {
        const {bg, img} =  randToast()
        setToast({
            text: "Wow so easy",
            status: true,
            bg: bg,
            img: img
        });
    } 

    useEffect(() => {
        let timer;
        if (toast.status) {
            timer = setTimeout(() => {
                setToast({...toast, status: false});
            }, 3000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [toast]);
    
    return (
        <div className='center'>          
          {toast.status && <ToastComponent onConfirm={handleConfirm} toastDetail={toast}/>}
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

