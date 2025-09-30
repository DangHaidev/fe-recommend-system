"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Similar() {
  const cards = [
    { img: "/img/card/1.png", title: "The Good Lord Bird", rating: "8.3", list: ["Free", "Action", "2019"] },
    { img: "/img/card/2.png", title: "The Dictator", rating: "8.1", list: ["Free", "Comedy", "2012"] },
    { img: "/img/card/3.png", title: "12 Years a Slave", rating: "7.9", list: ["Free", "History", "2013"] },
    { img: "/img/card/4.png", title: "12 Years a Slave", rating: "7.9", list: ["Free", "History", "2013"] },
    { img: "/img/card/5.png", title: "Get On Up", rating: "8.8", list: ["Free", "Biography", "2014"] },
    { img: "/img/card/6.png", title: "Interview With the Vampire", rating: "7.1", list: ["Free", "Horror", "1994"] },
    { img: "/img/card/7.png", title: "Operation Finale", rating: "7.0", list: ["Free", "Drama", "2018"] },
    { img: "/img/card/8.png", title: "Denial", rating: "7.5", list: ["Free", "Drama", "2016"] },
    { img: "/img/card/8.png", title: "Denial", rating: "7.5", list: ["Free", "Drama", "2016"] },
    { img: "/img/card/8.png", title: "Denial", rating: "7.5", list: ["Free", "Drama", "2016"] },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section__title">
              <a href="category.html">Similar movies and TV series</a>
            </h2>
          </div>
          <div className="col-12">
            <div
              className="section__carousel-wrap"
              style={{ position: "relative" }}
            >
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".custom-swiper-next",
                  prevEl: ".custom-swiper-prev",
                }}
                spaceBetween={24}
                slidesPerView={6}
                slidesPerGroup={1}
                watchOverflow={true}
                className="section__carousel"
                style={{ paddingBottom: 8 }}
                // breakpoints={{
                //   320: {
                //     slidesPerView: 1,
                //     slidesPerGroup: 1,
                //     spaceBetween: 10,
                //   },
                //   640: {
                //     slidesPerView: 2,
                //     slidesPerGroup: 1,
                //     spaceBetween: 10,
                //   },
                //   1024: {
                //     slidesPerView: 4,
                //     slidesPerGroup: 1,
                //     spaceBetween: 24,
                //   },
                //   1280: {
                //     slidesPerView: 6,
                //     slidesPerGroup: 1,
                //     spaceBetween: 24,
                //   },
                // }}
              >
                {cards.map((card, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="card">
                      <a href="details.html" className="card__cover">
                        <Image src={card.img} alt="" width={210} height={180} />
                        {/* SVG */}
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <button className="card__add" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z" />
                        </svg>
                      </button>
                      <span className="card__rating">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
                        </svg>
                        {card.rating}
                      </span>
                      <h3 className="card__title">
                        <a href="details.html">{card.title}</a>
                      </h3>
                      <ul className="card__list">
                        {card.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Custom SVG buttons */}
              <button
                className="custom-swiper-prev section__nav section__nav--cards section__nav--prev"
                type="button"
              >
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none">
                  <path
                    d="M1.25 7.72559L16.25 7.72559"
                    stroke="#2f80ed"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502"
                    stroke="#2f80ed"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="custom-swiper-next section__nav section__nav--cards section__nav--next"
                type="button"
              >
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none">
                  <path
                    d="M15.75 7.72559L0.75 7.72559"
                    stroke="#2f80ed"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502"
                    stroke="#2f80ed"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}