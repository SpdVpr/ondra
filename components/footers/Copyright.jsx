"use client";
import React from "react";
import Link from "next/link";
export default function Copyright() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="copyright-area-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-wrapper">
              <p className="copy-right-para tmp-link-animation">
                © OMGraphics {new Date().getFullYear()} | Všechna práva vyhrazena
              </p>{" "}
              <ul className="tmp-link-animation dark-content">
                <li>
                  <a href="#about" onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#about');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}>O mně</a>
                </li>
                <li>
                  <a href="#service" onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#service');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}>Služby</a>
                </li>
                <li>
                  <a href="#contacts" onClick={handleContactClick}>Kontakt</a>
                </li>
              </ul>
              <ul className="tmp-link-animation light-content">
                <li>
                  <a href="#about" onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#about');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}>O mně</a>
                </li>
                <li>
                  <a href="#service" onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#service');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}>Služby</a>
                </li>
                <li>
                  <a href="#contacts" onClick={handleContactClick}>Kontakt</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
