import React from "react";

export const Contact = () => {
  return (
    <div>
      <section className="contact container" id="contact">
        <h2 className="title">Get In Touch</h2>
        <div className="social flex">
          <a href="https://www.linkedin.com/in/prem-acharya/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <h3>OR</h3>

        <a href="mailto:manandharkiran90@gmail.com">
          <div className="email-section flex">
            <div className="email flex">
              <span> myemail@gmail.com </span>

              <div ClassName="send flex">
                <i ClassName="fa-solid fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </a>
      </section>
    </div>
  );
};
