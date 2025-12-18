'use client';
import { sendRequestClient } from '@/src/utils/lib/sendrequestclient';
import { App } from 'antd';
import { useSession } from 'next-auth/react';
import { FormEvent, useEffect, useState } from 'react';

interface MediaPlayerProps {
    trailerUrl: string;
    movieId: number;
}
export default function MediaPlayer({ trailerUrl, movieId }: MediaPlayerProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isFavorited, setIsFavorited] = useState('Add to favorites');

    const { data: session, status, update } = useSession();
    const { notification } = App.useApp();
    const access_token = session?.user.access_token;
    const userId = parseInt(session?.user.id, 10);
    console.log('>>> movieurl', trailerUrl, movieId, userId);

    // Handle loading or session unavailable states
    useEffect(() => {
        // Avoid making request if session is not loaded or unavailable
        if (status === 'loading') {
            console.log('Session is loading...');
            return; // Don't run fetch until session is ready
        }

        if (status === 'authenticated' && access_token && userId) {
            checkFavorite();
        }
    }, [status, access_token]);

    async function checkFavorite() {
        const res2 = await sendRequestClient<IBackendRes<any>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-interact/${userId}/${movieId}/favorite`,
            method: 'POST',
        });

        if (res2.data === true) {
            setIsFavorite(true);
            setIsFavorited('Remove from favorites');
        }
    }

    async function onSubmit(event: any) {
        event.preventDefault();

        const res = await sendRequestClient<IBackendRes<MediaPlayerProps>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-interact/${userId}/${movieId}`,
            method: 'POST',
        });

        const res2 = await sendRequestClient<IBackendRes<any>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/events/log`,
            method: 'POST',
            body: {
                eventName: 'add_to_watchlist',
                userId,
                movieId: movieId,
            },
        });

        console.log(res.statusCode);
        //handle
        if (res.statusCode === 201 && res2.statusCode === 201) {
            setIsFavorited('Remove from favorites');
            // Thành công: Hiển thị thông báo thành công
            notification.success({
                message: 'Thêm vào danh sách xem sau',
                description: 'Thêm thành công',
                duration: 3, // Tự động đóng sau 3 giây
            });
        } else {
            if (res.statusCode === 409) {
                notification.error({
                    message: `Lỗi conflict`,
                    description:
                        res.message ||
                        'Danh sach yeu thich đã tồn tại. Vui lòng kiểm tra lại.',
                    duration: 3, // Không tự động đóng, yêu cầu người dùng đọc
                });
            }
            // 2. Lỗi 400 Bad Request/422 Validation
            else if (res.statusCode === 400 || res.statusCode === 422) {
                // NestJS thường trả về chi tiết lỗi xác thực trong trường 'message' (có thể là array)
                const detailMessage = Array.isArray(res.message)
                    ? res.message.join(', ')
                    : res.message;

                notification.warning({
                    message: `Lỗi ${status} Dữ liệu không hợp lệ`,
                    description:
                        detailMessage ||
                        'Vui lòng kiểm tra lại tất cả các trường thông tin.',
                });
            }
            // 3. Các lỗi server khác (5xx)
            else {
                notification.error({
                    message: `Lỗi Máy chủ ${status}`,
                    description:
                        'Có lỗi xảy ra trên máy chủ. Vui lòng thử lại sau.',
                });
            }
        }
    }

    async function onSubmitRemoveFavorite(event: any) {
        event.preventDefault();

        const res = await sendRequestClient<IBackendRes<MediaPlayerProps>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-interact/${userId}/${movieId}/remove`,
            method: 'POST',
        });

        const res2 = await sendRequestClient<IBackendRes<any>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/events/log`,
            method: 'POST',
            body: {
                eventName: 'remove_from_watchlist',
                userId,
                movieId: movieId,
            },
        });

        //handle
        if (res.statusCode === 201 && res2.statusCode === 201) {
            setIsFavorited('Add to favorites');
            // Thành công: Hiển thị thông báo thành công
            notification.success({
                message: 'Thành công',
                description: 'Xóa khỏi danh sách yêu thích thành công',
                duration: 3, // Tự động đóng sau 3 giây
            });
        }
    }

    return (
        <div className="col-12 col-xl-8" style={{ marginTop: '15px' }}>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '56.25%', // Tỉ lệ 16:9 = 9 / 16 * 100
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: '8px',
                }}
            >
                <iframe
                    src={trailerUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                ></iframe>
            </div>

            <div className="article__actions article__actions--details">
                <div className="article__download">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z" />
                    </svg>
                    Download:
                    <a href="#" download="#">
                        480p
                    </a>
                    <a href="#" download="#">
                        720p
                    </a>
                    <a href="#" download="#">
                        1080p
                    </a>
                    <a href="#" download="#">
                        4k
                    </a>
                </div>

                {/* add .active class */}
                {isFavorite ? (
                    <button
                        className="article__favorites"
                        type="button"
                        onClick={onSubmitRemoveFavorite}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path>
                        </svg>
                        {isFavorited}
                    </button>
                ) : (
                    <button
                        className="article__favorites"
                        type="button"
                        onClick={onSubmit}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path>
                        </svg>
                        {isFavorited}
                    </button>
                )}
            </div>
        </div>
    );
}
// filepath: d:\Project1\DOAN\fe-recommend-system\src\components\detail\MediaPlayer.tsx
