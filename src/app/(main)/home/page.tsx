import Popular from '@/src/components/home/popular';
import Image from 'next/image';
import Link from 'next/link';

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
                    {/* <div className="hero__image">
                        <Image
                            src="/img/hero/hero1.jpg"
                            alt="Hero"
                            width={800}
                            height={450}
                            priority
                        />
                    </div> */}
                </div>
            </section>

            {/* popular section */}
            <Popular />
        </div>
    );
}
