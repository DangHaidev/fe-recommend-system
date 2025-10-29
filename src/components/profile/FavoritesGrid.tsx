import Card from '@/src/components/common/Card';

export default function FavoritesGrid() {
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
    const favorites: Movie[] = [
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

            {/* Pagination */}
            <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">12 from 144</span>
                <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M15.41,7.41L14,6l-6,6,6,6,1.41-1.41L10.83,12Z" />
                        </svg>
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
                        1
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">
                        2
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">
                        3
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">
                        4
                    </button>
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8.59,16.59L10,18l6-6-6-6L8.59,7.41,13.17,12Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
