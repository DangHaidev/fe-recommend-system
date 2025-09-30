export default function ProfileStats() {
  const stats = [
    {
      title: 'My balance',
      value: '$90.99',
      subtitle: 'top up',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2"/>
          <circle cx="12" cy="10" r="2" strokeWidth="2"/>
          <path d="M8 16h8" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Premium plan',
      value: '$34.99',
      subtitle: '/month',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/>
          <path d="M8 8h8" strokeWidth="2"/>
          <path d="M8 12h8" strokeWidth="2"/>
          <path d="M8 16h4" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Your comments',
      value: '2 573',
      subtitle: '',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="2"/>
          <path d="M8 9h8" strokeWidth="2"/>
          <path d="M8 13h6" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Your reviews',
      value: '1021',
      subtitle: '',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="text-sm text-white font-medium font-sans">
                {stat.title}
                {stat.subtitle && stat.subtitle === 'top up' && (
                  <a href="#" className="text-blue-400 hover:text-blue-300 ml-2 text-xs font-sans">
                    {stat.subtitle}
                  </a>
                )}
              </span>
            </div>
            <div className="text-blue-400">
              {stat.icon}
            </div>
          </div>
          <div className="flex items-baseline">
            <p className="text-1xl font-300 text-gray-300 font-sans">
              {stat.value}
            </p>
            {stat.subtitle && stat.subtitle !== 'top up' && (
              <span className="text-sm text-gray-400 font-normal ml-1 font-sans">{stat.subtitle}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
