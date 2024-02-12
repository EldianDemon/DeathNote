import React from "react";
import Userinfo from "./userinfo/userinfo";
import Sendpost from "./sendpost/sendpost";
import Posts from "./posts/posts";

const Profile = (props) => {
    debugger
    return (
        <section>
            <Userinfo profileData={props.profilePage.profileData} />
            <Sendpost dispatch={props.dispatch} />
            <Posts postsData={props.profilePage.postsData} />
        </section>
    );
}

export default Profile;