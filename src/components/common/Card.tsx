import React from 'react';

interface CardProps {
    posterUrl: string;
    title: string;
    rating: number;
    genres: string[];
    year: string;
    type: 'Free' | 'Premium';
    link: string;
}

const Card: React.FC<CardProps> = ({
    posterUrl,
    title,
    rating,
    genres,
    year,
    type,
    link,
}) => {
    return (
        <div className="card">
            <a href={link} className="card__cover">
                <img src={posterUrl} alt={title} />
                {/* nút play */}
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                        d="M11 1C16.52 1 21 5.48 21 11C21 16.52 16.52 21 11 21C5.48 21 1 16.52 1 11C1 5.48 5.48 1 11 1Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.05 11.47C13.32 12.25 11.34 13.58 10.32 14.01C10.16 14.08 9.75 14.22 9.66 14.22C9.47 14.23 9.29 14.12 9.20 13.95C9.17 13.89 9.07 13.46 9.03 13.26C8.94 12.68 8.89 11.77 8.89 10.86C8.89 9.90 8.94 8.95 9.05 8.38C9.08 8.22 9.16 7.86 9.18 7.80C9.23 7.70 9.31 7.61 9.41 7.56C9.48 7.52 9.57 7.49 9.66 7.50C9.75 7.50 10.11 7.63 10.23 7.68C11.21 8.05 13.28 9.43 14.04 10.24C14.11 10.32 14.30 10.51 14.33 10.55C14.40 10.64 14.43 10.75 14.43 10.86C14.43 10.96 14.40 11.07 14.34 11.15C14.30 11.20 14.11 11.40 14.05 11.47Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </a>

            {/* bookmark */}
            <button className="card__add" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Z" />
                </svg>
            </button>

            {/* rating */}
            <span className="card__rating">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Z" />
                </svg>{' '}
                {rating}
            </span>

            {/* title */}
            <h3 className="card__title">
                <a href={link}>{title}</a>
            </h3>

            {/* list */}
            <ul className="card__list">
                <li>{type}</li>
                <li>{genres.at(0)}</li>
                {/* {genres.map((g, idx) => (
                    <li key={idx}>{g}</li>
                ))} */}
                <li>{year}</li>
            </ul>
        </div>
    );
};

export default Card;
