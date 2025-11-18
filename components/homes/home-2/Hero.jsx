"use client";
import React from "react";
import Image from "next/image";
import TyperComponent from "@/components/common/TyperComponent";

export default function Hero() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="rpp-banner-two-area">
      <div className="container">
        <div className="banner-two-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-2">
              <div className="banner-right-content">
                <div className="main-img">
                  <Image
                    className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                    alt="banner-img"
                    src="/assets/images/foto-moje.svg"
                    width={850}
                    height={1275}
                    style={{width: 'auto', height: 'auto'}}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-1 mt--100" style={{position: 'relative', zIndex: 2}}>
              <div className="inner">
                <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Jsem
                </span>
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                  Ondřej Macoun, <br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent
                        strings={[
                          "Grafický Designer.",
                          "Brand Designer.",
                          "Webdesigner.",
                          "Freelancer.",
                        ]}
                      />
                    </span>
                  </span>
                </h1>
                <p className="disc tmp-scroll-trigger tmp-title-split tmp-fade-in animation-order-3">
                  Grafice se věnuji již přes <span>dvanáct let</span>. Nabízím komplexní služby
                  v oblasti grafiky - od <span>návrhu reklamních tiskovin</span>, přes firemní identitu,
                  brand manuály až po <span>velkoformátové tisky</span>. Zajišťuji celý proces od konceptu
                  přes realizaci až po finální produkci a doručení.
                </p>
                <div className="button-area-banner-two tmp-scroll-trigger tmp-fade-in animation-order-4 d-none d-md-block">
                  <a
                    className="tmp-btn hover-icon-reverse radius-round"
                    href="#contacts"
                    onClick={handleContactClick}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Kontaktujte mě</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </span>
                  </a>
                </div>
                <div className="find-me-on tmp-scroll-trigger tmp-fade-in animation-order-5">
                  <h2 className="find-me-on-title">Najdete mě na</h2>
                  <div className="social-link banner">
                    <a href="https://www.instagram.com/frank_the_cyberhorse/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/ond%C5%99ej-macoun-2a164511b/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://www.facebook.com/ondrej.macoun" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="mailto:info@omgraphics.cz">
                      <i className="fa-regular fa-envelope" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-two">
        <Image
          alt=""
          src="/assets/images/banner/banner-shape-two.png"
          width={778}
          height={900}
        />
      </div>
    </div>
  );
}
