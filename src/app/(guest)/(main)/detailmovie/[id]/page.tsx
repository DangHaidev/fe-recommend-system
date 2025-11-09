import CommentsAndReviews from '@/src/components/detail/CommentsAndReviews';
import Hero from '@/src/components/detail/Hero';
import Sidebar from '@/src/components/detail/Sidebar';
import Similar from '@/src/components/detail/Similar';
import Script from 'next/script';
import { use } from 'react';

export default async function DetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    // Gọi backend NestJS để lấy chi tiết phim
    const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + `/movies/${id}`,
        {
            // cache: "no-store", // nếu muốn luôn lấy mới
            next: { revalidate: 3600 }, // revalidate mỗi 1 tiếng
        },
    );
    console.log('>>> res', res);
    if (!res.ok) {
        return <div>Không tìm thấy phim!</div>;
    }
    const apiData = await res.json();

    // Lấy phim thật từ dữ liệu backend
    const movie = apiData?.data || '';
    console.log('>>> movie', movie);
    return (
        <>
            <Hero movie={movie} />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-8">
                            <CommentsAndReviews />
                        </div>
                        <div className="col-12 col-xl-4">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>

            <Similar />
        </>
    );
}
