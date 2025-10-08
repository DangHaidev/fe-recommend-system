"use client";
import React from "react";

interface SubscriptionCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  image,
  title,
  description,
  link = "details.html",
}) => {
  return (
    <div className="card">
      <a href={link} className="card__cover">
        <img src={image} alt={title} />
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1615 8.05308C13.1615 9.79908 11.7455 11.2141 9.9995 11.2141C8.2535 11.2141 6.8385 9.79908 6.8385 8.05308C6.8385 6.30608 8.2535 4.89108 9.9995 4.89108C11.7455 4.89108 13.1615 6.30608 13.1615 8.05308Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05289C17.289 3.48888 13.806 0.750885 9.998 0.750885H10.002C6.194 0.750885 2.711 3.48888 0.75 8.05289C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <button className="card__add" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Z" />
        </svg>
      </button>

      <h3 className="card__title card__title--subs">
        <a href={link}>{title}</a>
      </h3>

      <ul className="card__list card__list--subs">
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default SubscriptionCard;