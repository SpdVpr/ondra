"use client";

import { closeMobilemenu2 } from "@/utlis/toggleMobilemenu";

import React, { useEffect, useRef } from "react";
import OnepageNavMobile from "./OnepageNavMobile";

export default function MobileMenuOnepage() {
  const menuRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        if (innerRef.current && innerRef.current.contains(event.target)) {
        } else {
          closeMobilemenu2();
        }
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="d-block d-xl-none">
      <div ref={menuRef} className="tmp-popup-mobile-menu mobile-menu-onepage">
        <div ref={innerRef} className="inner">
          <div className="header-top">
            <div className="logo">
              <a href="/" className="logo-area">
                <img
                  className="logo-dark"
                  alt="OMGraphics - Graphic Design Portfolio"
                  src="/assets/images/logo/omgraphics_logo.svg"
                  width={200}
                  height={28}
                />
                <img
                  className="logo-white"
                  alt="OMGraphics - Graphic Design Portfolio"
                  src="/assets/images/logo/omgraphics_logo.svg"
                  width={200}
                  height={28}
                />
              </a>
            </div>
            <div className="close-menu">
              <button
                className="close-button tmp-round-action-btn"
                onClick={closeMobilemenu2}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <OnepageNavMobile />
          <div className="social-wrapper mt--40">
            <span className="subtitle">Najdete mě na</span>
            <div className="social-link">
              <a href="https://www.instagram.com/frank_the_cyberhorse/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/ond%C5%99ej-macoun-2a164511b/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="https://www.facebook.com/ondrej.macoun" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="mailto:ondrej.macoun@omgraphics.cz">
                <i className="fa-regular fa-envelope" />
              </a>
            </div>
          </div>
          {/* social area end */}
        </div>
      </div>
    </div>
  );
}
