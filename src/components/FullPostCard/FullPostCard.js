import React from 'react';
import './FullPostCard.css';
import {apiURL} from "../../constants";
import Comments from "../Comments/Comments";
import NewComment from "../../containers/NewComment/NewComment";

const FullPostCard = (props) => {

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
                    <div className="PostDescription">{props.description}</div>
                </div>
            </div>
            <div>
                <Comments
                    id={props.id}
                />
                <NewComment
                    id={props.id}
                />
            </div>
        </>
    )};

export default FullPostCard;