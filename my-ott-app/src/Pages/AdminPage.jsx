import React, { useState } from "react";
import AdminNav from "../components/AdminNav";
import UploadComponent from "../components/admin/Upload";
import UpdateComponent from "../components/admin/Update"; // ✅ Import here
import ReadComponent from "../components/admin/Read";
import Users from "../components/admin/Users";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("Upload");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Upload":
        return <UploadComponent />;
      case "Update":
        return <UpdateComponent />;
      case "Read":
        return <ReadComponent />;
      case "Users":
        return <Users />;
      default:
        return <div>Select a tab to manage content.</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{activeTab} Section</h1>
        {renderTabContent()}
      </div>
    </div>
  );
}
