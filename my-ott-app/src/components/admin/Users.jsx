// components/admin/Users.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Registered Users</h2>

      <table className="w-full text-left border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2 border border-gray-600">User ID</th>
            <th className="p-2 border border-gray-600">Email</th>
            <th className="p-2 border border-gray-600">Username</th>
            <th className="p-2 border border-gray-600">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-800">
                <td className="p-2 border border-gray-700">{user.id}</td>
                <td className="p-2 border border-gray-700">{user.email_addresses?.[0]?.email_address || "N/A"}</td>
                <td className="p-2 border border-gray-700">{user.username || "N/A"}</td>
                <td className="p-2 border border-gray-700">
                  {new Date(user.created_at * 1000).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-400">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
