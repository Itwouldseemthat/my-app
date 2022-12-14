import React from "react";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar background">
            <div className="user-profile">
                <img className="userpic" src="https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg"></img>
                <div className="userName">
                    <div className="name">Никита Цуканов</div>
                    <div className="login">@itwouldseemthat</div>
                    <div className="birthsday"><span className="bd">День рождения: </span>23 сентября 2000</div>
                </div>
                <div className="lane"></div>
                <button className="edit-profile" type="submit">Edit profile</button>
            </div>
        </div>
    )
}

export default Sidebar;