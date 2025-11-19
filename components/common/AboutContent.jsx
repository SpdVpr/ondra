import React from "react";
import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="about-content-area" id="about" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
      <div className="container">
        <div className="text-para-doc-wrap">
          <h2 className="text-para-documents tmp-scroll-trigger tmp-fade-in inv-title-animation-wrap animation-order-1">
            Mým cílem je vždy přinést <span>kreativní a funkční řešení</span>, která efektivně
            komunikují vaše <span>sdělení</span> a podpoří vaše <span>podnikání</span>.
          </h2>
        </div>
      </div>
    </div>
  );
}

