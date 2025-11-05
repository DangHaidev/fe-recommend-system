"use client";

import { useState } from "react";
import Filter from "../common/Filter";
import Card from "../common/Card";

interface Movie {
  id: string;
  image: string;
  title: string;
  rating: string;
  type: "Free" | "Premium";
  genre: string;
  year: string;
}

const movies: Movie[] = [
  {
    id: "1",
    image: "/img/card/1.png",
    title: "The Good Lord Bird",
    rating: "8.3",
    type: "Free",
    genre: "Action",
    year: "2019",
  },
  {
    id: "2",
    image: "/img/card/2.png",
    title: "The Dictator",
    rating: "8.1",
    type: "Free",
    genre: "Comedy",
    year: "2012",
  },
  {
    id: "3",
    image: "/img/card/3.png",
    title: "12 Years a Slave",
    rating: "7.9",
    type: "Free",
    genre: "History",
    year: "2013",
  },
  {
    id: "4",
    image: "/img/card/4.png",
    title: "Get On Up",
    rating: "8.8",
    type: "Free",
    genre: "Biography",
    year: "2014",
  },
  {
    id: "5",
    image: "/img/card/5.png",
    title: "Interview With the Vampire",
    rating: "7.1",
    type: "Free",
    genre: "Horror",
    year: "1994",
  },
  {
    id: "6",
    image: "/img/card/6.png",
    title: "Pawn Sacrifice",
    rating: "8.6",
    type: "Free",
    genre: "History",
    year: "2015",
  },
  {
    id: "7",
    image: "/img/card/7.png",
    title: "Operation Finale",
    rating: "7.0",
    type: "Free",
    genre: "Drama",
    year: "2018",
  },
  {
    id: "8",
    image: "/img/card/8.png",
    title: "Denial",
    rating: "7.5",
    type: "Free",
    genre: "Drama",
    year: "2016",
  },
  {
    id: "9",
    image: "/img/card/9.png",
    title: "Luce",
    rating: "7.2",
    type: "Free",
    genre: "Drama",
    year: "2019",
  },
  {
    id: "10",
    image: "/img/card/10.png",
    title: "Fighting with My Family",
    rating: "8.9",
    type: "Free",
    genre: "Biography",
    year: "2019",
  },
  {
    id: "11",
    image: "/img/card/11.png",
    title: "Footloose",
    rating: "7.2",
    type: "Free",
    genre: "Drama",
    year: "2011",
  },
  {
    id: "12",
    image: "/img/card/12.png",
    title: "Swimming for Gold",
    rating: "7.6",
    type: "Free",
    genre: "Drama",
    year: "2020",
  },
  {
    id: "13",
    image: "/img/card/13.png",
    title: "Infamous",
    rating: "7.1",
    type: "Free",
    genre: "Thriller",
    year: "2020",
  },
  {
    id: "14",
    image: "/img/card/14.png",
    title: "Above the Shadows",
    rating: "7.2",
    type: "Free",
    genre: "Science Fiction",
    year: "2019",
  },
  {
    id: "15",
    image: "/img/card/15.png",
    title: "After Darkness",
    rating: "9.1",
    type: "Free",
    genre: "Science Fiction",
    year: "2018",
  },
  {
    id: "16",
    image: "/img/card/16.png",
    title: "I Still See You",
    rating: "9.0",
    type: "Free",
    genre: "Horror",
    year: "2018",
  },
  {
    id: "17",
    image: "/img/card/17.png",
    title: "The Midnight Man",
    rating: "8.5",
    type: "Free",
    genre: "Thriller",
    year: "2018",
  },
  {
    id: "18",
    image: "/img/card/18.png",
    title: "The Dustwalker",
    rating: "9.3",
    type: "Free",
    genre: "Thriller",
    year: "2019",
  },
];

const genres = [
  { value: "All genres", label: "All genres" },
  { value: "Action/Adventure", label: "Action/Adventure" },
  { value: "Animals", label: "Animals" },
  { value: "Animation", label: "Animation" },
  { value: "Biography", label: "Biography" },
  { value: "Comedy", label: "Comedy" },
  { value: "Cooking", label: "Cooking" },
  { value: "Dance", label: "Dance" },
  { value: "Documentary", label: "Documentary" },
  { value: "Drama", label: "Drama" },
  { value: "Education", label: "Education" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Family", label: "Family" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "History", label: "History" },
  { value: "Horror", label: "Horror" },
  { value: "Independent", label: "Independent" },
  { value: "International", label: "International" },
  { value: "Kids & Family", label: "Kids & Family" },
  { value: "Medical", label: "Medical" },
  { value: "Military/War", label: "Military/War" },
  { value: "Music", label: "Music" },
  { value: "Mystery/Crime", label: "Mystery/Crime" },
  { value: "Nature", label: "Nature" },
  { value: "Paranormal", label: "Paranormal" },
  { value: "Politics", label: "Politics" },
  { value: "Racing", label: "Racing" },
  { value: "Romance", label: "Romance" },
  { value: "Sci-Fi/Horror", label: "Sci-Fi/Horror" },
  { value: "Science", label: "Science" },
  { value: "Science Fiction", label: "Science Fiction" },
  { value: "Science/Nature", label: "Science/Nature" },
  { value: "Travel", label: "Travel" },
  { value: "Western", label: "Western" },
];

const years = [
  { value: "All the years", label: "All the years" },
  { value: "1", label: "'50s" },
  { value: "2", label: "'60s" },
  { value: "3", label: "'70s" },
  { value: "4", label: "'80s" },
  { value: "5", label: "'90s" },
  { value: "6", label: "2000-10" },
  { value: "7", label: "2010-20" },
  { value: "8", label: "2021" },
];

export default function CatalogSection() {
  const [selectedGenre, setSelectedGenre] = useState("All genres");
  const [selectedYear, setSelectedYear] = useState("All the years");
  const [selectedGrade, setSelectedGrade] = useState("featured");
  const [displayedMovies, setDisplayedMovies] = useState(movies.slice(0, 18));
  const [showMore, setShowMore] = useState(false);

  const handleLoadMore = () => {
    setShowMore(true);
    setDisplayedMovies(movies);
  };

  return (
    <div className="catalog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Filter
              genres={genres}
              years={years}
              qualities={[]}
              selectedGenre={selectedGenre}
              selectedYear={selectedYear}
              selectedGrade={selectedGrade}
              selectedQuality=""
              onGenreChange={setSelectedGenre}
              onYearChange={setSelectedYear}
              onGradeChange={setSelectedGrade}
              onQualityChange={() => {}}
            />

            <div className="row row--grid">
              {displayedMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="col-6 col-sm-4 col-lg-3 col-xl-2"
                >
                  <Card
                    image={movie.image}
                    title={movie.title}
                    rating={parseFloat(movie.rating)}
                    genres={[movie.genre]}
                    year={movie.year}
                    type={movie.type}
                    link={`/detail?id=${movie.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {!showMore && (
          <div className="row">
            <div className="col-12">
              <button
                className="catalog__more"
                type="button"
                onClick={handleLoadMore}
              >
                Load more
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
