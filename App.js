const heading = React.createElement("h1",{id: "heading", class: "head"},"Hi, this is React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);  // the render method basically converts the object we get from our createElement method to the h1 tag that we desire
