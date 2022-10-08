import React from 'react'

function Home() {
  return (
    <div className="home">
      <img
        className="home-app"
        src="https://cdn-icons-png.flaticon.com/128/1390/1390704.png"
        alt="logoo"
      ></img>
      <div>
        <h1 style={{ fontWeight: "bold" }}>Welcome,</h1>
        <h1>
          With us, we help you manage your <br></br>finances for a better growth.
        </h1>
        <h1>
          Provinsion an overview of assets, <br></br>liabilities, and
          shareholders' equity<br></br> as a snapshot in time.
        </h1>
      </div>
      <div>
        <img
          src={require("../assets/micheile-dot-com-f030K9IzpcM-unsplash.jpg")}
          className="image"
          alt="saving"
        ></img>
        {/* <img
          src={require("../assets/matthew-lancaster-OtfnlTw0lH4-unsplash.jpg")}
          alt="finances"
        ></img> */}
      </div>
    </div>
  );
}

export default Home