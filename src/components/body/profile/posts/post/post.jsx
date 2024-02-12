import React from "react";

const Post = (props) => {
    return(
        <li>
            <h3>{props.postname}</h3>
            <p>{props.posttext}</p>
        </li>
    )
}

export default Post;