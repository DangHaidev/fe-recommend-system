// components/admin/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface SidebarProps {
    activePage?: string;
}

export default function Sidebar({ activePage }: SidebarProps) {
    const pathname = usePathname();

    // Dashboard active
    const isDataboardActive =
        pathname === '/admin/databoard' || pathname === '/admin/databoard/';

    // Dropdown Pages – tự động mở khi vào bất kỳ trang /pages nào
    const [isPagesOpen, setIsPagesOpen] = useState(
        pathname?.startsWith('/pages') || Boolean(activePage),
    );

    useEffect(() => {
        setIsPagesOpen(pathname?.startsWith('/pages') || Boolean(activePage));
    }, [pathname, activePage]);

    // Helper: kiểm tra active cho các mục con trong Pages
    const isPageActive = (key: string) => {
        if (activePage === key) return 'active';
        return '';
    };

    return (
        <div className="sidebar">
            {/* Logo */}
            <Link href="/admin/databoard" className="sidebar__logo">
                <img src="/img/logo.svg" alt="FlixTV Admin" />
            </Link>

            {/* User Info */}
            <div className="sidebar__user">
                <div className="sidebar__user-img">
                    <img src="/img/user.svg" alt="Admin" />
                </div>
                <div className="sidebar__user-title">
                    <span>Admin</span>
                    <p>John Doe</p>
                </div>
                <button className="sidebar__user-btn" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" />
                    </svg>
                </button>
            </div>

            <ul className="sidebar__nav">
                {/* DASHBOARD */}
                <li className="sidebar__nav-item">
                    <Link
                        href="/admin/databoard"
                        className={`sidebar__nav-link ${
                            isDataboardActive ? 'sidebar__nav-link--active' : ''
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z" />
                        </svg>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/* Catalog */}
                <li className="sidebar__nav-item">
                    <Link
                        href="/admin/catalog"
                        className={`sidebar__nav-link ${
                            pathname?.startsWith('/catalog')
                                ? 'sidebar__nav-link--active'
                                : ''
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z" />
                        </svg>
                        <span>Catalog</span>
                    </Link>
                </li>

                {/* Pages Dropdown – HOÀN HẢO NHẤT */}
                <li className="sidebar__nav-item">
                    <a
                        className={`sidebar__nav-link ${
                            isPagesOpen ? 'sidebar__nav-link--active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsPagesOpen((prev) => !prev);
                        }}
                        style={{ cursor: 'pointer' }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z" />
                        </svg>
                        <span>Pages</span>
                        <svg
                            className="sidebar__nav-arrow"
                            style={{
                                transform: isPagesOpen
                                    ? 'rotate(180deg)'
                                    : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                marginLeft: 'auto',
                                width: '16px',
                                height: '16px',
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0a1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                        </svg>
                    </a>

                    <ul
                        className="sidebar__menu"
                        style={{
                            display: isPagesOpen ? 'block' : 'none',
                            paddingLeft: '20px',
                            margin: 0,
                        }}
                    >
                        {[
                            {
                                key: 'add-item',
                                href: '/pages/add-item',
                                label: 'Add item',
                            },
                            {
                                key: 'edit-user',
                                href: '/pages/edit-user',
                                label: 'Edit user',
                            },
                            {
                                key: 'signin',
                                href: '/pages/signin',
                                label: 'Sign in',
                            },
                            {
                                key: 'signup',
                                href: '/pages/signup',
                                label: 'Sign up',
                            },
                            {
                                key: 'forgot',
                                href: '/pages/forgot',
                                label: 'Forgot password',
                            },
                            {
                                key: '404',
                                href: '/pages/404',
                                label: '404 page',
                            },
                        ].map((item) => (
                            <li key={item.key}>
                                <Link
                                    href={item.href}
                                    className={isPageActive(item.key)}
                                    style={{
                                        display: 'block',
                                        padding: '8px 0',
                                        color:
                                            activePage === item.key
                                                ? '#fff'
                                                : '#a1a1b2',
                                        fontSize: '14px',
                                        fontWeight:
                                            activePage === item.key
                                                ? '600'
                                                : '400',
                                    }}
                                    onClick={() => setIsPagesOpen(true)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>

                {/* Các mục còn lại giữ nguyên */}
                <li className="sidebar__nav-item">
                    <Link
                        href="/admin/users"
                        className={`sidebar__nav-link ${
                            pathname?.startsWith('/users')
                                ? 'sidebar__nav-link--active'
                                : ''
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z" />
                        </svg>
                        <span>Users</span>
                    </Link>
                </li>

                <li className="sidebar__nav-item">
                    <Link
                        href="/admin/comments"
                        className={`sidebar__nav-link ${
                            pathname?.startsWith('/comments')
                                ? 'sidebar__nav-link--active'
                                : ''
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z" />
                        </svg>
                        <span>Comments</span>
                    </Link>
                </li>

                <li className="sidebar__nav-item">
                    <Link
                        href="/admin/reviews"
                        className={`sidebar__nav-link ${
                            pathname?.startsWith('/reviews')
                                ? 'sidebar__nav-link--active'
                                : ''
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
                        </svg>
                        <span>Reviews</span>
                    </Link>
                </li>
            </ul>

            <div className="sidebar__copyright">
                © FlixTV.template, 2021. <br />
                Create by{' '}
                <a target="_blank" rel="noreferrer">
                    danghaidev
                </a>
            </div>
        </div>
    );
}
