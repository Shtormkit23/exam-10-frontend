import React from "react";
import PostForm from "../../components/PostForm/PostForm";
import {useDispatch} from "react-redux";
import {createPost as onPostCreated} from "../../store/actions/postActions";

const NewPost = props => {
    const dispatch = useDispatch();

    const createPost = async postData => {
        dispatch(onPostCreated(postData)).then(() => {
            props.history.push("/");
        });
    }

    return (
        <>
            <PostForm onSubmit={createPost}/>
        </>
    );
};

export default NewPost;