import Card from '@/src/components/common/Card';
import { sendRequest } from '@/src/utils/api';
import { useEffect, useState } from 'react';

export default function FavoritesGrid({ userId, access_token }) {
    type MovieType = 'Free' | 'Premium';
    interface Movie {
        image: string;
        title: string;
        rating: number;
        genres: string[];
        year: string;
        type: MovieType;
        link: string;
    }
    // const favorites: Movie[] = [
    //     {
    //         image: 'img/card/18.png',
    //         title: 'The Dustwalker',
    //         rating: 9.3,
    //         genres: ['Thriller'],
    //         year: '2019',
    //         type: 'Free',
    //         link: '/details/1',
    //     },
    //     {
    //         image: 'img/card/2.png',
    //         title: 'Action Movie',
    //         rating: 8.5,
    //         genres: ['Action'],
    //         year: '2021',
    //         type: 'Premium',
    //         link: '/details/2',
    //     },
    //     {
    //         image: 'img/card/1.png',
    //         title: 'Sci-Fi Epic',
    //         rating: 8.9,
    //         genres: ['Sci-Fi'],
    //         year: '2023',
    //         type: 'Free',
    //         link: '/details/3',
    //     },
    //     {
    //         image: 'img/card/2.png',
    //         title: 'Action Movie',
    //         rating: 8.5,
    //         genres: ['Action'],
    //         year: '2021',
    //         type: 'Premium',
    //         link: '/details/2',
    //     },
    //     {
    //         image: 'img/card/1.png',
    //         title: 'Sci-Fi Epic',
    //         rating: 8.9,
    //         genres: ['Sci-Fi'],
    //         year: '2023',
    //         type: 'Free',
    //         link: '/details/3',
    //     },
    //     {
    //         image: 'img/card/2.png',
    //         title: 'Action Movie',
    //         rating: 8.5,
    //         genres: ['Action'],
    //         year: '2021',
    //         type: 'Premium',
    //         link: '/details/2',
    //     },
    //     {
    //         image: 'img/card/1.png',
    //         title: 'Sci-Fi Epic',
    //         rating: 8.9,
    //         genres: ['Sci-Fi'],
    //         year: '2023',
    //         type: 'Free',
    //         link: '/details/3',
    //     },
    //     {
    //         image: 'img/card/2.png',
    //         title: 'Action Movie',
    //         rating: 8.5,
    //         genres: ['Action'],
    //         year: '2021',
    //         type: 'Premium',
    //         link: '/details/2',
    //     },
    //     {
    //         image: 'img/card/1.png',
    //         title: 'Sci-Fi Epic',
    //         rating: 8.9,
    //         genres: ['Sci-Fi'],
    //         year: '2023',
    //         type: 'Free',
    //         link: '/details/3',
    //     },
    //     {
    //         image: 'img/card/2.png',
    //         title: 'Action Movie',
    //         rating: 8.5,
    //         genres: ['Action'],
    //         year: '2021',
    //         type: 'Premium',
    //         link: '/details/2',
    //     },
    //     {
    //         image: 'img/card/1.png',
    //         title: 'Sci-Fi Epic',
    //         rating: 8.9,
    //         genres: ['Sci-Fi'],
    //         year: '2023',
    //         type: 'Free',
    //         link: '/details/3',
    //     },
    //     {
    //         image: 'img/card/2.png',
    //         title: 'Action Movie',
    //         rating: 8.5,
    //         genres: ['Action'],
    //         year: '2021',
    //         type: 'Premium',
    //         link: '/details/2',
    //     },
    //     {
    //         image: 'img/card/1.png',
    //         title: 'Sci-Fi Epic',
    //         rating: 8.9,
    //         genres: ['Sci-Fi'],
    //         year: '2023',
    //         type: 'Free',
    //         link: '/details/3',
    //     },
    //     {
    //         image: 'img/card/2.png',
    //         title: 'Action Movie',
    //         rating: 8.5,
    //         genres: ['Action'],
    //         year: '2021',
    //         type: 'Premium',
    //         link: '/details/2',
    //     },
    //     {
    //         image: 'img/card/1.png',
    //         title: 'Sci-Fi Epic',
    //         rating: 8.9,
    //         genres: ['Sci-Fi'],
    //         year: '2023',
    //         type: 'Free',
    //         link: '/details/3',
    //     },
    // ];

    const [favorites, setFavorites] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            console.log('userId', userId);
            console.log('access_token', access_token);
            const response = await sendRequest<Movie[]>({
                url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-interact/${userId}`,
                method: 'GET',
                accessToken: access_token,
            });

            setFavorites(response.data);
            setLoading(false);
            console.log(response.data);
        }

        loadData();
    }, [userId]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="space-y-8">
            {/* Favorites Grid */}
            <div className="row row--grid">
                {favorites.map((movie, idx) => (
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2" key={idx}>
                        <Card {...movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}
