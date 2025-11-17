"use client";

import { useEffect } from "react";
import Sidebar from "@/src/components/admin/Sidebar";
import PageTitle from "@/src/components/admin/PageTitle";
import AddItemForm from "@/src/components/admin/AddItemForm/AddItemForm";

export default function AddItemPage() {
  useEffect(() => {
    // Load tất cả JS cần thiết (chỉ 1 lần duy nhất ở đây nếu muốn global)
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
        const script = document.querySelector(`script[src="${src}"]`);
        script?.remove();
      });
    };
  }, []);

  return (
    <>
      <Sidebar activePage="add-item" />

      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <PageTitle title="Add new item" />
            <div className="col-12">
              <AddItemForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}