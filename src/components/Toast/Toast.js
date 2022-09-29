import React from 'react';
import './Toast.css'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function Toast(){
    const notify = () => toast("Congratulations! I Have Done It.");

    return (
      <div>
        <button className='toastBtn' onClick={notify}>Activity Completed</button>
        <ToastContainer />
      </div>
    );
  }
  export default Toast;