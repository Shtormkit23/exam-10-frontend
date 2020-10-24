import React from "react";
import {useDispatch} from "react-redux";
import {createComment as onCommentCreated} from "../../store/actions/postActions";
import AddComment from "../../components/AddComment/AddComment";

const NewComment = props => {
    const dispatch = useDispatch();

    const createComment = async postData => {
        dispatch(onCommentCreated(postData, props.id)).then(() => {});
    }

    return (
        <>
            <AddComment
                onSubmit={createComment}
                id={props.id}
            />
        </>
    );
};

export default NewComment;