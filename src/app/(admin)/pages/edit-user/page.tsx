// app/(admin)/edit-user/[id]/page.tsx
"use client";

import { useEffect } from "react";
import Sidebar from "@/src/components/admin/Sidebar";
import Header from "@/src/components/admin/Header";
import PageTitle from "@/src/components/admin/PageTitle";
import EditUserForm from "@/src/components/admin/EditUserForm/EditUserForm";

export default function EditUserPage() {
  useEffect(() => {
    const scripts = [
      "/js/jquery-3.5.1.min.js",
      "/js/bootstrap.bundle.min.js",
      "/js/jquery.magnific-popup.min.js",
      "/js/smooth-scrollbar.js",
      "/js/select2.min.js",
      "/js/admin.js",
    ];

    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach(src => {
        document.querySelector(`script[src="${src}"]`)?.remove();
      });
    };
  }, []);

  return (
    <>
      <Sidebar activePage="edit-user" />
      <Header />

      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <PageTitle title="Edit user" />
            <EditUserForm />
          </div>
        </div>
      </main>
    </>
  );
}