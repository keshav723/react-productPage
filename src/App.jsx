import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Herosection />
    </>
  );
}

export default App;

function Nav() {
  return (
    <div className="logo">
      <div>
        <img src="../src/assets/brand_logo.png" alt="" />
      </div>

      <div>
        <ul className="list">
          <li>menu</li>
          <li>location</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>

      <div>
        <button>Logo</button>
      </div>
    </div>
  );
}

function Herosection() {
  return (
    <div className="herosection">
      <div className="description">
        <h2>YOUR FEET DESERVE THE BEST</h2>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn ">
          <button className="btn1">Shop now</button>
          <button className="btn2">Category</button>
        </div>

        <div className="shoping">
          <p>Also available</p>
          <img src="../src/assets/flipkart.png" alt="" />
          <img src="../src/assets/amazon.png" alt="" />
        </div>
      </div>
      <div className="brandlogo">
        <img src="../src/assets/hero-image.png" alt="" />
      </div>
    </div>
  );
}
