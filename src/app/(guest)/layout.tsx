import { Footer } from '@/src/components/layout/Footer';
import { Header } from '@/src/components/layout/Header';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <section>{children}</section>;
            <Footer />
        </>
    );
}
