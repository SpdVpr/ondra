"use client";
import React from "react";
import Nav1 from "./Nav1";
import Image from "next/image";
import Link from "next/link";
import { openSidebar } from "@/utlis/toggleSidebar";
import { openMobilemenu } from "@/utlis/toggleMobilemenu";
export default function Header1({
  darkLogo = "/assets/images/logo/omgraphics_logo.svg",
  lightLogo = "/assets/images/logo/omega_white.svg",
}) {
  return (
    <header className="tmp-header-area-start header-one header--sticky header--transparent">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    className="logo-dark"
                    alt="OMGraphics - Graphic Design Portfolio"
                    src={darkLogo}
                    width={275}
                    height={36}
                  />
                  <Image
                    className="logo-white"
                    alt="OMGraphics - Graphic Design Portfolio"
                    src={lightLogo}
                    width={275}
                    height={36}
                  />
                </Link>
              </div>
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <Nav1 />
              </nav>
              <div className="tmp-header-right">
                <div className="social-share-wrapper d-none d-md-block">
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
                  </div>
                </div>
                <div className="hamberger-menu d-block d-xl-none">
                  <button
                    className="hamberger-button"
                    onClick={openMobilemenu}
                  >
                    <i className="fa-sharp fa-regular fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
