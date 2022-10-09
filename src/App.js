import React, { useState } from "react";
import './App.css';
import MainPage from "./MainPage";

import CreatePost from "./components/createPost/CreatePost";

function App() {
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


    return (
        <div className="app">
            {boolean && <CreatePost clickOnExitCreatePost={clickOnExitCreatePost} />}
            <MainPage clickOnCreatePost={clickOnCreatePost} />   
        </div>
    )
}

export default App;