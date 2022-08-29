import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="one">VISIT US IN KENYA</h3>
              <h5 className="city">Nairobi Kenya</h5>
              <p>
                Belgravia Centre,14 Riverside drive
                <br />
                4th floor,off Riverside Drive
                <br />
                Harvest Center,14 Riverside Drive
                <br />
                6th floor, off Riverside Drive
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="one">VISIT US IN GHANA</h3>
              <h5 className="city">Accra,Ghana</h5>
              <p>
                One Airport Square, Airport City
                <br />
                8th floor
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="one">VISIT US IN NIGERIA</h3>
              <h5 className="city">Lagos,Nigeria</h5>
              <p>Sroding Bank Building</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
