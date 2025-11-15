// src/app/admin/layout.tsx
import Sidebar from "@/src/components/admin/Sidebar";
import Header from "@/src/components/admin/Header";
	// <link rel="stylesheet" href="css/bootstrap-reboot.min.css">
	// <link rel="stylesheet" href="css/bootstrap-grid.min.css">
	// <link rel="stylesheet" href="css/magnific-popup.css">
	// <link rel="stylesheet" href="css/select2.min.css">
	// <link rel="stylesheet" href="css/admin.css"></link>
import '../../styles/bootstrap-reboot.min.css';
import '../../styles/bootstrap-grid.min.css';
import '../../styles/magnific-popup.css';
import '../../styles/select2.min.css';
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
      {children}
    </>
  );
}