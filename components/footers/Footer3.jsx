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

export default function Footer3({
  darkLogo = "/assets/images/logo/omgraphics_logo.svg",
  lightLogo = "/assets/images/logo/omgraphics_logo.svg",
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

  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      <footer className="footer-area footer-style-one-wrapper  tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-one">
            <div className="row g-5">
              <div className="col-lg-5 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        className="logo-dark"
                        alt="OMGraphics - Graphic Design Portfolio"
                        src={darkLogo}
                        width={260}
                        height={36}
                      />
                      <Image
                        className="logo-white"
                        alt="OMGraphics - Graphic Design Portfolio"
                        src={lightLogo}
                        width={260}
                        height={36}
                      />
                    </Link>
                  </div>
                  <p className="description" style={{ fontSize: '24px', lineHeight: '34px' }}>
                    Kreativní řešení pro vaši značku s důrazem na detail a originalitu.
                  </p>
                  <div className="social-link footer mt--40">
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
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation dark-content">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          onClick={(e) => handleAnchorClick(e, item.href)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation light-content2">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          onClick={(e) => handleAnchorClick(e, item.href)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Kontakt</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="mailto:ondrej.macoun@omgraphics.cz">ondrej.macoun@omgraphics.cz</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      Praha
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bg-img">
          <Image
            alt="footer-img"
            width={437}
            height={430}
            src="/assets/images/ondra/omega_uprava.svg"
          />
        </div>
      </footer>{" "}
    </>
  );
}
