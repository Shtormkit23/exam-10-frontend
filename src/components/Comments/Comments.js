import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../../store/actions/postActions";
import Comment from "./Comment";

const Comments = (props) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.posts.comments);

    useEffect(() => {
        dispatch(fetchComments(props.id));
    }, [dispatch,props.id]);

    return(
        <>
            <div>
                {comments.map(comment => {
                    return <Comment
                        key={comment.id}
                        id={comment.id}
                        news_id={props.id}
                        author={comment.author}
                        description={comment.description}
                    />
                })}
            </div>
        </>
    );
};

export default Comments;