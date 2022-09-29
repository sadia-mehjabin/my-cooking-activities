import React from 'react';

const Break = () => {
    const addToBreak = (id) => {
        console.log(id)
    }
    return (
        <div>
            <div>
                    <button onClick={()=> addToBreak(10)}>10</button>
                    <button onClick={()=> addToBreak(20)}>20</button>
                    <button>30</button>
                    <button>40</button>
                    <button>50</button>
                </div>
        </div>
    );
};

export default Break;