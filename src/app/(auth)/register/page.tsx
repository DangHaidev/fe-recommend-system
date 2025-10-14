'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, FormEvent } from 'react';
import { auth } from '@/public/js/firebaseConfig';

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    User,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { sendRequest } from '@/src/utils/api';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
        return () => unsubscribe();
    }, []);

    const handleEmailSignIn = () => {};

    const onFinish = async (values: any) => {
        const { email, password, name } = values;
        console.log(values);
        const res = await sendRequest<IBackendRes<any>>({
            // url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
            url: `http://localhost:8080/auth/register`,
            method: 'POST',
            body: {
                email,
                password,
                name,
            },
        });
        if (res?.data) {
            router.push(`/verify/${res?.data?._id}`);
        } else {
            // Notification.name({
            //     message: "Register error",
            //     description: res?.message
            // })
        }
    };
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData);
        const res = await sendRequest<IBackendRes<any>>({
            // url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
            url: 'http://127.0.0.1:8080/auth/register',
            method: 'POST',
            body: formData,
        });

        // Handle response if necessary
        if (res?.data) {
            router.push(`/verify/${res?.data?._id}`);
        } else {
            // Notification.name({
            //     message: "Register error",
            //     description: res?.message
            // })
        }
        // ...
    }

    return (
        <div className="sign section--full-bg" data-bg="/img/bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            {user ? (
                                <div className="text-center">
                                    <p>
                                        Xin chào,{' '}
                                        {user.email || user.displayName}
                                    </p>
                                    <button
                                        className="sign__btn"
                                        onClick={handleEmailSignIn}
                                    >
                                        Đăng xuất
                                    </button>
                                </div>
                            ) : (
                                <form
                                    className="sign__form"
                                    onSubmit={onSubmit}
                                >
                                    <Link href="/" className="sign__logo">
                                        <Image
                                            src="/img/logo.svg"
                                            alt="Logo"
                                            width={120}
                                            height={40}
                                        />
                                    </Link>

                                    <div className="sign__group">
                                        <input
                                            type="text"
                                            className="sign__input"
                                            placeholder="Email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="sign__group">
                                        <input
                                            type="text"
                                            className="sign__input"
                                            placeholder="User name"
                                            name="name"
                                            required
                                        />
                                    </div>

                                    <div className="sign__group">
                                        <input
                                            type="password"
                                            className="sign__input"
                                            placeholder="Password"
                                            name="password"
                                            required
                                        />
                                    </div>
                                    <button className="sign__btn" type="submit">
                                        Register
                                    </button>

                                    {error && (
                                        <p className="text-red-500 mt-2">
                                            {error}
                                        </p>
                                    )}

                                    <span className="sign__delimiter">or</span>

                                    <div className="sign__social">
                                        <a
                                            className="gl"
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleEmailSignIn();
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <span className="sign__text">
                                        Do have an account?{' '}
                                        <Link href="/signin">Sign in!</Link>
                                    </span>

                                    <span className="sign__text">
                                        <Link href="/forgot">
                                            Forgot password?
                                        </Link>
                                    </span>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
