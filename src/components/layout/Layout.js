import React, { useEffect, useState } from 'react';
import Activities from '../activities/Activities';
import './Layout.css'

const Layout = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])
    return (
        <div className='layout'>
            <div className="image-container">
                {activities.map(activity => <Activities 
                key={activity._id}
                activity={activity}
                ></Activities>)}
            </div>
            <div className="information">
                <h2>Information</h2>
            </div>
        </div>
    );
};

export default Layout;