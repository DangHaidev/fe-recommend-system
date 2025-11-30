interface MediaPlayerProps {
    trailerUrl: string;
}
export default function MediaPlayer({ trailerUrl }: MediaPlayerProps) {
    console.log('>>> movieurl', trailerUrl);

    //  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    //         event.preventDefault();

    //         const formData = new FormData(event.currentTarget);
    //         const formObj: Record<string, FormDataEntryValue> = {};

    //         // Chuyển FormData thành đối tượng JSON
    //         formData.forEach((value, key) => {
    //             formObj[key] = value;
    //         });
    //         console.log(formObj);

    //         const res = await sendRequest<IBackendRes<any>>({
    //             url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/review`,
    //             method: 'POST',
    //             body: formObj,
    //             accessToken: access_token,
    //         });
    //     }
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
                <button className="article__favorites" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path>
                    </svg>
                    Add to favorites
                </button>
            </div>
        </div>
    );
}
// filepath: d:\Project1\DOAN\fe-recommend-system\src\components\detail\MediaPlayer.tsx
