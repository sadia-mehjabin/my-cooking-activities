import React from 'react';
import './Activities.css'

const Activities = (props) => {
    // const {handleAddToCart} = props;
    const {picture, time, name, description} = props.activity ;
    // const {addToBreak} = props;
    
    return (
        <div className='activity'>
            <img src={picture} alt=""></img> 
            <h3 className='activity-name'>Name: {name}</h3>
            <p>Time Duration: {time} Minute</p>
            <p>Description: {description}</p>
            <button onClick={() => props.handleAddToCart(props.activity)} className='btn-add-to-list'>Add To List</button>
        </div>
    );
};

export default Activities;