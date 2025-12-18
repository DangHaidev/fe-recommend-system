'use client';
import { sendRequestClient } from '@/src/utils/lib/sendrequestclient';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

type LastestReview = {
    id: number;
    title: string;
    rating: number;
    time: string;
};
const LastestReview = ({ session }: any) => {
    const [results, setResults] = useState<LastestReview[]>([]);
    // const access_token = session?.user.access_token;
    const userId = session?.user.id;

    console.log('session in lastest review', userId);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await sendRequestClient<
                    IBackendRes<LastestReview[]>
                >({
                    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/review/user/${userId}`,
                    method: 'GET',
                    // accessToken: access_token, // Use the session token
                });

                const result = await res?.data;
                setResults(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [userId]); // Re-run the effect if activeTab, session status, or access_token changes
    return (
        <>
            <div
                className="rounded-2xl p-4"
                style={{ backgroundColor: '#151f30' }}
            >
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <svg
                        className="w-5 h-5 mr-2 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
                    </svg>
                    <span className="text-white">Latest reviews</span>
                </h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="text-left py-3 px-2">ITEM</th>
                                <th className="text-left py-3 px-2">AUTHOR</th>
                                <th className="text-left py-3 px-2">RATING</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-700">
                                <td className="py-3 px-2">
                                    <a
                                        href="#"
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        I Dream in Another Language
                                    </a>
                                </td>
                                <td className="py-3 px-2 text-gray-400">
                                    Jonathan Banks
                                </td>
                                <td className="py-3 px-2 flex items-center">
                                    <svg
                                        className="w-4 h-4 text-yellow-400 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
                                    </svg>
                                    7.2
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default LastestReview;
