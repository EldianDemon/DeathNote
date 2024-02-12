import React from "react";

const Friend = (props) => {
    return(
        <li>
            <h3>{props.username} {props.user2name}</h3>
            <h5>{props.age}</h5>
        </li>
    )
}

export default Friend