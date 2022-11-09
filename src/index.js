import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { Routes, Route, Router } from "react-router-dom";
import FeelSettings from './feelSettings/FeelSettings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} exact />
            <Route path="/chart" element={<FeelSettings />} />
        </Routes>
    </BrowserRouter>
);

