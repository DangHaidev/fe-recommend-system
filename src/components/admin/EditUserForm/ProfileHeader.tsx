// components/admin/EditUserForm/ProfileHeader.tsx
"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ProfileHeaderProps {
  username: string;
  userId: string;
  isApproved?: boolean;
  activeTab: "profile" | "comments" | "reviews";
  onTabChange: (tab: "profile" | "comments" | "reviews") => void;
}

export default function ProfileHeader({
  username,
  userId,
  isApproved = true,
  activeTab,
  onTabChange,
}: ProfileHeaderProps) {

  // Khởi tạo Fancybox đúng cách trong Next.js
  useEffect(() => {
    if (typeof window === "undefined" || !(window as any).Fancybox) return;

    const Fancybox = (window as any).Fancybox;

    // Bind tất cả các link có data-fancybox="modal"
    Fancybox.bind("[data-fancybox='modal']", {
      dragToClose: false,
      autoFocus: false,
      placeFocusBack: false,
      // Tự động tìm nội dung inline (bắt buộc với Fancybox v5)
      content: (fancybox: any, slide: any) => {
        const target = slide.triggerEl?.getAttribute("href");
        if (target) {
          const el = document.querySelector(target);
          if (el) return el;
        }
        return null;
      },
    });

    // Cleanup khi component unmount
    return () => {
      Fancybox.unbind("[data-fancybox='modal']");
      Fancybox.close();
    };
  }, []);

  return (
    <>
      {/* ==================== HEADER ==================== */}
      <div className="profile__content bg-[#141414] rounded-2xl border border-white/10 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5">
          {/* Avatar + Info */}
          <div className="flex items-center">
            <div className="profile__avatar">
              <Image
                src="/img/user.svg"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full border-2 border-white/10"
              />
            </div>
            <div className="pt-2 pl-0">
              <h3 className="text-x0.5 font-semibold text-white">
                {username}{" "}
                <span className="text-xs font-medium text-green-400">
                  ({isApproved ? "Approved" : "Banned"})
                </span>
              </h3>
              <p className="text-xs text-gray-400">FlixTV ID: {userId}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-10 pl-10 pr-110">
            {(["profile", "comments", "reviews"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`relative px-3 pb-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:rounded-full ${
                  activeTab === tab
                    ? "text-blue-400 after:bg-blue-400"
                    : "text-gray-400 hover:text-gray-200 after:bg-transparent"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="profile__actions">
            <a
              href="#modal-status3"
              data-fancybox="modal"
              className="profile__action profile__action--banned open-modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,13a1.49,1.49,0,0,0-1,2.61V17a1,1,0,0,0,2,0V15.61A1.49,1.49,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"/>
              </svg>
            </a>

            <a
              href="#modal-delete3"
              data-fancybox="modal"
              className="profile__action profile__action--delete open-modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="h-px bg-white/10" />
      </div>

      {/* ==================== MODAL STATUS ==================== */}
      <div id="modal-status3" style={{ display: "none" }}>
        <div className="modal zoom-anim-dialog max-w-md w-full bg-[#1e1e2d] rounded-2xl p-6">
          <h4 className="modal__title text-xl font-semibold text-white mb-4">
            Thay đổi trạng thái
          </h4>
          <p className="modal__text text-gray-300">
            Bạn có chắc muốn <strong className="text-yellow-400">
              {isApproved ? "khóa" : "mở khóa"}
            </strong> tài khoản này không?
          </p>
          <p className="modal__text text-sm text-gray-400 mt-2">
            <strong>{username}</strong> (ID: {userId})
          </p>

          <div className="modal__btns flex gap-3 justify-end mt-6">
            <button
              className="modal__btn modal__btn--gray px-5 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
              data-fancybox-close
            >
              Hủy
            </button>
            <button
              className="modal__btn modal__btn--red px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg transition"
              data-fancybox-close
              onClick={() => alert("Đã thay đổi trạng thái!")}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>

      {/* ==================== MODAL DELETE ==================== */}
      <div id="modal-delete3" style={{ display: "none" }}>
        <div className="modal zoom-anim-dialog max-w-md w-full bg-[#1e1e2d] rounded-2xl p-6">
          <h4 className="modal__title text-xl font-semibold text-red-500 mb-4">
            Xóa người dùng
          </h4>
          <p className="modal__text text-gray-300">
            Bạn có chắc muốn <strong className="text-red-400">xóa vĩnh viễn</strong> tài khoản này?
          </p>
          <p className="modal__text text-red-400 font-medium text-sm">
            Không thể hoàn tác!
          </p>
          <p className="modal__text text-sm text-gray-400 mt-2">
            <strong>{username}</strong> (ID: {userId})
          </p>

          <div className="modal__btns flex gap-3 justify-end mt-6">
            <button
              className="modal__btn modal__btn--gray px-5 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
              data-fancybox-close
            >
              Hủy
            </button>
            <button
              className="modal__btn modal__btn--red px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg transition"
              data-fancybox-close
              onClick={() => alert("Đã xóa người dùng!")}
            >
              Xóa ngay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}