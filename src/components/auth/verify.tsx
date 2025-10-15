'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendRequest } from '@/src/utils/api';
const Verify = (props: any) => {
    const { id } = props;
    const [error, setError] = useState('');
    const router = useRouter();
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formObj: Record<string, string> = {};

        // Chuyển FormData thành đối tượng JSON
        formData.forEach((value, key) => {
            formObj[key] = value as string;
        });
        console.log(formObj);
        const res = await sendRequest<IBackendRes<any>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/check-code`,
            // url: 'http://127.0.0.1:8080/auth/register',
            method: 'POST',
            body: formObj,
        });

        console.log('check res >>>', res);
        // Handle response if necessary
        if (res?.data) {
            router.push(`/login`);
        } else {
            setError('Lỗi code đăng ký');
        }
    }
    return (
        <div className="sign section--full-bg" data-bg="/img/bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <form className="sign__form" onSubmit={onSubmit}>
                                <Link href="/" className="sign__logo">
                                    <Image
                                        src="/img/logo.svg"
                                        alt="Logo"
                                        width={120}
                                        height={40}
                                    />
                                </Link>

                                <h1 className="text-white font-bold">
                                    Kích hoạt tài khoản
                                </h1>
                                <p className="text-white italic text-[12px]">
                                    Mã code đã được gửi về email mà bạn đăng ký!
                                </p>

                                <div className="sign__group">
                                    <input
                                        type="text"
                                        className="sign__input hidden"
                                        placeholder="id"
                                        name="id"
                                        value={id}
                                    />
                                </div>
                                <div className="sign__group">
                                    <input
                                        type="text"
                                        className="sign__input"
                                        placeholder="Input your code!"
                                        name="code"
                                        required
                                    />
                                </div>

                                <button className="sign__btn" type="submit">
                                    Submit
                                </button>

                                {error && (
                                    <p className="text-red-500 mt-2">{error}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verify;
