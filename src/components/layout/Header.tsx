'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import SearchBar from '../common/SearchBar';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // mobile menu
    const [openMenu, setOpenMenu] = useState<string | null>(null); // dropdown

    const toggleDropdown = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <header className="header header--static">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__content">
                            {/* Mobile menu button */}
                            <button
                                className={`header__menu${
                                    menuOpen ? ' header__menu--active' : ''
                                }`}
                                type="button"
                                onClick={() => setMenuOpen((prev) => !prev)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            {/* Logo */}
                            <Link href="/" className="header__logo">
                                <Image
                                    src="/img/logo.svg"
                                    alt="Movies & TV Shows, Online cinema HTML Template"
                                    width={120}
                                    height={40}
                                    priority
                                />
                            </Link>

                            {/* Navigation */}
                            <ul className="header__nav">
                                {/* Home */}
                                <li className="header__nav-item">
                                    <button
                                        className="header__nav-link"
                                        type="button"
                                        onClick={() => toggleDropdown('home')}
                                    >
                                        Home
                                    </button>
                                    <ul
                                        className={`dropdown-menu header__nav-menu ${
                                            openMenu === 'home' ? 'show' : ''
                                        }`}
                                    >
                                        <li>
                                            <Link href="/">Home style 1</Link>
                                        </li>
                                        <li>
                                            <Link href="/index2">
                                                Home style 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index3">
                                                Home style 3
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Catalog */}
                                <li className="header__nav-item">
                                    <button
                                        className="header__nav-link"
                                        type="button"
                                        onClick={() =>
                                            toggleDropdown('catalog')
                                        }
                                    >
                                        Catalog
                                    </button>
                                    <ul
                                        className={`dropdown-menu header__nav-menu ${
                                            openMenu === 'catalog' ? 'show' : ''
                                        }`}
                                    >
                                        <li>
                                            <Link href="/catalog">Catalog</Link>
                                        </li>
                                        <li>
                                            <Link href="/category">
                                                Category style 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/category2">
                                                Category style 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/details">
                                                Details style 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/details2">
                                                Details style 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/details3">
                                                Details style 3
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Pricing */}
                                <li className="header__nav-item">
                                    <Link
                                        className="header__nav-link"
                                        href="/pricing"
                                    >
                                        Pricing plans
                                    </Link>
                                </li>

                                {/* About */}
                                <li className="header__nav-item">
                                    <Link
                                        className="header__nav-link"
                                        href="/about"
                                    >
                                        About us
                                    </Link>
                                </li>
                            </ul>

                            {/* Mobile nav */}
                            {menuOpen && (
                                <div className="header__nav-mobile">
                                    <ul>
                                        <li>
                                            <Link href="/">Home style 1</Link>
                                        </li>
                                        <li>
                                            <Link href="/index2">
                                                Home style 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index3">
                                                Home style 3
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/catalog">Catalog</Link>
                                        </li>
                                        <li>
                                            <Link href="/category">
                                                Category style 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/category2">
                                                Category style 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/details">
                                                Details style 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/details2">
                                                Details style 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/details3">
                                                Details style 3
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                Pricing plans
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About us</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="header__actions">
                                <SearchBar />

                                <button
                                    className="header__search"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                                    </svg>
                                </button>

                                <Link href="/signin" className="header__user">
                                    <span>Sign in</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
