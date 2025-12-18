'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../common/Card';
import { useEffect, useState } from 'react';
import { sendRequestClient } from '@/src/utils/lib/sendrequestclient';

interface Movie {
    image: string;
    title: string;
    rating: number;
    genres: string[];
    year: string;
    type: MovieType;
    link: string;
}
type MovieType = 'Free' | 'Premium';

const movieData: Movie[] = [
    {
        image: 'img/card/18.png',
        title: 'The Dustwalker',
        rating: 9.3,
        genres: ['Thriller'],
        year: '2019',
        type: 'Free',
        link: '/details/1',
    },
    {
        image: 'img/card/2.png',
        title: 'Action Movie',
        rating: 8.5,
        genres: ['Action'],
        year: '2021',
        type: 'Premium',
        link: '/details/2',
    },
    {
        image: 'img/card/1.png',
        title: 'Sci-Fi Epic',
        rating: 8.9,
        genres: ['Sci-Fi'],
        year: '2023',
        type: 'Free',
        link: '/details/3',
    },
    {
        image: 'img/card/2.png',
        title: 'Action Movie',
        rating: 8.5,
        genres: ['Action'],
        year: '2021',
        type: 'Premium',
        link: '/details/2',
    },
    {
        image: 'img/card/1.png',
        title: 'Sci-Fi Epic',
        rating: 8.9,
        genres: ['Sci-Fi'],
        year: '2023',
        type: 'Free',
        link: '/details/3',
    },
    {
        image: 'img/card/2.png',
        title: 'Action Movie',
        rating: 8.5,
        genres: ['Action'],
        year: '2021',
        type: 'Premium',
        link: '/details/2',
    },
    {
        image: 'img/card/1.png',
        title: 'Sci-Fi Epic',
        rating: 8.9,
        genres: ['Sci-Fi'],
        year: '2023',
        type: 'Free',
        link: '/details/3',
    },
    {
        image: 'img/card/2.png',
        title: 'Action Movie',
        rating: 8.5,
        genres: ['Action'],
        year: '2021',
        type: 'Premium',
        link: '/details/2',
    },
    {
        image: 'img/card/1.png',
        title: 'Sci-Fi Epic',
        rating: 8.9,
        genres: ['Sci-Fi'],
        year: '2023',
        type: 'Free',
        link: '/details/3',
    },
    {
        image: 'img/card/2.png',
        title: 'Action Movie',
        rating: 8.5,
        genres: ['Action'],
        year: '2021',
        type: 'Premium',
        link: '/details/2',
    },
    {
        image: 'img/card/1.png',
        title: 'Sci-Fi Epic',
        rating: 8.9,
        genres: ['Sci-Fi'],
        year: '2023',
        type: 'Free',
        link: '/details/3',
    },
    {
        image: 'img/card/2.png',
        title: 'Action Movie',
        rating: 8.5,
        genres: ['Action'],
        year: '2021',
        type: 'Premium',
        link: '/details/2',
    },
    {
        image: 'img/card/1.png',
        title: 'Sci-Fi Epic',
        rating: 8.9,
        genres: ['Sci-Fi'],
        year: '2023',
        type: 'Free',
        link: '/details/3',
    },
    {
        image: 'img/card/2.png',
        title: 'Action Movie',
        rating: 8.5,
        genres: ['Action'],
        year: '2021',
        type: 'Premium',
        link: '/details/2',
    },
    {
        image: 'img/card/1.png',
        title: 'Sci-Fi Epic',
        rating: 8.9,
        genres: ['Sci-Fi'],
        year: '2023',
        type: 'Free',
        link: '/details/3',
    },
];

export default function Similar({ movieId }: any) {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const res = await sendRequestClient<IBackendRes<any>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-interact/recommendation/${movieId}`,
            method: 'GET',
            queryParams: {
                top_n: 12,
            },
        });

        if (res.statusCode === 200) {
            setMovies(res.data);
        }
    };

    // Load lần đầu
    useEffect(() => {
        fetchMovies();
    }, []);

    // map lại dữ liệu cho phù hợp với Card
    const formattedMovies = movies.map((movie: any) => ({
        id: movie.id,
        posterUrl: movie.posterUrl, // gắn prefix ảnh
        title: movie.title,
        rating: movie.vote_average,
        genres: movie.genres || [],
        year: new Date(movie.releaseDate).getFullYear(),
        type: 'Movie',
        link: `/detailmovie/${movie.tmdbId}`,
    }));

    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section__title">
                            <a href="category.html">
                                Similar movies and TV series
                            </a>
                        </h2>
                    </div>
                    <div className="col-12">
                        <div className="row row--grid">
                            {formattedMovies.map((movie) => (
                                <div
                                    className="col-6 col-sm-4 col-lg-3 col-xl-2"
                                    key={movie.id}
                                >
                                    <Card {...movie} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
