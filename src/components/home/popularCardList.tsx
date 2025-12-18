import React from 'react';
import Card from '../common/Card';

interface Movie {
    id: number;
    image: string;
    title: string;
    rating: number;
    genres: string[];
    year: string;
    type: 'Free' | 'Premium';
    link: string;
}

interface CardListProps {
    movies: Movie[];
}

const CardList: React.FC<CardListProps> = ({ movies }) => {
    return (
        <div className="section__carousel owl-carousel" id="popular">
            {movies.map((movie) => (
                <Card
                    key={movie.id}
                    posterUrl={movie.image}
                    title={movie.title}
                    rating={movie.rating}
                    genres={movie.genres}
                    year={movie.year}
                    type={movie.type}
                    link={movie.link}
                />
            ))}
        </div>
    );
};

export default CardList;
