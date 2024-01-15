import React from "react";
import  ReactDOM  from "react-dom/client";
import './app.css';

// ASSIGNMENT - 02, pt. 01


const Header = () => {
    return (
        <div className="header">
            
            <img className="logo" src={"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w240-h480-rw"} width={100}/>

            <div className="searchBar">
                <input type="text" />
                <button>Search</button>
            </div>

            <img className="user" src={"https://frank151.com/wp-content/uploads/2023/07/cenral-artist.webp"} width={100}/>

        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Header/>);

export default Header;