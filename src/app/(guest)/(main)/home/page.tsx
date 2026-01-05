import HeroCarousel from '@/src/components/home/HeroCarousel';
import SubscriptionsSection from '@/src/components/home/SubscriptionsSection';
import InterviewsSection from '@/src/components/home/InterviewsSection';

export default function HomePage() {
    return (
        <>
            <InterviewsSection />
            <SubscriptionsSection />
            <HeroCarousel />
        </>
    );
}
