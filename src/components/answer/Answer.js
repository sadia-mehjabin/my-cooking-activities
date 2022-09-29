import React from 'react';
import './Answer.css'
const Answer = () => {
    return (
        <div className='answer'>
            <h3>1. how Do React Works?</h3>
            <p>
                ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <h3>2. What Is The Difference Between Props And State?</h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            <h3>3. What Is The uses of Use Effect Without Load Data?</h3>
            <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
        </div>
    );
};

export default Answer;