import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const SingleJob = (props) => {
    // console.log(props.j);
    const { id, name, picture, author_image, title, date } = props.j;
    const handleAddToDetails = props.handleAddToDetails;
    return (
        <div className='card'>
            <img style={{ width: "700px" }} src={picture} alt="" />
            <div className='d-flex justify-content-between mt-3'>
                <div className='d-flex align-items-center gap-3'>
                    <div className='img'>
                        <img style={{width: "70px"}} src={author_image} alt="" />
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='d-flex'>
                    05min read <FontAwesomeIcon onClick={()=>handleAddToDetails(props.j)} icon={faBookmark} style={{ fontSize: 30, color: "black",marginLeft: "5px" }} className="text-center" />
                </div>
            </div>
            <h2>{title}</h2>
            <p>#beginners #programming</p>
            <a href="#">Mark as read</a>
        </div>
    );
};

export default SingleJob;