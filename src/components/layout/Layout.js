import React, { useEffect, useState } from 'react';
import Activities from '../activities/Activities';
import InfoCart from '../info-cart/InfoCart';
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
                <InfoCart exerciseTime={exerciseTime}></InfoCart>
            </div>
        </div>
    );
};



export default Layout;