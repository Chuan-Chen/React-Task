import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const root = ReactDom.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);