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
        </>
    );
}
