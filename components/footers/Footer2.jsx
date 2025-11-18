"use client";
import Image from "next/image";
import Link from "next/link";
import Demomodal from "../modals/Demomodal";
import Chat from "../common/Chat";
import DemoToggler from "../common/DemoToggler";
import ScrollTop from "../common/ScrollTop";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";
import MobileMenuOnepage from "../headers/MobileMenuOnepage";

export default function Footer2({
  darkLogo = "/assets/images/logo/white-logo-reeni.png",
  lightLogo = "/assets/images/logo/logo-white.png",
}) {
  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const footerLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#service" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Reference", href: "#reference" },
    { label: "Contact", href: "#contacts" },
  ];

  return (
    <>
      <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-two">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        className="logo-dark"
                        alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                        src={darkLogo}
                        width={121}
                        height={41}
                      />
                      <Image
                        className="logo-white"
                        alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                        src={lightLogo}
                        width={121}
                        height={40}
                      />
                    </Link>
                  </div>
                  <p className="description">
                    Grafice se věnuji již přes dvanáct let. Nabízím komplexní služby
                    v oblasti grafiky - od návrhu reklamních tiskovin, přes firemní identitu,
                    brand manuály až po velkoformátové tisky.
                  </p>
                  <div className="social-link footer">
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
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <a href={item.href} onClick={(e) => handleAnchorClick(e, item.href)}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Kontakt</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="mailto:info@omgraphics.cz">info@omgraphics.cz</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      Česká republika
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="newslatter tmp-scroll-trigger animation-order-1">
                  <h3 className="title">Pojďme spolupracovat</h3>
                  <p className="para">
                    Máte projekt nebo nápad? Napište mi a společně vytvoříme něco výjimečného.
                  </p>
                  <a
                    href="#contacts"
                    onClick={(e) => handleAnchorClick(e, '#contacts')}
                    className="tmp-btn hover-icon-reverse radius-round"
                    style={{ display: 'inline-block', marginTop: '20px' }}
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
              </div>
            </div>
          </div>
        </div>
      </footer>{" "}
    </>
  );
}
