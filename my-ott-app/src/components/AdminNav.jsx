// AdminNav.jsx
import React from "react";

const navItems = ["Upload", "Read", "Update", "Delete", "Users", "Carousels"];

export default function AdminNav({ activeTab, setActiveTab }) {
  return (
    <div className="w-64 bg-gray-800 p-4 border-r border-gray-700">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li
            key={item}
            className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-700 transition-all ${
              activeTab === item ? "bg-gray-700 font-semibold" : ""
            }`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
