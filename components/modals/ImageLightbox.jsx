"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ImageLightbox({ imageSrc, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    function handleEscKey(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  if (!imageSrc) return null;

  return (
    <div className="image-lightbox-area open">
      <div className="wrapper">
        <div className="image-lightbox-inner" ref={modalRef}>
          <div className="close-icon">
            <button className="lightbox-close-btn" onClick={onClose}>
              <span>
                <i className="fa-sharp fa-light fa-xmark" />
              </span>
            </button>
          </div>
          <div className="lightbox-image-container">
            <Image
              src={imageSrc}
              alt="Full resolution"
              width={1920}
              height={1080}
              style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "90vh" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
