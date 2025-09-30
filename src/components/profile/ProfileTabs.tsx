interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ProfileTabs({ activeTab, setActiveTab }: ProfileTabsProps) {
  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'favorites', label: 'Favorites' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="border-none">
      <nav className="flex space-x-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-2 px-4 text-sm font-sans transition-colors ${
              activeTab === tab.id
                ? 'text-blue-500'
                : 'text-white hover:text-blue-300'
            }`}
          >
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-16 bg-blue-500 rounded-full" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
