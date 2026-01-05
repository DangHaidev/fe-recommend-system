'use client';

import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import ProfileTabs from '@/src/components/profile/ProfileTabs';
import ProfileStats from '@/src/components/profile/ProfileStats';
import FavoritesGrid from '@/src/components/profile/FavoritesGrid';
import ProfileSettings from '@/src/components/profile/ProfileSettings';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import LastestReview from '@/src/components/profile/LastestReview';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('profile');
    const { data: session, status } = useSession();

    const [isSessionLoaded, setIsSessionLoaded] = useState(false);

    useEffect(() => {
        if (status === 'authenticated' || status === 'unauthenticated') {
            setIsSessionLoaded(true);
        }
    }, [status]);

    // Nếu session chưa được load thì hiển thị loading hoặc placeholder
    if (!isSessionLoaded) {
        return <div>Loading...</div>;
    }
    console.log('>>>> data ', session, status);

    return (
        <div
            className="min-h-screen text-white"
            style={{ backgroundColor: '#131720' }}
        >
            {/* Header Section */}
            <section>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="mt-8 mb-8 lg:mb-0">
                            <h1 className="text-3xl font-bold mb-0">Profile</h1>
                        </div>
                        <nav className="flex">
                            <ol className="flex items-center space-x-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="text-gray-400">/</li>
                                <li className="text-white font-medium">
                                    Profile
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Profile Content */}
            <div className="container mx-auto px-64 py-8">
                <div
                    className="  rounded-t-lg p-3 shadow-lg"
                    style={{ backgroundColor: '#151f30' }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Avatar Section */}
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-3 shadow-sm">
                                {session?.user?.image ? (
                                    <img
                                        src={session?.user?.image}
                                        alt="User Avatar"
                                        className="w-8 h-8 rounded-full"
                                    />
                                ) : (
                                    <svg
                                        className="w-8 h-8 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" />
                                    </svg>
                                )}
                            </div>
                            <div>
                                <h3 className="text-0.5xl font-bold text-white mb-0">
                                    {session?.user?.name ?? 'null'}
                                </h3>
                                <span className="text-0.5xl text-gray-200 text-sm">
                                    FlixTV ID: {session?.user?.id ?? 'null'}
                                </span>
                            </div>
                        </div>

                        {/* Tabs Navigation - Center */}
                        <div className="flex-2 flex ">
                            <ProfileTabs
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        </div>

                        {/* Logout Button */}
                        <div>
                            <button
                                onClick={() =>
                                    signOut({ callbackUrl: '/signin' })
                                }
                                className="flex items-center px-4 py-2 text-white hover:bg-slate-700 rounded-lg transition-colors"
                            >
                                <span className="mr-2">Sign out</span>
                                <svg
                                    className="w-4 h-4 text-blue-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-8">
                    {activeTab === 'profile' && (
                        <div className="space-y-8">
                            <ProfileStats />
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                                <div
                                    className="rounded-2xl p-4"
                                    style={{ backgroundColor: '#151f30' }}
                                >
                                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                                        <svg
                                            className="w-5 h-5 mr-2 text-blue-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21,2a1,1,0,0,0-1,1V5H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V5H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,2,0V19H6v2a1,1,0,0,0,2,0V20h8v1a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2ZM6,17H4V15H6Zm0-4H4V11H6ZM6,9H4V7H6Zm10,9H8V13h8Zm0-7H8V6h8Zm4,6H18V15h2Zm0-4H18V11h2Zm0-4H18V7h2Z" />
                                        </svg>
                                        <span className="text-white">
                                            Movies for you
                                        </span>
                                    </h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-gray-700">
                                                    <th className="text-left py-3 px-2">
                                                        TITLE
                                                    </th>
                                                    <th className="text-left py-3 px-2">
                                                        CATEGORY
                                                    </th>
                                                    <th className="text-left py-3 px-2">
                                                        RATING
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-700">
                                                    <td className="py-3 px-2">
                                                        <a
                                                            href="#"
                                                            className="text-blue-400 hover:text-blue-300"
                                                        >
                                                            I Dream in Another
                                                            Language
                                                        </a>
                                                    </td>
                                                    <td className="py-3 px-2 text-gray-400">
                                                        Movie
                                                    </td>
                                                    <td className="py-3 px-2 flex items-center">
                                                        <svg
                                                            className="w-4 h-4 text-yellow-400 mr-1"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
                                                        </svg>
                                                        9.2
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-700">
                                                    <td className="py-3 px-2">
                                                        <a
                                                            href="#"
                                                            className="text-blue-400 hover:text-blue-300"
                                                        >
                                                            Benched
                                                        </a>
                                                    </td>
                                                    <td className="py-3 px-2 text-gray-400">
                                                        Movie
                                                    </td>
                                                    <td className="py-3 px-2 flex items-center">
                                                        <svg
                                                            className="w-4 h-4 text-yellow-400 mr-1"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
                                                        </svg>
                                                        9.1
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Latest reviews */}

                                <LastestReview session={session} />
                            </div>
                        </div>
                    )}

                    {activeTab === 'favorites' && (
                        <FavoritesGrid
                            userId={session?.user.id}
                            access_token={session?.user.access_token}
                        />
                    )}
                    {activeTab === 'settings' && (
                        <ProfileSettings userId={session?.user.id} />
                    )}
                </div>
            </div>
        </div>
    );
}
