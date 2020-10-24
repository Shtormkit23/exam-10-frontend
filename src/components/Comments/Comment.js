import React from 'react';
import {useDispatch} from "react-redux";
import {deleteComment} from "../../store/actions/postActions";

const Comment = (props) => {
    const dispatch = useDispatch();

    return(
        <>
            <div className="Post">
                <div>
                    <div className="PostName"><p className="rainbow-animated">{props.author} wrote:</p></div>
                    <div className="PostName"><p>{props.description}</p></div>
                </div>
                <div className="buttonBlock">
                    <button onClick={() => dispatch(deleteComment(props.news_id, props.id))} className="button"><span>Delete</span></button>
                </div>
            </div>
        </>
    )};

export default Comment;