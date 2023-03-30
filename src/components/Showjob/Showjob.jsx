import React from 'react';

const Showjob = (props) => {
    const {title} = props.d;
    console.log(props.d);
    return (
        <div className='border m-3 p-2'>
            <h5>{title}</h5>
        </div>
    );
};

export default Showjob;