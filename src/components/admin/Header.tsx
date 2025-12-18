"use client";
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('sidebar-open');
  };

  return (
    <header className="header">
      <div className="header__content">
        {/* Logo */}
        <a href="/admin/dashboard" className="header__logo">
          <img src="/img/logo.svg" alt="FlixTV Admin" />
        </a>

        {/* Nút mở sidebar trên mobile */}
        <button
          className="header__btn"
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}