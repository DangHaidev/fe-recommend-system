// components/admin/EditUserForm/EditUserForm.tsx
"use client";

import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileDetailsForm from "./ProfileDetailsForm";
import ChangePasswordForm from "./ChangePasswordForm";
import UserCommentsTable from "./UserCommentsTable";

export default function EditUserForm() {
  // Dùng chung state cho cả header và nội dung
  const [activeTab, setActiveTab] = useState<"profile" | "comments" | "reviews">("profile");

  return (
    <div className="col-12">
      {/* Truyền state + hàm đổi tab xuống */}
      <ProfileHeader
        username="John Doe"
        userId="23562"
        isApproved={true}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Nội dung theo tab */}
      <div className="tab-content mt-6">
        {activeTab === "profile" && (
          <div className="sign__wrap">
            <div className="row">
              <div className="col-12 col-lg-6">
                <ProfileDetailsForm />
              </div>
              <div className="col-12 col-lg-6">
                <ChangePasswordForm />
              </div>
            </div>
          </div>
        )}

        {activeTab === "comments" && (
          <>
            <UserCommentsTable />
            <div className="col-12 mt-6">
              <div className="paginator">
                <span className="paginator__pages">10 từ 38</span>
              </div>
            </div>
          </>
        )}

        {activeTab === "reviews" && (
          <div className="col-12">
            <div className="main__table-wrap">
              <p className="text-gray-500">Chưa có đánh giá nào.</p>
            </div>
            <div className="paginator mt-6">
              <span className="paginator__pages">0 từ 0</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}