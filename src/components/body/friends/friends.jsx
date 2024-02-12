import React from "react";
import Friend from "./friend/friend";

const Friends = (props) => {
    debugger
    let FriendsOut = props.friendsPage.friendsData.map(
        el => <li><Friend username={el.username} user2name={el.user2name} age={el.age} /></li>
    )
    return(
        <ul>
            {FriendsOut}
        </ul>
    )
}

export default Friends