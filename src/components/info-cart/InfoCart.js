import React from 'react';

const InfoCart = ({exerciseTime}) => {
    
    let total = 0;
    for(const activity of exerciseTime){
        console.log(activity);
        total = total + activity.time;
    }
    return (
        <div>
            <h2>Information</h2>
                <h3>Sadia Mehjabin</h3>
                <p>Dhaka, Bangladesh</p>
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
                <h4>Exercise Detaile</h4>
                <h5>Activity Time :    {total}</h5>
                <h5>Break Time :    </h5>
        </div>
    );
};

export default InfoCart;