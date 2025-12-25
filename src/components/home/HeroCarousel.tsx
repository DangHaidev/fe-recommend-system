'use client';

import { sendRequestClient } from '@/src/utils/lib/sendrequestclient';
import { useEffect, useState } from 'react';
import Breadcrumb from '../common/BreadCrumb';
import Card from '../common/Card';

export default function HeroCarousel() {
    const PAGE_SIZE = 12;
    type MovieType = 'Free' | 'Premium';
    interface Movie {
        posterUrl: string;
        title: string;
        rating: number;
        genres: string[];
        year: string;
        type: MovieType;
        link: string;
    }

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchMovies = async (pageNumber: number) => {
        setLoading(true);

        const res = await sendRequestClient<IBackendRes<IModelPaginate<Movie>>>(
            {
                url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/tmdb/post-popular`,
                method: 'POST',
                body: {
                    current: pageNumber,
                    pageSize: PAGE_SIZE,
                },
            },
        );

        const paginate = res.data;

        setMovies((prev) =>
            pageNumber === 1 ? paginate.result : [...prev, ...paginate.result],
        );

        if (paginate.meta.current >= paginate.meta.pages) {
            setHasMore(false);
        }

        setLoading(false);
    };

    // Load lần đầu
    useEffect(() => {
        fetchMovies(1);
    }, []);

    // ===== LOAD MORE =====
    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchMovies(nextPage); // ✅ dùng page mới
    };
    // map lại dữ liệu cho phù hợp với Card
    const formattedMovies = movies.map((movie: any) => ({
        id: movie.id,
        posterUrl: 'https://image.tmdb.org/t/p/w500' + movie.poster_path, // gắn prefix ảnh
        title: movie.title,
        rating: movie.vote_average,
        genres: movie.genre_ids || [],
        year: new Date(movie.release_date).getFullYear(),
        type: 'Movie',
        link: `/detailmovie/${movie.id}`,
    }));

    return (
        <div>
            <div className="catalog catalog--page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section__title">
                                <a>Popular</a>
                            </h2>
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

                            {hasMore && (
                                <div className="row">
                                    <div className="col-12">
                                        <button
                                            className="catalog__more"
                                            onClick={handleLoadMore}
                                            disabled={loading}
                                        >
                                            {loading
                                                ? 'Loading...'
                                                : 'Load more'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
