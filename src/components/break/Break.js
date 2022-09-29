import React from 'react';
import './Break.css'
const Break = () => {
    const addToBreak = (id) => {
        console.log(id)
    }
    return (
        <div>
            <div className='buttons'>
                    <button className='btn' onClick={()=> addToBreak(10)}>10</button>
                    <button className='btn' onClick={()=> addToBreak(20)}>20</button>
                    <button className='btn' >30</button>
                    <button className='btn' >40</button>
                    <button className='btn' >50</button>
                </div>
        </div>
    );
};

export default Break;