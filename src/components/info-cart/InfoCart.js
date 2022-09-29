import React, { useState } from 'react';
import Toast from '../Toast/Toast';

import './InfoCart.css'


const InfoCart = ({exerciseTime}) => {
    const [addBreak, setAddBreak] = useState(0);
    const addToBreak = (id) => {
        localStorage.setItem('break', id)
        setAddBreak(id)
        }
    
    
    let total = 0;
    for(const activity of exerciseTime){
        total = total + activity.time;
    }
    return (
        <div>
            <h2>Information</h2>
                <div className='personal-info'>
                    <img src="gettyimages-1167253026-594x594.jpg" alt=""></img>
                    <h3>Sadia Mehjabin</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className='info'>
                    <div>
                        <p>65 kg
                        </p>
                        <p>Weight</p>
                    </div>
                    <div>
                        <p>5.2</p>
                        <p>height</p>
                    </div>
                    <div>
                        <p>26 yrs</p>
                        <p>Age</p>
                    </div>
                </div>
                <h4>Add A Break</h4>
                <div className='buttons'>
                    <button className='btn' onClick={()=> addToBreak(10)}>10</button>
                    <button className='btn' onClick={()=> addToBreak(20)}>20</button>
                    <button className='btn' onClick={()=> addToBreak(30)}>30</button>
                    <button className='btn' onClick={()=> addToBreak(40)}>40</button>
                    <button className='btn' onClick={()=> addToBreak(50)}>50</button>
                </div>
                
                <h4>Exercise Detail</h4>
                <h5>Activity Time : {total} Minute</h5>
                <h5>Break Time : {addBreak}</h5>
                <Toast></Toast>
                
        </div>
    );
};



export default InfoCart;