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
    const [activeTab, setActiveTab] = useState('comments');
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
                            activeTab === 'comments' ? ' active' : ''
                        }`}
                        onClick={() => setActiveTab('comments')}
                        type="button"
                        aria-controls="tab-1"
                        tabIndex={0}
                    >
                        <h4>
                            {/* Comments SVG */}
                            Comments
                        </h4>
                        <span>5</span>
                    </button>
                </li>
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
                {/* comments */}
                <div
                    className={`tab-pane fade${
                        activeTab === 'comments' ? ' show active' : ''
                    }`}
                    id="tab-1"
                    role="tabpanel"
                >
                    <ul className="comments__list">
                        <li className="comments__item">
                            <div className="comments__autor">
                                <Image
                                    className="comments__avatar"
                                    src="/img/avatar.svg"
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                <span className="comments__name">
                                    Brian Cranston
                                </span>
                                <span className="comments__time">
                                    30.08.2021, 17:53
                                </span>
                            </div>
                            <p className="comments__text">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don&apos;t look even
                                slightly believable. If you are going to use a
                                passage of Lorem Ipsum, you need to be sure
                                there isn&apos;t anything embarrassing hidden in
                                the middle of text.
                            </p>
                            <div className="comments__actions">
                                <div className="comments__rate">
                                    <button type="button">
                                        {/* Like SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M11 7.3273V14.6537"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M14.6667 10.9905H7.33333"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        12
                                    </button>
                                    <button type="button">
                                        7{/* Dislike SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M14.6667 10.9905H7.33333"
                                                stroke="#f11414ff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
                                                stroke="#f11414ff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <button type="button">
                                    {/* Reply SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 512 512"
                                    >
                                        <polyline
                                            points="400 160 464 224 400 288"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M448,224H154C95.24,224,48,273.33,48,332v20"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                    </svg>
                                    <span>Reply</span>
                                </button>
                                <button type="button">
                                    {/* Quote SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 512 512"
                                    >
                                        <polyline
                                            points="320 120 368 168 320 216"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M352,168H144a80.24,80.24,0,0,0-80,80v16"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <polyline
                                            points="192 392 144 344 192 296"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M160,344H368a80.24,80.24,0,0,0,80-80V248"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                    </svg>
                                    <span>Quote</span>
                                </button>
                            </div>
                        </li>

                        <li className="comments__item comments__item--answer">
                            <div className="comments__autor">
                                <Image
                                    className="comments__avatar"
                                    src="/img/avatar.svg"
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                <span className="comments__name">
                                    Jesse Plemons
                                </span>
                                <span className="comments__time">
                                    24.08.2021, 16:41
                                </span>
                            </div>
                            <p className="comments__text">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&apos;s standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                            <div className="comments__actions">
                                <div className="comments__rate">
                                    <button type="button">
                                        {/* Like SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M11 7.3273V14.6537"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M14.6667 10.9905H7.33333"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        10
                                    </button>
                                    <button type="button">
                                        0{/* Dislike SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M14.6667 10.9905H7.33333"
                                                stroke="#f11414ff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
                                                stroke="#f11414ff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <button type="button">
                                    {/* Reply SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 512 512"
                                    >
                                        <polyline
                                            points="400 160 464 224 400 288"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M448,224H154C95.24,224,48,273.33,48,332v20"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                    </svg>
                                    <span>Reply</span>
                                </button>
                                <button type="button">
                                    {/* Quote SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 512 512"
                                    >
                                        <polyline
                                            points="320 120 368 168 320 216"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M352,168H144a80.24,80.24,0,0,0-80,80v16"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <polyline
                                            points="192 392 144 344 192 296"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M160,344H368a80.24,80.24,0,0,0,80-80V248"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                    </svg>
                                    <span>Quote</span>
                                </button>
                            </div>
                        </li>

                        <li className="comments__item comments__item--quote">
                            <div className="comments__autor">
                                <Image
                                    className="comments__avatar"
                                    src="/img/avatar.svg"
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                <span className="comments__name">
                                    Matt Jones
                                </span>
                                <span className="comments__time">
                                    11.08.2021, 11:11
                                </span>
                            </div>
                            <p className="comments__text">
                                <span>
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don&apos;t look even slightly believable.
                                </span>
                                It has survived not only five centuries, but
                                also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                            <div className="comments__actions">
                                <div className="comments__rate">
                                    <button type="button">
                                        {/* Like SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M11 7.3273V14.6537"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M14.6667 10.9905H7.33333"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        9
                                    </button>
                                    <button type="button">
                                        2{/* Dislike SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M14.6667 10.9905H7.33333"
                                                stroke="#f11414ff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
                                                stroke="#f11414ff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <button type="button">
                                    {/* Reply SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 512 512"
                                    >
                                        <polyline
                                            points="400 160 464 224 400 288"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M448,224H154C95.24,224,48,273.33,48,332v20"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                    </svg>
                                    <span>Reply</span>
                                </button>
                                <button type="button">
                                    {/* Quote SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 512 512"
                                    >
                                        <polyline
                                            points="320 120 368 168 320 216"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M352,168H144a80.24,80.24,0,0,0-80,80v16"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <polyline
                                            points="192 392 144 344 192 296"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M160,344H368a80.24,80.24,0,0,0,80-80V248"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                    </svg>
                                    <span>Quote</span>
                                </button>
                            </div>
                        </li>

                        <li className="comments__item">
                            <div className="comments__autor">
                                <Image
                                    className="comments__avatar"
                                    src="/img/avatar.svg"
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                <span className="comments__name">
                                    Tess Harper
                                </span>
                                <span className="comments__time">
                                    07.08.2021, 14:33
                                </span>
                            </div>
                            <p className="comments__text">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don&apos;t look even
                                slightly believable. If you are going to use a
                                passage of Lorem Ipsum, you need to be sure
                                there isn&apos;t anything embarrassing hidden in
                                the middle of text.
                            </p>
                            <div className="comments__actions">
                                <div className="comments__rate">
                                    <button type="button">
                                        {/* Like SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M11 7.3273V14.6537"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M14.6667 10.9905H7.33333"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        7
                                    </button>
                                    <button type="button">
                                        4{/* Dislike SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M14.6667 10.9905H7.33333"
                                                stroke="#f11414ff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
                                                stroke="#f11414ff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <button type="button">
                                    {/* Reply SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 512 512"
                                    >
                                        <polyline
                                            points="400 160 464 224 400 288"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M448,224H154C95.24,224,48,273.33,48,332v20"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                    </svg>
                                    <span>Reply</span>
                                </button>
                                <button type="button">
                                    {/* Quote SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 512 512"
                                    >
                                        <polyline
                                            points="320 120 368 168 320 216"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M352,168H144a80.24,80.24,0,0,0-80,80v16"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <polyline
                                            points="192 392 144 344 192 296"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M160,344H368a80.24,80.24,0,0,0,80-80V248"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                    </svg>
                                    <span>Quote</span>
                                </button>
                            </div>
                        </li>

                        <li className="comments__item">
                            <div className="comments__autor">
                                <Image
                                    className="comments__avatar"
                                    src="/img/avatar.svg"
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                <span className="comments__name">
                                    Jonathan Banks
                                </span>
                                <span className="comments__time">
                                    02.08.2021, 15:24
                                </span>
                            </div>
                            <p className="comments__text">
                                Many desktop publishing packages and web page
                                editors now use Lorem Ipsum as their default
                                model text, and a search for &apos;lorem
                                ipsum&apos; will uncover many web sites still in
                                their infancy. Various versions have evolved
                                over the years, sometimes by accident, sometimes
                                on purpose (injected humour and the like).
                            </p>
                            <div className="comments__actions">
                                <div className="comments__rate">
                                    <button type="button">
                                        {/* Like SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M11 7.3273V14.6537"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M14.6667 10.9905H7.33333"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
                                                stroke="#15b04eff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        2
                                    </button>
                                    <button type="button">
                                        17
                                        {/* Dislike SVG */}
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M14.6667 10.9905H7.33333"
                                                stroke="#2ff11414ff80ed"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
                                                stroke="#f11414ff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <button type="button">
                                    {/* Reply SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 512 512"
                                    >
                                        <polyline
                                            points="400 160 464 224 400 288"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M448,224H154C95.24,224,48,273.33,48,332v20"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                    </svg>
                                    <span>Reply</span>
                                </button>
                                <button type="button">
                                    {/* Quote SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 512 512"
                                    >
                                        <polyline
                                            points="320 120 368 168 320 216"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M352,168H144a80.24,80.24,0,0,0-80,80v16"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <polyline
                                            points="192 392 144 344 192 296"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                        <path
                                            d="M160,344H368a80.24,80.24,0,0,0,80-80V248"
                                            style={{
                                                fill: 'none',
                                                stroke: '#2f80ed',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: 32,
                                            }}
                                        />
                                    </svg>
                                    <span>Quote</span>
                                </button>
                            </div>
                        </li>
                    </ul>

                    <div className="catalog__paginator-wrap catalog__paginator-wrap--comments">
                        <span className="catalog__pages">5 from 16</span>

                        <ul className="catalog__paginator">
                            <li>
                                <a href="#">
                                    {/* Prev SVG */}
                                    <svg
                                        width="14"
                                        height="11"
                                        viewBox="0 0 14 11"
                                        fill="none"
                                    >
                                        <path
                                            d="M0.75 5.36475L13.1992 5.36475"
                                            stroke="#2f80ed"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M5.771 10.1271L0.749878 5.36496L5.771 0.602051"
                                            stroke="#2f80ed"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">
                                    {/* Next SVG */}
                                    <svg
                                        width="14"
                                        height="11"
                                        viewBox="0 0 14 11"
                                        fill="none"
                                    >
                                        <path
                                            d="M13.1992 5.3645L0.75 5.3645"
                                            stroke="#2f80ed"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8.17822 0.602051L13.1993 5.36417L8.17822 10.1271"
                                            stroke="#2f80ed"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <form action="#" className="comments__form">
                        <div className="sign__group">
                            <textarea
                                id="text"
                                name="text"
                                className="sign__textarea"
                                placeholder="Add comment"
                            ></textarea>
                        </div>
                        <button type="button" className="sign__btn">
                            Send
                        </button>
                    </form>
                </div>
                {/* end comments */}

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
