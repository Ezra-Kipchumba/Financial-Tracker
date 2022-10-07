import React from 'react'

function Home() {
  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>Welcome,</h1>
      <h2>
        With us, we help you manage your finances <br></br>for a better
        tommorrow
      </h2>
      <div>
        <img
          // src={require("../assets/micheile-dot-com-f030K9IzpcM-unsplash.jpg")}
          alt="saving"
        ></img>
        <img
          // src={require("../assets/matthew-lancaster-OtfnlTw0lH4-unsplash.jpg")}
          alt="finances"></img>
      </div>
    </div>
  );
}

export default Home