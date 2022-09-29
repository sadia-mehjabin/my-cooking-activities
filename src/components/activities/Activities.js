import React from 'react';

const Activities = (props) => {
    const {picture, time, name, description} = props.activity ;
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Activities;