import React, { useState } from "react";
import './Home.css';
import MainPage from "./MainPage";

import CreatePost from "./components/createPost/CreatePost";

function Home(props) {
    const [state, setState] = useState(false);


    function clickOnCreatePost() {
        setState(true);
    }

    function clickOnExitCreatePost() {
        setState(false);
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
            {state && <CreatePost clickOnExitCreatePost={clickOnExitCreatePost} onSubmit={addInfoAboutPost} />}
            <MainPage 
                arrWithForms={arrWithForms}
                clickOnCreatePost={clickOnCreatePost}
                lineChartData={props.lineChartData}
            />   
        </div>
    )
}

export default Home;