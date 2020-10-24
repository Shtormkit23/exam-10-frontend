import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../../store/actions/postActions";
import FullPostCard from "../../components/FullPostCard/FullPostCard";
let moment = require('moment');

const FullPost = (props) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.post);
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(fetchPost(id));
    }, [dispatch,id]);

    return(
        <>
            <div>
                <FullPostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    data={moment(post.date_of_create).format('MMMM Do YYYY, h:mm:ss a')}
                />
            </div>
        </>
    );
};

export default FullPost;