import HeroCarousel from '@/src/components/home/HeroCarousel';
import CatalogSection from '@/src/components/home/CatalogSection';
import SubscriptionsSection from '@/src/components/home/SubscriptionsSection';
import PricingSection from '@/src/components/home/PricingSection';
import InterviewsSection from '@/src/components/home/InterviewsSection';
import Popular from '@/src/components/home/popular';

export default function HomePage() {
    return (
        <>
            {/* Hero Carousel */}
            <HeroCarousel />

            {/* Catalog Section */}
            <CatalogSection />

            {/* Subscriptions Section */}
            <SubscriptionsSection />

            {/* Pricing Plans Section */}
            <PricingSection />

            {/* FlixTV Originals Section */}
            <InterviewsSection />
            {/* popular section */}
            <Popular />
        </>
    );
}
