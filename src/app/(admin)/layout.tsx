// src/app/admin/layout.tsx
import Script from "next/script";
import Sidebar from "@/src/components/admin/Sidebar";
import Header from "@/src/components/admin/Header";
import '../../styles/admin.css'; 

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="main">{children}</main>

      <Script src="/js/jquery-3.5.1.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
      <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive"/>
      <Script src="/js/smooth-scrollbar.js" strategy="afterInteractive" />
      <Script src="/js/select2.min.js" strategy="afterInteractive" />
      <Script src="/js/admin.js" strategy="afterInteractive"/> 
    </>
  );
}