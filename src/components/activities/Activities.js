import React from 'react';
import './Activities.css'

const Activities = (props) => {
    // const {handleAddToCart} = props;
    const {picture, time, name, description} = props.activity ;
    
    return (
        <div className='activity'>
            <img src={picture} alt=""></img> 
            <p>Time Duration: {time}</p>
            <p className='activity-name'>Name: {name}</p>
            <p>Description: {description}</p>
            <button onClick={() => props.handleAddToCart(props.activity)} className='btn-add-to-list'>Add To List</button>
        </div>
    );
};

export default Activities;