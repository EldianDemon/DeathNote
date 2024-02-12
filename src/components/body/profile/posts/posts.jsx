import React from "react";
import Post from './post/post'

const Posts = (props) => {
    debugger
    let PostsOut = props.postsData.map(
        (el) => {
            return(
                <Post postname={el.postname} posttext={el.posttext}/>
            )
        }
    )
    return(
        <ul>
            {PostsOut}
        </ul>
    )
}

export default Posts