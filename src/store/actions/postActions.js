import {
    CREATE_COMMENT_SUCCESS, CREATE_POST_SUCCESS,
    FETCH_COMMENTS_SUCCESS,
    FETCH_POST_SUCCESS,
    FETCH_POSTS_SUCCESS
} from "../actionTypes";
import axiosApi from "../../axiosApi";

const fetchPostSuccess = post => {
    return {type: FETCH_POST_SUCCESS, post};
};

const fetchPostsSuccess = posts => {
    return {type: FETCH_POSTS_SUCCESS, posts};
};

const fetchCommentsSuccess = comments => {
    return {type: FETCH_COMMENTS_SUCCESS, comments};
};

const createPostSuccess = () => {
    return {type: CREATE_POST_SUCCESS};
};

const createCommentSuccess = () => {
    return {type: CREATE_COMMENT_SUCCESS};
};

export const fetchPosts = () => {
    return dispatch => {
        return axiosApi.get("/news").then(response => {
            dispatch(fetchPostsSuccess(response.data));
        });
    };
};

export const fetchPost = (id) => {
    return dispatch => {
        return axiosApi.get(`/news/${id}`).then(response => {
            if (response.data instanceof Object) {
                dispatch(fetchPostSuccess(response.data));
            }else {
                alert(response.data)
            }
        });
    };
};

export const createPost = postData => {
    return dispatch => {
        return axiosApi.post("news", postData).then(() => {
            dispatch(createPostSuccess());
        });
    };
};

export const createComment = (postData, newsId) => {
    return dispatch => {
        return axiosApi.post(`comments`, postData).then(() => {
            dispatch(createCommentSuccess())
            dispatch(fetchComments(newsId));
        });
    };
};

export const deleteComment = (newsId, id) => {
    return dispatch => {
        return axiosApi.delete(`comments/${id}`).then(() => {
            dispatch(fetchComments(newsId));
        });
    };
};

export const deletePost = (id) => {
    return dispatch => {
        return axiosApi.delete(`news/${id}`).then(() => {
            dispatch(fetchPosts());
        });
    };
};

export const fetchComments = (newsId) => {

    return dispatch => {
        return axiosApi.get(`/news/${newsId}/comments`).then(response => {
            dispatch(fetchCommentsSuccess(response.data));
        });
    };
};

