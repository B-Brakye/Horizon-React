import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img
              src="images/office.jpg"
              alt="..."
              style={{ width: "1350px", height: "400px" }}
            />
            <div className="carousel-caption">...</div>
          </div>
          <div className="item">
            <img
              src="images/pic4.jpg"
              alt="..."
              style={{ width: "1350px", height: "400px" }}
            />
            <div className="carousel-caption">...</div>
          </div>
          ...
        </div>

        {/* <!-- Controls --> */}
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Carousel;
