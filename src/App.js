import React, { useEffect, useState } from 'react';
import { ToastComponent } from './component';
import "./App.css";

const App = () => {
    const handleConfirm = () => {
        console.log('Confirm clicked');
    };

    let [toast, setToast] = useState(false);

    useEffect(() => {
        let timer;
        if (toast) {
            timer = setTimeout(() => {
                setToast(false);
            }, 3000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [toast]);
    
    return (
        <div className='center'>          
          {toast && <ToastComponent onConfirm={handleConfirm} />}
          <button className='click-me' onClick={() => setToast(true)}>
              Click me
          </button>
          <div id="toast-root"></div>
        </div>
    );
}
export default App;

// import { useState } from "react";
// import { ToastComponent } from "./component/";

// function App() {
//   const [display, setDisplay] = useState(0);
//   const displayBlock = () => {
//     setDisplay(!display);
//   }
//   return (
//     <>
//       <div className=""></div>
//       {display ? (
//         <ToastComponent />
//       ) : (
//           <div style={{margin:"20%"}} ><center>
//             <button style={{ color: "white", background: "blue", width: "300px", fontSize: "30px" }} onClick={displayBlock}>Click Me!</button>
//           </center>
//           </div>
//       )}

      
//     </>
//   );
// }

// export default App;

