"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home">
      {/* banner section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">Welcome to FlixTV</h1>
            <p className="hero__text">
              Watch movies, TV shows and more — anytime, anywhere.
            </p>
            <div className="hero__buttons">
              <Link href="/catalog" className="btn btn-primary">
                Browse Catalog
              </Link>
              <Link href="/profile" className="btn btn-secondary">
                My Profile
              </Link>
            </div>
          </div>
          <div className="hero__image">
            <Image
              src="/img/hero/hero1.jpg"
              alt="Hero"
              width={800}
              height={450}
              priority
            />
          </div>
        </div>
      </section>

      {/* features section */}
      <section className="features">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card">
            <h3 className="feature-card__title">High Quality</h3>
            <p className="feature-card__text">Enjoy movies in HD and 4K.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card__title">No Ads</h3>
            <p className="feature-card__text">Watch without interruptions.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card__title">Multi-device</h3>
            <p className="feature-card__text">Available on all your devices.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
