import React from "react";
import "./TopFooter.scss";

const TopFooter = () => {
  return (
    <section className="top-footer">
      <div className="container">
        <div className="wrapper">
          <div className="left-content">
            <div className="sign-up-text">
              <i className="fa-solid fa-paper-plane"></i>
              <h4>Sign up to Newsletter</h4>
            </div>
            <div className="discount">
              <p>
                ...and receive <b> $20 coupon for first shopping</b>
              </p>
            </div>
          </div>
          <form action="">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter you email address"
            />
            <button>SignUp</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TopFooter;
