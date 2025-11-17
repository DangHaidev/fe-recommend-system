// components/admin/EditUserForm/ProfileTabs.tsx
"use client";

import { useState } from "react";

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <>
      <ul className="nav nav-tabs profile__tabs" role="tablist">
        <li className="nav-item">
          <a
            className={activeTab === "tab-1" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("tab-1")}
            href="#tab-1"
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a
            className={activeTab === "tab-2" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("tab-2")}
            href="#tab-2"
          >
            Comments
          </a>
        </li>
        <li className="nav-item">
          <a
            className={activeTab === "tab-3" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("tab-3")}
            href="#tab-3"
          >
            Reviews
          </a>
        </li>
      </ul>

      {/* Mobile Tabs */}
      <div className="profile__mobile-tabs">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="profile__mobile-tabs-btn"
        >
          <option value="tab-1">Profile</option>
          <option value="tab-2">Comments</option>
          <option value="tab-3">Reviews</option>
        </select>
      </div>
    </>
  );
}