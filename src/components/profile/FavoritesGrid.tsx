export default function FavoritesGrid() {
  const favorites = [
    {
      id: 1,
      title: 'The Good Lord Bird',
      category: 'Action',
      year: '2019',
      rating: 8.3,
      image: '/api/placeholder/300/450'
    },
    {
      id: 2,
      title: 'The Dictator',
      category: 'Comedy',
      year: '2012',
      rating: 8.1,
      image: '/api/placeholder/300/450'
    },
    {
      id: 3,
      title: '12 Years a Slave',
      category: 'History',
      year: '2013',
      rating: 7.9,
      image: '/api/placeholder/300/450'
    },
    {
      id: 4,
      title: 'Get On Up',
      category: 'Biography',
      year: '2014',
      rating: 8.8,
      image: '/api/placeholder/300/450'
    },
    {
      id: 5,
      title: 'Interview With the Vampire',
      category: 'Horror',
      year: '1994',
      rating: 7.1,
      image: '/api/placeholder/300/450'
    },
    {
      id: 6,
      title: 'Pawn Sacrifice',
      category: 'History',
      year: '2015',
      rating: 8.6,
      image: '/api/placeholder/300/450'
    },
    {
      id: 7,
      title: 'Operation Finale',
      category: 'Drama',
      year: '2018',
      rating: 7.0,
      image: '/api/placeholder/300/450'
    },
    {
      id: 8,
      title: 'Denial',
      category: 'Drama',
      year: '2016',
      rating: 7.5,
      image: '/api/placeholder/300/450'
    },
    {
      id: 9,
      title: 'Luce',
      category: 'Drama',
      year: '2019',
      rating: 7.2,
      image: '/api/placeholder/300/450'
    },
    {
      id: 10,
      title: 'Fighting with My Family',
      category: 'Biography',
      year: '2019',
      rating: 8.9,
      image: '/api/placeholder/300/450'
    },
    {
      id: 11,
      title: 'Footloose',
      category: 'Drama',
      year: '2011',
      rating: 7.2,
      image: '/api/placeholder/300/450'
    },
    {
      id: 12,
      title: 'Swimming for Gold',
      category: 'Drama',
      year: '2020',
      rating: 7.6,
      image: '/api/placeholder/300/450'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Favorites Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {favorites.map((item) => (
          <div key={item.id} className="group relative bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="aspect-[2/3] bg-gradient-to-br from-purple-500 to-blue-500 relative">
              {/* Placeholder for movie poster */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                </svg>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                  </svg>
                </button>
              </div>

              {/* Rating badge */}
              <div className="absolute top-2 right-2 bg-black bg-opacity-75 rounded px-2 py-1 flex items-center">
                <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/>
                </svg>
                <span className="text-white text-xs font-medium">{item.rating}</span>
              </div>

              {/* Favorite button */}
              <button className="absolute top-2 left-2 w-8 h-8 bg-black bg-opacity-75 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.5,5.5,0,0,1,7.5,3c1.74,0,3.41.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3A5.5,5.5,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35Z"/>
                </svg>
              </button>
            </div>
            
            <div className="p-3">
              <h3 className="font-semibold text-sm text-white mb-1 line-clamp-2">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Free</span>
                <span>{item.category}</span>
                <span>{item.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-sm">12 from 144</span>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41,7.41L14,6l-6,6,6,6,1.41-1.41L10.83,12Z"/>
            </svg>
          </button>
          <button className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">1</button>
          <button className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">2</button>
          <button className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">3</button>
          <button className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">4</button>
          <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59,16.59L10,18l6-6-6-6L8.59,7.41,13.17,12Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
