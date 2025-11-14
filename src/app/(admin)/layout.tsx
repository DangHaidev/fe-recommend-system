
import '../../styles/admin.css'; 

import AdminLayout from '@/src/components/admin/AdminLayout';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}