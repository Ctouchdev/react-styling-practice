//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const time = new Date();
const currentTime = time.getHours();
console.log(currentTime);
var greeting;

if (currentTime >= 1 && currentTime <= 12) {
  greeting = "Good Morning!";
  ReactDOM.render(
    <h1 className="heading" style={{ color: "red" }}>
      {greeting}
    </h1>,
    document.getElementById("root")
  );
} else if (currentTime > 12 && currentTime < 18) {
  greeting = "Good Afternoon!";
  ReactDOM.render(
    <h1 className="heading" style={{ color: "green" }}>
      {greeting}
    </h1>,
    document.getElementById("root")
  );
} else {
  greeting = "Good Evening!";
  ReactDOM.render(
    <h1 className="heading" style={{ color: "blue" }}>
      {greeting}
    </h1>,
    document.getElementById("root")
  );
}

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
