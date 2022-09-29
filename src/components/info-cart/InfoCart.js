import React from 'react';
import Break from '../break/Break';


const InfoCart = ({exerciseTime}) => {
    
    let total = 0;
    for(const activity of exerciseTime){
        total = total + activity.time;
    }
    return (
        <div>
            <h2>Information</h2>
                <div>
                    <h3>Sadia Mehjabin</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className='info'>
                    <div>
                        <p><spam>65</spam>kg
                        </p>
                        <p>Weight</p>
                    </div>
                    <div>
                        <p>5.2</p>
                        <p>height</p>
                    </div>
                    <div>
                        <p><spam>26</spam>yrs</p>
                        <p>Age</p>
                    </div>
                </div>
                <Break fun='addtocart()'></Break>
                <h4>Exercise Detaile</h4>
                <h5>Activity Time : {total} Minute</h5>
                <h5>Break Time : {}</h5>
        </div>
    );
};



export default InfoCart;