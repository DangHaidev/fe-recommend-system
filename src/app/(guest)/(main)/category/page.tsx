'use client';

import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/src/components/common/BreadCrumb';
import Card from '@/src/components/common/Card';
import Filter from '@/src/components/common/Filter';
import SubscriptionsSection from '@/src/components/common/SubscriptionSection';
import { useEffect, useState } from 'react';
import { sendRequestClient } from '@/src/utils/lib/sendrequestclient';
import { post } from 'jquery';

const PAGE_SIZE = 12;

export default function CategoryPage() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Catalog', href: '/catalog' },
        { label: 'Category' },
    ];

    const genres = [
        { value: 'Phim Hành Động', label: 'Action' },
        { value: 'Phim Chính Kịch', label: 'Drama' },
        { value: 'Phim Hoạt Hình', label: 'Cartoon' },
    ];

    const years = [
        { value: '', label: 'All Years' },
        { value: '2025', label: '2025' },
        { value: '2024', label: '2024' },
        { value: '2023', label: '2023' },
    ];

    const qualities = [
        { value: 'all', label: 'All Qualities' },
        { value: 'hd', label: 'HD' },
        { value: 'fullhd', label: 'FullHD' },
        { value: '4k', label: '4K' },
    ];

    const subscriptions = [
        {
            image: 'img/card/1.png',
            title: 'Netflix',
            description: 'Watch movies and series online',
            link: '/subscription/1',
        },
        {
            image: 'img/card/2.png',
            title: 'Disney+',
            description: 'Stream your favorite Disney content',
            link: '/subscription/2',
        },
        {
            image: 'img/card/3.png',
            title: 'HBO Max',
            description: 'Premium movies and series',
            link: '/subscription/3',
        },
        {
            image: 'img/card/1.png',
            title: 'Netflix',
            description: 'Watch movies and series online',
            link: '/subscription/1',
        },
        {
            image: 'img/card/2.png',
            title: 'Disney+',
            description: 'Stream your favorite Disney content',
            link: '/subscription/2',
        },
        {
            image: 'img/card/3.png',
            title: 'HBO Max',
            description: 'Premium movies and series',
            link: '/subscription/3',
        },
    ];

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

    const [selectedGenre, setGenre] = useState('');
    const [selectedYear, setYear] = useState('');
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchMovies = async (pageNumber: number) => {
        setLoading(true);

        const res = await sendRequestClient<IBackendRes<IModelPaginate<Movie>>>(
            {
                url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/movies`,
                method: 'POST',
                body: {
                    current: pageNumber, // ✅ dùng param
                    pageSize: PAGE_SIZE,
                    genre: selectedGenre || undefined,
                    year: selectedYear || undefined,
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

    // ===== FILTER CHANGE =====
    useEffect(() => {
        console.log(selectedGenre, selectedYear);
        setPage(1);
        setHasMore(true);
        fetchMovies(1);
    }, [selectedGenre, selectedYear]);

    // ===== LOAD MORE =====
    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchMovies(nextPage); // ✅ dùng page mới
    };
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
        <div>
            <Breadcrumb title="Category" items={breadcrumbItems} />
            <div className="catalog catalog--page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="catalog__nav">
                                <div className="catalog__select-wrap gap-3">
                                    <select
                                        className="text-white"
                                        name="genres"
                                        value={selectedGenre}
                                        onChange={(e) => {
                                            console.log(
                                                'Selected:',
                                                e.target.value,
                                            );
                                            setGenre(e.target.value);
                                        }}
                                    >
                                        <option className="text-black" value="">
                                            All genres
                                        </option>
                                        {/* ✅ BẮT BUỘC */}
                                        {genres.map((g) => (
                                            <option
                                                className="text-black"
                                                key={g.value}
                                                value={g.value}
                                            >
                                                {g.label}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        className="text-white"
                                        name="years"
                                        value={selectedYear}
                                        onChange={(e) => {
                                            setYear(e.target.value);
                                        }}
                                    >
                                        {years.map((y, idx) => (
                                            <option
                                                className="text-black"
                                                key={idx}
                                                value={y.value}
                                            >
                                                {y.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

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
            <SubscriptionsSection subscriptions={subscriptions} />
        </div>
    );
}
