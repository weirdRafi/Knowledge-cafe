import React from 'react';

const Questions = () => {
    return (
        <div className='container border mt-3'>
            <h3>Q: Difference between props and state?</h3>
            <p><b>Ans:</b> The state is owned locally, and the component itself updates it. Props are owned and read only by a parent.</p>
            <br />
            <h3>Q: How useState Works?</h3>
            <p><b>Ans:</b> useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it.</p>
            <br />
            <h3>Q: What else UseEffect can do except load data?</h3>
            <p><b>Ans:</b></p>
            <br />
            <h3>Q: How does react works?</h3>
            <p><b>Ans:</b> </p>
        </div>
    );
};

export default Questions;