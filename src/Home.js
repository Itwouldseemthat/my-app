import React, { useState } from "react";
import './Home.css';
import MainPage from "./MainPage";

import CreatePost from "./components/createPost/CreatePost";

function Home() {
    const [state, setState] = useState(false);


    let boolean = state;

    function clickOnCreatePost() {
        boolean = true;
        console.log(boolean)
        setState(boolean);
    }

    function clickOnExitCreatePost() {
        boolean = false;
        console.log(boolean)
        setState(boolean);
    }

    const [arrWithForms, setArrWithForms] = useState([]);
    

    function addInfoAboutPost(event, form) {
        event.preventDefault();
        arrWithForms.unshift(form);
        setArrWithForms(arrWithForms);
        clickOnExitCreatePost();
        console.log(arrWithForms);
    }

    return (
        <div className="main">
            {boolean && <CreatePost clickOnExitCreatePost={clickOnExitCreatePost} onSubmit={addInfoAboutPost} />}
            <MainPage arrWithForms={arrWithForms} clickOnCreatePost={clickOnCreatePost} />   
        </div>
    )
}

export default Home;