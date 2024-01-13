import React from "react";
import  ReactDOM  from "react-dom/client";


// ASSIGNMENT - 02, pt. 01


const header = React.createElement(
    "div",
    {className: "title"},
    [React.createElement(
        "h1",
        {},
        "Hi"
    ),
    React.createElement(
        "h2",
        {},
        "My name is "
    ),
    React.createElement(
        "h3",
        {},
        "Yuvraj"
    )]
);

const headerJSX = (
    <div className="title">
        <h1>Hi</h1>
        <h2>My name is</h2>
        <h3>Yuvraj</h3>
    </div>
);

const CompComp = () => {
    return (
        <h1>This is Component Composition</h1>
    )
}

const HeaderFunComp = () => {
    return (
        <div className="title">
            <h1>Hi</h1>
            <h2>My name is</h2>
            <h3>Yuvraj</h3>
            <CompComp/>
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeaderFunComp/>);

