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
    </>
  );
}