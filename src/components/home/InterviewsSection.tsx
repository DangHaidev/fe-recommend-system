"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Interview {
  id: string;
  image: string;
  title: string;
  duration: string;
  link: string;
}

const interviews: Interview[] = [
  {
    id: "1",
    image: "/img/interview/1.jpg",
    title: "What Was Ben Affleck Planning for His Unmade 'Batman' Film?",
    duration: "5:33",
    link: "/interview",
  },
  {
    id: "2",
    image: "/img/interview/2.jpg",
    title: "A Guide to the Work of Ryan Murphy",
    duration: "2:41",
    link: "/interview",
  },
  {
    id: "3",
    image: "/img/interview/3.jpg",
    title: "Gugu Mbatha-Raw Shares the Films That Give Her Hope",
    duration: "7:19",
    link: "/interview",
  },
  {
    id: "4",
    image: "/img/interview/4.jpg",
    title: "Best of 2020: Top Trending Moments",
    duration: "4:58",
    link: "/interview",
  },
  {
    id: "5",
    image: "/img/interview/5.jpg",
    title: "How Movies and TV Shaped Our Perception of HIV/AIDS",
    duration: "3:52",
    link: "/interview",
  },
  {
    id: "6",
    image: "/img/interview/6.jpg",
    title: "American Gods",
    duration: "3:52",
    link: "/interview",
  },
];

export default function InterviewsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current && typeof window !== "undefined") {
      const $ = (window as any).$;
      if ($ && $.fn.owlCarousel) {
        setTimeout(() => {
          if ($ && $.fn.owlCarousel && carouselRef.current) {
            $(carouselRef.current).owlCarousel({
              items: 4,
              loop: true,
              margin: 30,
              nav: false,
              dots: false,
              autoplay: true,
              autoplayTimeout: 3000,
              autoplayHoverPause: true,
              responsive: {
                0: { items: 1 },
                576: { items: 2 },
                768: { items: 3 },
                992: { items: 4 },
              },
            });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section__title">
              <b>Flix</b>TV Originals
            </h2>
            <p className="section__text">
              Celebrity interviews, trending entertainment stories, and expert
              analysis.
            </p>
          </div>

          <div className="col-12">
            <div className="section__carousel-wrap">
              <div
                className="section__interview owl-carousel"
                id="flixtv"
                ref={carouselRef}
              >
                {interviews.map((interview) => (
                  <div className="interview" key={interview.id}>
                    <Link href={interview.link} className="interview__cover">
                      <Image
                        src={interview.image}
                        alt={interview.title}
                        width={400}
                        height={300}
                        className="interview__image"
                      />
                      <span>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
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
                        </svg>{" "}
                        {interview.duration}
                      </span>
                    </Link>
                    <h3 className="interview__title">
                      <Link href={interview.link}>{interview.title}</Link>
                    </h3>
                  </div>
                ))}
              </div>

              <button
                className="section__nav section__nav--interview section__nav--prev"
                data-nav="#flixtv"
                type="button"
              >
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 7.72559L16.25 7.72559"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="section__nav section__nav--interview section__nav--next"
                data-nav="#flixtv"
                type="button"
              >
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 7.72559L0.75 7.72559"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502"
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

