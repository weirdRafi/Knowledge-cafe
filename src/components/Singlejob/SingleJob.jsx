import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

const SingleJob = (props) => {
    // console.log(props.j);
    const { id, name, picture, author_image, title, date , min} = props.j;
    const handleAddToDetails = props.handleAddToDetails;

    const handleDetail=()=>{
        toast("Bookmarked!")
    }
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
                        <p>{date} (4 days ago)</p>
                    </div>
                </div>
                <div className='d-flex'>
                    {min} min read 
                    <div onClick={handleDetail}>
                    <FontAwesomeIcon onClick={()=>handleAddToDetails(props.j)} icon={faBookmark} style={{ fontSize: 30, color: "black",marginLeft: "5px", cursor: "pointer" }} className="text-center" />
                    </div>
                </div>
            </div>
            <h2>{title}</h2>
            <p>#beginners #programming</p>
            <a href="#" >Mark as read</a>
            
        </div>
    );
};

export default SingleJob;