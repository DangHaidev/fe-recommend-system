 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface HeroMovie {
  id: string;
  image: string;
  title: string;
  type: string;
  genre: string;
  year: string;
  rating: string;
  link: string;
}

const heroMovies: HeroMovie[] = [
  {
    id: "1",
    image: "/img/home/1.jpg",
    title: "Money Plane",
    type: "Free",
    genre: "Action",
    year: "2021",
    rating: "9.1",
    link: "/detail",
  },
  {
    id: "2",
    image: "/img/home/2.jpg",
    title: "The Art of Political",
    type: "Free",
    genre: "Documentary",
    year: "2019",
    rating: "8.3",
    link: "/detail",
  },
  {
    id: "3",
    image: "/img/home/3.jpg",
    title: "Antebellum",
    type: "Free",
    genre: "Horror",
    year: "2021",
    rating: "7.9",
    link: "/detail",
  },
  {
    id: "4",
    image: "/img/home/4.jpg",
    title: "Kids Next Door",
    type: "Free",
    genre: "Documentary",
    year: "2017",
    rating: "8.4",
    link: "/detail",
  },
  {
    id: "5",
    image: "/img/home/5.jpg",
    title: "The Empty Man",
    type: "Free",
    genre: "Horror",
    year: "2020",
    rating: "8.4",
    link: "/detail",
  },
  {
    id: "6",
    image: "/img/home/6.jpg",
    title: "Jungleland",
    type: "Free",
    genre: "Documentary",
    year: "2020",
    rating: "9.1",
    link: "/detail",
  },
  {
    id: "7",
    image: "/img/home/7.jpg",
    title: "Bad Impulse",
    type: "Free",
    genre: "History",
    year: "2017",
    rating: "8.8",
    link: "/detail",
  },
  {
    id: "8",
    image: "/img/home/8.jpg",
    title: "Tenet",
    type: "Free",
    genre: "Action",
    year: "2021",
    rating: "7.6",
    link: "/detail",
  },
];

export default function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current && typeof window !== "undefined") {
      // Initialize Owl Carousel
      const $ = (window as any).$;
      if ($ && $.fn.owlCarousel) {
        $(carouselRef.current).owlCarousel({
          items: 1,
          loop: true,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
        });
      }
    }
  }, []);

  return (
    <div className="home home--static">
      <div className="home__carousel owl-carousel" id="flixtv-hero" ref={carouselRef}>
        {heroMovies.map((movie) => (
          <div className="home__card" key={movie.id}>
            <Link href={movie.link}>
              <Image
                src={movie.image}
                alt={movie.title}
                width={1920}
                height={1080}
                priority={movie.id === "1"}
                className="home__card-image"
              />
            </Link>
            <div>
              <h2>{movie.title}</h2>
              <ul>
                <li>{movie.type}</li>
                <li>{movie.genre}</li>
                <li>{movie.year}</li>
              </ul>
            </div>
            <button className="home__add" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z" />
              </svg>
            </button>
            <span className="home__rating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
              </svg>{" "}
              {movie.rating}
            </span>
          </div>
        ))}
      </div>

      <button
        className="home__nav home__nav--prev"
        data-nav="#flixtv-hero"
        type="button"
      ></button>
      <button
        className="home__nav home__nav--next"
        data-nav="#flixtv-hero"
        type="button"
      ></button>
    </div>
  );
}
