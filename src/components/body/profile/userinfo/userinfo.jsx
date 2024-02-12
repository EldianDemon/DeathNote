import React from "react";

const Userinfo = (props) => {
    debugger
    return(
        <div>
            <h3>{props.profileData[0].username} {props.profileData[0].user2name}</h3>
            <h4>{props.profileData[0].age}</h4>
        </div>
    )
}

export default Userinfo;