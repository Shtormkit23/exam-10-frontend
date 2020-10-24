import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/actions/postActions";
import PostCard from "../../components/PostCard/PostCard";
let moment = require('moment');

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return(
        <>
            <div>
                {posts.map(post => {
                    const data = moment(post.date_of_create).format('MMMM Do YYYY, h:mm:ss a')
                    return <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        image={post.image}
                        data={data}
                    />
                })}
            </div>
            </>
    );
};

export default Posts;