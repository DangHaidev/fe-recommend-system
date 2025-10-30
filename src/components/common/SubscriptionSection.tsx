"use client";
import React, { useEffect } from "react";
import SubscriptionCard from "./SubscriptionCard";

interface Subscription {
  image: string;
  title: string;
  description: string;
  link?: string;
}

interface SubscriptionsSectionProps {
  subscriptions: Subscription[];
}

const SubscriptionsSection: React.FC<SubscriptionsSectionProps> = ({ subscriptions }) => {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).$) {
        const $ = (window as any).$;
        $("#subscriptions").owlCarousel({
          items: 3,
          margin: 20,
          loop: true,
          nav: true,
          dots: true,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
          },
        });
      }
    }, 500);
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
              <div className="section__carousel owl-carousel" id="subscriptions">
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
};

export default SubscriptionsSection;