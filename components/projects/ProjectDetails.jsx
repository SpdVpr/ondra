"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ImageLightbox from "../modals/ImageLightbox";
export default function ProjectDetails({ portfolioItem }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="project-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-thumnail-wrap" style={{ cursor: "pointer" }} onClick={() => setLightboxImage(portfolioItem.imageSrc)}>
              <Image
                alt="thumbnail"
                src={portfolioItem.imageSrc}
                width={1290}
                height={560}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="project-details-content-wrap">
              <h2 className="title">{portfolioItem.title}</h2>
              <div className="docs" dangerouslySetInnerHTML={{ __html: portfolioItem.description }} />
              {portfolioItem.gallery && portfolioItem.gallery.length > 0 && (
                <div className="project-details-swiper-wrapper">
                  <Swiper
                    className="swiper project-details-swiper"
                    slidesPerView={2}
                    spaceBetween={30}
                    navigation={{
                      nextEl: ".project-swiper-button-next",
                      prevEl: ".project-swiper-button-prev",
                    }}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      500: {
                        slidesPerView: 2,
                      },
                    }}
                    modules={[Navigation, Autoplay]}
                  >
                    {portfolioItem.gallery.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="project-details-img" style={{ cursor: "pointer" }} onClick={() => setLightboxImage(image)}>
                          <Image
                            alt={`gallery-img-${index + 1}`}
                            src={image}
                            width={410}
                            height={295}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="project-details-swiper-btn">
                    <div className="project-swiper-button-prev">
                      <span>
                        <i className="fa-solid fa-arrow-left" />
                      </span>
                      Previous
                    </div>
                    <div className="project-swiper-button-next">
                      Next{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="signle-side-bar project-details-area tmponhover">
              <div className="header">
                <h3 className="title">Project Details</h3>
              </div>
              <div className="body">
                <div className="project-details-info">
                  Client: <span>{portfolioItem.client}</span>
                </div>
                <div className="project-details-info">
                  Date: <span>{portfolioItem.date}</span>
                </div>
                <div className="project-details-info">
                  Size: <span>{portfolioItem.size}</span>
                </div>
                <div className="project-details-info">
                  Tags: <span>{portfolioItem.tags?.join(", ")}</span>
                </div>
                {portfolioItem.tools && (
                  <div className="project-details-info">
                    Tools: <span>{portfolioItem.tools?.join(", ")}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageLightbox
        imageSrc={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
