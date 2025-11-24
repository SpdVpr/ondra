"use client";

import React, { useRef } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

export default function Contact({
  parentClass = "get-in-touch-area tmp-section-gapTop",
}) {
  const form = useRef();

  const sandMail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Zpráva byla úspěšně odeslána!", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        form.current.reset();
      } else {
        throw new Error(result.message || 'Chyba při odesílání');
      }
    } catch (error) {
      toast.error(`Chyba! ${error.message}`, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <section className={parentClass} id="contacts">
      <div className="container">
        <div className="get-in-touch-wrapper tmponhover">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="contact-inner">
                <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="title-left">Pojďme vytvořit něco skvělého</span>
                </div>
                <ul className="ft-link v2">
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                    <span className="ft-icon">
                      <i className="fa-solid fa-envelope" />
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">E-mail:</h4>
                      <a href="mailto:ondrej.macoun@omgraphics.cz">ondrej.macoun@omgraphics.cz</a>
                    </div>
                  </li>
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <span className="ft-icon">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">Lokace:</h4>
                      <div>Praha</div>
                    </div>
                  </li>
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                    <span className="ft-icon">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">Telefon:</h4>
                      <a href="tel:+420728220787">+420 728 220 787</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-inner">
                <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <Image
                    alt="Contact"
                    src="/assets/images/ondra/contact_uprava.svg"
                    width={560}
                    height={114}
                    style={{
                      margin: "0 auto",
                      maxWidth: "100%",
                      height: "auto",
                      padding: "0 20px"
                    }}
                    priority
                    quality={100}
                  />
                </div>
                <div className="contact-form">
                  <div id="form-messages" className="error" />
                  <form
                    className="tmp-dynamic-form"
                    id="contact-form"
                    ref={form}
                    onSubmit={sandMail}
                  >
                    <div className="contact-form-wrapper row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            name="name"
                            id="contact-name"
                            placeholder="Vaše jméno"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            name="phone"
                            id="contact-phone"
                            placeholder="Telefonní číslo"
                            type="number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            id="contact-email"
                            name="email"
                            placeholder="Váš email"
                            type="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Předmět"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="input-field"
                            placeholder="Vaše zpráva"
                            name="message"
                            id="contact-message"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="tmp-button-here">
                          <button
                            className="tmp-btn hover-icon-reverse radius-round w-100"
                            name="submit"
                            type="submit"
                            id="submit"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Odeslat zprávu</span>
                              <span className="btn-icon">
                                <i className="fa-sharp fa-regular fa-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="fa-sharp fa-regular fa-arrow-right" />
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
