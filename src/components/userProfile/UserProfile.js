import React from "react";
import './UserProfile.css';

const UserProfile = () => {
    return (
        <div className="user-profile background">
            <img className="userpic" src="https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg"></img>
            <div className="userName">
                <div className="name">Никита Цуканов</div>
                <div className="login">@itwouldseemthat</div>
                <div className="birthsday"><a className="bd">День рождения: </a>23 сентября 2000</div>
            </div>
            <div className="lane"></div>
            <button className="edit-profile sidebarBtn" type="submit">Edit profile</button>
        </div>
    )
}

export default UserProfile;