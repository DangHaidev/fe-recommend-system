'use client';
import { FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import { sendRequest } from '@/src/utils/api';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { sendRequestClient } from '@/src/utils/lib/sendrequestclient';

type RivewType = {
    id: number;
    title: string;
    rating: number;
    content: string;
    time: string;
    name: string;
};

export default function CommentsAndReviews({ movieId }: any) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('reviews');
    const [results, setResults] = useState<RivewType[]>([]);
    const { data: session, status, update } = useSession();
    const access_token = session?.user.access_token;
    const userId = session?.user.id;

    console.log('>>> access_token', access_token);
    // Handle loading or session unavailable states
    useEffect(() => {
        // Avoid making request if session is not loaded or unavailable
        if (status === 'loading') {
            console.log('Session is loading...');
            return; // Don't run fetch until session is ready
        }

        async function fetchData() {
            try {
                const res = await sendRequest<RivewType[]>({
                    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/review/movie/${movieId}`,
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
    }, [activeTab, status, access_token, movieId]); // Re-run the effect if activeTab, session status, or access_token changes

    // Render based on session status and results
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;

        const formData = new FormData(event.currentTarget);
        const formObj: Record<string, FormDataEntryValue> = {};

        // Chuyển FormData thành đối tượng JSON
        formData.forEach((value, key) => {
            formObj[key] = value;
        });
        console.log(formObj);

        const res = await sendRequestClient<IBackendRes<RivewType[]>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/review`,
            method: 'POST',
            body: formObj,
        });

        console.log(res);
        form.reset();
        router.refresh();
        // Handle response if necessary
        // if (res?.data) {
        //     router.push(`/verify/${res?.data?.id}`);
        // } else {
        //     // setError('Lỗi đăng ký');
        // }
        // ...
    }

    return (
        <div className="comments" style={{ marginTop: '-100px' }}>
            {/* tabs nav */}
            <ul
                className="nav nav-tabs comments__title comments__title--tabs"
                id="comments__tabs"
                role="tablist"
            >
                <li className="nav-item">
                    <button
                        className={`nav-link${
                            activeTab === 'reviews' ? ' active' : ''
                        }`}
                        onClick={() => setActiveTab('reviews')}
                        type="button"
                        aria-controls="tab-2"
                        tabIndex={0}
                    >
                        <h4>
                            {/* Reviews SVG */}
                            Reviews
                        </h4>
                        <span>3</span>
                    </button>
                </li>
            </ul>
            {/* end tabs nav */}

            {/* tabs */}
            <div className="tab-content">
                {/* reviews */}
                <div
                    className={`tab-pane fade${
                        activeTab === 'reviews' ? ' show active' : ''
                    }`}
                    id="tab-2"
                    role="tabpanel"
                >
                    <ul className="reviews__list">
                        {results?.map((item) => (
                            <li className="reviews__item" key={item.id}>
                                <div className="reviews__autor">
                                    <Image
                                        className="reviews__avatar"
                                        src="/img/avatar.svg"
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                    <span className="reviews__name">
                                        {item.title}
                                    </span>
                                    <span className="reviews__time">
                                        {item.createdAt + ' '}
                                        by {' ' + item.user.username}
                                    </span>
                                    <span className="reviews__rating">
                                        {/* Star SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"
                                                stroke="#2f80ed"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                        {item.rating}
                                    </span>
                                </div>
                                <p className="reviews__text">{item.content}</p>
                            </li>
                        ))}
                    </ul>

                    <form
                        action="#"
                        className="reviews__form"
                        onSubmit={onSubmit}
                    >
                        <div className="row">
                            <div className="col-12 col-md-9 col-lg-10 col-xl-9">
                                <div className="sign__group">
                                    <input
                                        type="text"
                                        name="title"
                                        className="sign__input"
                                        placeholder="Title"
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-3 col-lg-2 col-xl-3">
                                <div className="sign__group">
                                    <select
                                        name="rating"
                                        id="select"
                                        className="sign__select"
                                    >
                                        <option value="0">Rating</option>
                                        <option value="10">10</option>
                                        <option value="9">9</option>
                                        <option value="8">8</option>
                                        <option value="7">7</option>
                                        <option value="6">6</option>
                                        <option value="5">5</option>
                                        <option value="4">4</option>
                                        <option value="3">3</option>
                                        <option value="2">2</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="sign__group">
                                    <textarea
                                        id="text2"
                                        name="content"
                                        className="sign__textarea"
                                        placeholder="Add review"
                                    ></textarea>
                                </div>
                            </div>
                            <input
                                className="hidden"
                                name="movieId"
                                value={movieId}
                            ></input>
                            <input
                                className="hidden"
                                name="userId"
                                value={userId}
                            />

                            <div className="col-12">
                                {session ? (
                                    <button type="submit" className="sign__btn">
                                        Send
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="sign__btn"
                                        onClick={() => router.push('/signin')}
                                    >
                                        Login to review
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
                {/* end reviews */}
            </div>
            {/* end tabs */}
        </div>
    );
}
