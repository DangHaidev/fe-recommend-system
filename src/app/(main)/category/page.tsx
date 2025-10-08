"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/src/components/common/BreadCrumb";
import Card from "@/src/components/common/Card";
import Filter from "@/src/components/common/Filter";
import SubscriptionsSection from "@/src/components/common/SubscriptionSection";
import { useState } from "react";

export default function CategoryPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Catalog", href: "/catalog" },
    { label: "Category" },
  ];

  const genres = [
    { value: "all", label: "All Genres" },
    { value: "action", label: "Action" },
    { value: "drama", label: "Drama" },
    { value: "sci-fi", label: "Sci-Fi" },
  ];

  const years = [
    { value: "all", label: "All Years" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
  ];

  const qualities = [
    { value: "all", label: "All Qualities" },
    { value: "hd", label: "HD" },
    { value: "fullhd", label: "FullHD" },
    { value: "4k", label: "4K" },
  ];

  const subscriptions = [
    {
      image: "img/card/1.png",
      title: "Netflix",
      description: "Watch movies and series online",
      link: "/subscription/1",
    },
    {
      image: "img/card/2.png",
      title: "Disney+",
      description: "Stream your favorite Disney content",
      link: "/subscription/2",
    },
    {
      image: "img/card/3.png",
      title: "HBO Max",
      description: "Premium movies and series",
      link: "/subscription/3",
    },
    {
      image: "img/card/1.png",
      title: "Netflix",
      description: "Watch movies and series online",
      link: "/subscription/1",
    },
    {
      image: "img/card/2.png",
      title: "Disney+",
      description: "Stream your favorite Disney content",
      link: "/subscription/2",
    },
    {
      image: "img/card/3.png",
      title: "HBO Max",
      description: "Premium movies and series",
      link: "/subscription/3",
    },
  ];

  type MovieType = "Free" | "Premium";
  interface Movie {
    image: string;
    title: string;
    rating: number;
    genres: string[];
    year: string;
    type: MovieType;
    link: string;
  }

  const movieData: Movie[] = [
    {
      image: "img/card/18.png",
      title: "The Dustwalker",
      rating: 9.3,
      genres: ["Thriller"],
      year: "2019",
      type: "Free",
      link: "/details/1",
    },
    {
      image: "img/card/2.png",
      title: "Action Movie",
      rating: 8.5,
      genres: ["Action"],
      year: "2021",
      type: "Premium",
      link: "/details/2",
    },
    {
      image: "img/card/1.png",
      title: "Sci-Fi Epic",
      rating: 8.9,
      genres: ["Sci-Fi"],
      year: "2023",
      type: "Free",
      link: "/details/3",
    },
    {
      image: "img/card/2.png",
      title: "Action Movie",
      rating: 8.5,
      genres: ["Action"],
      year: "2021",
      type: "Premium",
      link: "/details/2",
    },
    {
      image: "img/card/1.png",
      title: "Sci-Fi Epic",
      rating: 8.9,
      genres: ["Sci-Fi"],
      year: "2023",
      type: "Free",
      link: "/details/3",
    },
    {
      image: "img/card/2.png",
      title: "Action Movie",
      rating: 8.5,
      genres: ["Action"],
      year: "2021",
      type: "Premium",
      link: "/details/2",
    },
    {
      image: "img/card/1.png",
      title: "Sci-Fi Epic",
      rating: 8.9,
      genres: ["Sci-Fi"],
      year: "2023",
      type: "Free",
      link: "/details/3",
    },
    {
      image: "img/card/2.png",
      title: "Action Movie",
      rating: 8.5,
      genres: ["Action"],
      year: "2021",
      type: "Premium",
      link: "/details/2",
    },
    {
      image: "img/card/1.png",
      title: "Sci-Fi Epic",
      rating: 8.9,
      genres: ["Sci-Fi"],
      year: "2023",
      type: "Free",
      link: "/details/3",
    },
    {
      image: "img/card/2.png",
      title: "Action Movie",
      rating: 8.5,
      genres: ["Action"],
      year: "2021",
      type: "Premium",
      link: "/details/2",
    },
    {
      image: "img/card/1.png",
      title: "Sci-Fi Epic",
      rating: 8.9,
      genres: ["Sci-Fi"],
      year: "2023",
      type: "Free",
      link: "/details/3",
    },
     {
      image: "img/card/2.png",
      title: "Action Movie",
      rating: 8.5,
      genres: ["Action"],
      year: "2021",
      type: "Premium",
      link: "/details/2",
    },
    {
      image: "img/card/1.png",
      title: "Sci-Fi Epic",
      rating: 8.9,
      genres: ["Sci-Fi"],
      year: "2023",
      type: "Free",
      link: "/details/3",
    },
    {
      image: "img/card/2.png",
      title: "Action Movie",
      rating: 8.5,
      genres: ["Action"],
      year: "2021",
      type: "Premium",
      link: "/details/2",
    },
    {
      image: "img/card/1.png",
      title: "Sci-Fi Epic",
      rating: 8.9,
      genres: ["Sci-Fi"],
      year: "2023",
      type: "Free",
      link: "/details/3",
    },
  ];
  const [selectedGenre, setGenre] = useState("all");
  const [selectedYear, setYear] = useState("all");
  const [selectedGrade, setGrade] = useState("featured");
  const [selectedQuality, setQuality] = useState("all");

  // lọc dữ liệu theo filter
  const filteredData = movieData.filter((movie) => {
    const matchGenre =
      selectedGenre === "all" ||
      movie.genres.some((g) => g.toLowerCase() === selectedGenre.toLowerCase());
    const matchYear = selectedYear === "all" || movie.year === selectedYear;
    const matchQuality =
      selectedQuality === "all" ||
      movie.type.toLowerCase() === selectedQuality.toLowerCase();
    return matchGenre && matchYear && matchQuality;
  });

  return (
    <div>
      <Breadcrumb title="Category" items={breadcrumbItems} />
      <div className="catalog catalog--page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Filter
                genres={genres}
                years={years}
                qualities={qualities}
                selectedGenre={selectedGenre}
                selectedYear={selectedYear}
                selectedGrade={selectedGrade}
                selectedQuality={selectedQuality}
                onGenreChange={setGenre}
                onYearChange={setYear}
                onGradeChange={setGrade}
                onQualityChange={setQuality}
              />

              <div className="row row--grid">
                {filteredData.map((movie, idx) => (
                  <div className="col-6 col-sm-4 col-lg-3 col-xl-2" key={idx}>
                    <Card {...movie} />
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="col-12">
                  <button className="catalog__more" type="button">
                    Load more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscriptionsSection subscriptions={subscriptions} />
    </div>
  );
}