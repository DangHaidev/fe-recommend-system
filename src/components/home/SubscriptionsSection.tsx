"use client";

import { useEffect, useRef } from "react";
import SubscriptionCard from "../common/SubscriptionCard";

const subscriptions = [
  {
    image: "/img/card/11.png",
    title: "Sports broadcasts",
    description: "More than 300 movies",
  },
  {
    image: "/img/card/15.png",
    title: "Psychological films",
    description: "More than 200 movies",
  },
  {
    image: "/img/card/3.png",
    title: "Films about space",
    description: "More than 100 movies",
  },
  {
    image: "/img/card/1.png",
    title: "Romantic movies",
    description: "More than 300 movies",
  },
  {
    image: "/img/card/18.png",
    title: "Movies about the middle ages",
    description: "More than 300 movies",
  },
  {
    image: "/img/card/2.png",
    title: "Fairy tales",
    description: "More than 100 movies",
  },
  {
    image: "/img/card/17.png",
    title: "Best Movies",
    description: "More than 300 movies",
  },
  {
    image: "/img/card/13.png",
    title: "The best melodramas",
    description: "More than 400 movies",
  },
  {
    image: "/img/card/10.png",
    title: "Horror movies",
    description: "More than 500 movies",
  },
  {
    image: "/img/card/9.png",
    title: "Russian TV Shows",
    description: "More than 300 movies",
  },
  {
    image: "/img/card/14.png",
    title: "Army films",
    description: "More than 250 movies",
  },
  {
    image: "/img/card/12.png",
    title: "Cities of the world",
    description: "More than 500 movies",
  },
];

export default function SubscriptionsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current && typeof window !== "undefined") {
      const $ = (window as any).$;
      if ($ && $.fn.owlCarousel) {
        setTimeout(() => {
          if ($ && $.fn.owlCarousel && carouselRef.current) {
            $(carouselRef.current).owlCarousel({
              items: 5,
              margin: 20,
              loop: true,
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
                1200: { items: 5 },
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
            <h2 className="section__title">Subscriptions</h2>
          </div>

          <div className="col-12">
            <div className="section__carousel-wrap">
              <div
                className="section__carousel owl-carousel"
                id="subscriptions"
                ref={carouselRef}
              >
                {subscriptions.map((item, index) => (
                  <SubscriptionCard key={index} {...item} />
                ))}
              </div>

              <button
                className="section__nav section__nav--cards section__nav--prev"
                data-nav="#subscriptions"
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
                className="section__nav section__nav--cards section__nav--next"
                data-nav="#subscriptions"
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

