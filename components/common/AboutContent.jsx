import React from "react";
import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="about-content-area" id="about" style={{paddingTop: '0px', paddingBottom: '80px'}}>
      <div className="container">
        <div className="text-para-doc-wrap">
          <h2 className="text-para-documents tmp-scroll-trigger tmp-fade-in inv-title-animation-wrap animation-order-1">
            Mým cílem je vždy přinést <span>kreativní a funkční řešení</span>, která efektivně
            komunikují vaše <span>sdělení</span> a podpoří vaše <span>podnikání</span>.
          </h2>
          <div className="right-bg-text-para">
            <Image
              alt=""
              src="/assets/images/banner/right-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
          <div className="left-bg-text-para">
            <Image
              alt=""
              src="/assets/images/banner/left-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

