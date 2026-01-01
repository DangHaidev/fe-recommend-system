'use client';

import { useEffect, useRef } from 'react';
import SubscriptionCard from '../common/SubscriptionCard';

const subscriptions = [
    {
        image: '/img/card/11.png',
        title: 'Sports broadcasts',
        description: 'More than 300 movies',
    },
    {
        image: '/img/card/15.png',
        title: 'Psychological films',
        description: 'More than 200 movies',
    },
    {
        image: '/img/card/3.png',
        title: 'Films about space',
        description: 'More than 100 movies',
    },
    {
        image: '/img/card/1.png',
        title: 'Romantic movies',
        description: 'More than 300 movies',
    },
    {
        image: '/img/card/18.png',
        title: 'Movies about the middle ages',
        description: 'More than 300 movies',
    },
    {
        image: '/img/card/2.png',
        title: 'Fairy tales',
        description: 'More than 100 movies',
    },
    {
        image: '/img/card/17.png',
        title: 'Best Movies',
        description: 'More than 300 movies',
    },
    {
        image: '/img/card/13.png',
        title: 'The best melodramas',
        description: 'More than 400 movies',
    },
    {
        image: '/img/card/10.png',
        title: 'Horror movies',
        description: 'More than 500 movies',
    },
    {
        image: '/img/card/9.png',
        title: 'Russian TV Shows',
        description: 'More than 300 movies',
    },
    {
        image: '/img/card/14.png',
        title: 'Army films',
        description: 'More than 250 movies',
    },
    {
        image: '/img/card/12.png',
        title: 'Cities of the world',
        description: 'More than 500 movies',
    },
];

export default function SubscriptionsSection() {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current && typeof window !== 'undefined') {
            const $ = (window as any).$;
            if ($ && $.fn.owlCarousel) {
                setTimeout(() => {
                    if ($ && $.fn.owlCarousel && carouselRef.current) {
                        $(carouselRef.current).owlCarousel({
                            items: 5,
                            margin: 20,
                            loop: true,
                            nav: false,
                            dots: false,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            responsive: {
                                0: { items: 1 },
                                576: { items: 2 },
                                768: { items: 3 },
                                992: { items: 4 },
                                1200: { items: 5 },
                            },
                        });
                    }
                }, 100);
            }
        }
    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section__title">Subscriptions</h2>
                    </div>

                    <div className="col-12">
                        <div className="section__carousel-wrap">
                            <div
                                className="section__carousel owl-carousel"
                                id="subscriptions"
                                ref={carouselRef}
                            >
                                {subscriptions.map((item, index) => (
                                    <SubscriptionCard key={index} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
