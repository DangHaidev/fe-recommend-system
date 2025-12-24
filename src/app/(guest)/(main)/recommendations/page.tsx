'use client';
import Breadcrumb from '@/src/components/common/BreadCrumb';
import Card from '@/src/components/common/Card';
import { useEffect, useState } from 'react';
import { sendRequestClient } from '@/src/utils/lib/sendrequestclient';
import { useSession } from 'next-auth/react';

const PAGE_SIZE = 12;

export default function CategoryPage() {
    const breadcrumbItems = [
        { label: 'Home', href: '/home' },
        { label: 'Recommendations' },
    ];

    const genres = [
        { value: 'Phim Hành Động', label: 'Action' },
        { value: 'Phim Chính Kịch', label: 'Drama' },
        { value: 'Phim Hoạt Hình', label: 'Cartoon' },
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
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const { data: session, status } = useSession();

    const [isSessionLoaded, setIsSessionLoaded] = useState(false);
    const userId = session?.user.id;

    const fetchMovies = async (pageNumber: number) => {
        setLoading(true);

        const res = await sendRequestClient<IBackendRes<IModelPaginate<Movie>>>(
            {
                url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-interact/recommendation/userproflie/${userId}`,
                method: 'GET',
                queryParams: {
                    page: pageNumber,
                    page_size: PAGE_SIZE,
                    genre: selectedGenre || undefined,
                },
            },
        );

        const paginate = res.data; // ⚠️ nếu có IBackendRes
        console.log(paginate);

        setMovies((prev) =>
            pageNumber === 1 ? paginate : [...prev, ...paginate],
        );

        setLoading(false);
    };

    // ===== FILTER CHANGE =====
    useEffect(() => {
        if (status !== 'authenticated' || !userId) return;

        setPage(1);
        setHasMore(true);
        fetchMovies(1);
    }, [status, userId, selectedGenre]);

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
            <Breadcrumb title="Recommendations" items={breadcrumbItems} />
            <div className="catalog catalog--page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="catalog__nav">
                                <div className="catalog__select-wrap">
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
        </div>
    );
}
