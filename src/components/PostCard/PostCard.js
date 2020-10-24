import React from 'react';
import './PostCard.css';
import {apiURL} from "../../constants";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deletePost} from "../../store/actions/postActions";

const PostCard = (props) => {
    const dispatch = useDispatch();

    let cardImage = '';
    if(props.image) {
        cardImage = apiURL + "/uploads/" + props.image;
    }

    return(
        <>
            <div className="Post">
                {props.image !== '' ?
                    <img
                        src={cardImage}
                        alt='card' className='PostPhoto'/>
                    : <p className="img-db">Enter url of pictures ...</p>
                }
                <div>
                    <div className="PostName"><p className="rainbow-animated">{props.title}</p></div>
                    <div className="PostData">{props.data}</div>
                </div>
                <div className="buttonBlock">
                    <NavLink exact to={`/news/${props.id}`} className="button"><span>Read full post</span></NavLink>
                    <button onClick={() => dispatch(deletePost(props.id))} className="button"><span>Delete</span></button>
                </div>
            </div>
        </>
    )};

export default PostCard;