import CardList from './popularCardList';

export default async function Popular() {
    // ⚙️ Lấy dữ liệu từ backend
    const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + '/tmdb/popular',
        {
            // SSR fetch (Next.js tự xử lý)
            // cache: 'no-store', // đảm bảo luôn fetch mới mỗi lần
            next: { revalidate: 3600 },
        },
    );
    const apiData = await res.json();

    // Lấy mảng phim thật từ dữ liệu backend
    const movies = apiData?.data?.results || [];

    // map lại dữ liệu cho phù hợp với Card
    const formattedMovies = movies.map((movie: any) => ({
        id: movie.id,
        image: 'https://image.tmdb.org/t/p/w500' + movie.poster_path, // gắn prefix ảnh
        title: movie.title,
        rating: movie.vote_average,
        genres: movie.genre_ids || [],
        year: new Date(movie.release_date).getFullYear(),
        type: 'Movie',
        link: `/detailmovie/${movie.id}`,
    }));
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section__title">
                                <a href="category.html">Popular</a>
                            </h2>
                        </div>

                        <div className="col-12">
                            <div className="section__carousel-wrap">
                                {/* popular cards here */}
                                <CardList movies={formattedMovies} />

                                <button
                                    className="section__nav section__nav--cards section__nav--prev"
                                    data-nav="#popular"
                                    type="button"
                                >
                                    <svg
                                        width="17"
                                        height="15"
                                        viewBox="0 0 17 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.25 7.72559L16.25 7.72559"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="section__nav section__nav--cards section__nav--next"
                                    data-nav="#popular"
                                    type="button"
                                >
                                    <svg
                                        width="17"
                                        height="15"
                                        viewBox="0 0 17 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.75 7.72559L0.75 7.72559"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
