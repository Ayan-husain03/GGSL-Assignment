import React, { useState } from "react";
import { editUser } from "../service/api";
import { toast } from "react-toastify";

function UpdateUser({ data, setEditId, setUser }) {
  const [newData, setNewData] = useState({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prev) => ({ ...prev, [name]: value }));
  };
  const saveChanges = async () => {
    try {
      await editUser(data.id, newData);
      setUser((prev) =>
        prev.map((user) =>
          user.id === data.id ? { ...user, ...newData } : user
        )
      );
      toast.success("Update user successfully");
      setEditId(null);
    } catch (error) {
      console.error("Error updating user: ", error);
      toast.error("Failed to update user");
    }
  };
  return (
    <div className="w-full h-screen">
      <div className="bg-white flex flex-col p-5 rounded-xl gap-5 w-96">
        <img src={data.avatar} />
        <input
          type="text"
          placeholder="Enter first name"
          name="first_name"
          value={newData.first_name}
          onChange={handleChange}
          className="border border-blue-400 p-3 rounded-xl md:text-xl outline-0 focus:outline-2 focus:outline-blue-500"
        />
        <input
          type="text"
          placeholder="Enter last name"
          name="last_name"
          value={newData.last_name}
          onChange={handleChange}
          className="border border-blue-400 p-3 rounded-xl md:text-xl outline-0 focus:outline-2 focus:outline-blue-500"
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={newData.email}
          onChange={handleChange}
          className="border border-blue-400 p-3 rounded-xl md:text-xl outline-0 focus:outline-2 focus:outline-blue-500"
        />
        <div className="grid grid-cols-2 gap-3 px-3">
          <button
            className="bg-amber-500 text-white px-5 py-1 rounded-lg"
            onClick={saveChanges}
          >
            save
          </button>
          <button
            className="bg-red-500 text-white px-5 py-1 rounded-lg"
            onClick={() => setEditId(null)}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
