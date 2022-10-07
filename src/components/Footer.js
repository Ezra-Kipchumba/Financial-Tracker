import React from 'react'

function Footer() {
  return (
    <div className="footer">

        {/* <img src={require('../assets/anne-nygard-OtqaCE_SEMI-unsplash.jpg')} */}
          {/* className="logo"
          alt='logo-main'></img> */}

      <div className="fi-footer">
        <img src="" alt=""></img>
        <h3>The Heart of Financing</h3>
        <img src="" alt="instagram"></img>
        <img src="" alt="twitter"></img>
        <img src="" alt="LinkedIn"></img>
        <img src="" alt="facebook"></img>
      </div>
      <div className="f-footer">
        <h2>More</h2>
        <span>Media</span>
        <span>Newsletter</span>
        <span>Programs</span>
        <span>Events</span>
      </div>
      <div className="f-footer">
        <h2>About</h2>
        <span>Patner with us</span>
        <span>Cookies</span>
        <span>Terms and conditions</span>
        <span>Privacy and Policy</span>
      </div>
    </div>
  );
}

export default Footer