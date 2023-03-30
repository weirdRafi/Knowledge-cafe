import React, { useEffect, useState } from 'react';
import SingleJob from '../Singlejob/SingleJob';

const Main = ({handleAddToDetails}) => {
    const [job, setJob] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setJob(data))
    },[])

    return (
        <div>
            {
                job.map(j => <SingleJob j={j} handleAddToDetails={handleAddToDetails}></SingleJob>)
            }
        </div>
    );
};

export default Main;