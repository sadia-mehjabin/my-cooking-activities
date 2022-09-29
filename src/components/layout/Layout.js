import React, { useEffect, useState } from 'react';
import Activities from '../activities/Activities';
import './Layout.css'

const Layout = () => {
    const [activities, setActivities] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([])
    useEffect(() => {
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])

    const addToCartHandler = (activity) => {
        console.log(activity)
        const newTime = [...exerciseTime, activity];
        setExerciseTime(newTime)
        console.log()
    }
    return (
        <div className='layout'>
            <div className="image-container">
                {activities.map(activity => <Activities 
                key={activity._id}
                activity={activity}
                handleAddToCart = {addToCartHandler}
                ></Activities>)}
            </div>
            <div className="information">
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
                <h5>Exercise Time :    {exerciseTime.length}</h5>
                <h5>Break Time :    </h5>
            </div>
        </div>
    );
};

export default Layout;