import React from 'react'

function Footer() {
  return (
    <div className="footer">

      <div className="fi-footer">
        <img
          className="social-app"
          src="https://cdn-icons-png.flaticon.com/128/1390/1390704.png"
          alt="logoo"
        ></img>
        <h3>The Heart of Financing</h3>
        <div className='fe-footer'>
          <img
            className="social-apps"
            src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
            alt="instagram"
          ></img>
          <img
            className="social-apps"
            src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"
            alt="twitter"
          ></img>
          <img
            className="social-apps"
            src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
            alt="LinkedIn"
          ></img>
          <img
            className="social-apps"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
            alt="facebook"
          ></img>
        </div>
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