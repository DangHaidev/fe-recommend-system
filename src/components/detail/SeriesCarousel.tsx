"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const seriesData = [
  {
    img: "/img/series/1.jpg",
    time: "56:36",
    title: "1st series",
    link: "details.html",
  },
  {
    img: "/img/series/2.jpg",
    time: "58:41",
    title: "2nd series",
    link: "details.html",
  },
  {
    img: "/img/series/3.jpg",
    time: "57:19",
    title: "3rd series",
    link: "details.html",
  },
  {
    img: "/img/series/4.jpg",
    time: "54:58",
    title: "4th series",
    link: "details.html",
  },
  {
    img: "/img/series/5.jpg",
    time: "53:52",
    title: "5th series",
    link: "details.html",
  },
  {
    img: "/img/series/6.jpg",
    time: "59:37",
    title: "6th series",
    link: "details.html",
  },
    {
    img: "/img/series/6.jpg",
    time: "59:37",
    title: "6th series",
    link: "details.html",
  },
    {
    img: "/img/series/6.jpg",
    time: "59:37",
    title: "6th series",
    link: "details.html",
  },
];

export default function SeriesCarousel() {
  return (
    <div className="col-12">
      <div className="series-wrap">
        <h3 className="series-wrap__title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"/>
          </svg>
          1st season
        </h3>
        <div className="section__carousel-wrap" style={{ position: "relative" }}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-series-next",
              prevEl: ".custom-series-prev",
            }}
            spaceBetween={24}
            slidesPerView={5}
            slidesPerGroup={1}
            watchOverflow={true}
            className="section__series"
          >
            {seriesData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="series">
                  <a href={item.link} className="series__cover">
                    <Image src={item.img} alt={item.title} width={120} height={180} />
                    <span>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item.time}
                    </span>
                  </a>
                  <h3 className="series__title">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom SVG navigation buttons */}
          <button className="custom-series-prev section__nav section__nav--series section__nav--prev" type="button">
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none">
              <path d="M1.25 7.72559L16.25 7.72559" stroke="#2f80ed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502" stroke="#2f80ed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="custom-series-next section__nav section__nav--series section__nav--next" type="button">
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none">
              <path d="M15.75 7.72559L0.75 7.72559" stroke="#2f80ed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502" stroke="#2f80ed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}