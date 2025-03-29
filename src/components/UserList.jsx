/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { deleteUser, getUser } from "../service/api";
import Loading from "./Loading";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";
import UpdateUser from "./UpdateUser";
import { useNavigate } from "react-router";

function UserList() {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [page]);
  async function fetchUser() {
    try {
      setLoading(true);
      const response = await getUser(page);
      setUser(response.data);
      setTotalPage(response.total_pages);
    } catch (error) {
      console.log("error fetching user", error);
      setUser([]);
    } finally {
      setLoading(false);
    }
  }

  // function to delete user
  async function handleDelete(id) {
    try {
      await deleteUser(id);
      setUser(user.filter((user) => user.id != id));
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("failed to delete user");
      console.log(error);
    }
  }

  return (
    <div className="relative w-full h-screen p-2">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-5 p-5 relative">
        {loading && <Loading />}
        {user.map((user) => (
          <div key={user.id} className="overflow-hidden rounded-xl shadow-2xl">
            <div className="w-full h-48 overflow-hidden">
              <motion.img
                src={user.avatar}
                alt=""
                className="h-full w-full object-cover"
                whileHover={{
                  scale: 1.1,
                }}
              />
            </div>
            <div className="flex gap-3 text-2xl px-3">
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
            </div>
            <p className="px-3 text-lg text-gray-500">{user.email}</p>
            <div className="grid grid-cols-2 gap-3 my-5 px-5">
              <motion.button
                className="bg-yellow-500 cursor-pointer text-white px-5 py-2 rounded-lg"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setEditId(user.id)}
              >
                Edit
              </motion.button>
              <motion.button
                className="bg-red-500 text-white px-5 py-2 rounded-lg"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </motion.button>
            </div>
            <div className="absolute md:top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {editId == user.id && (
                <UpdateUser
                  data={user}
                  setEditId={setEditId}
                  setUser={setUser}
                  className=""
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto my-5 md:text-xl flex justify-center p-4 gap-5">
        <button
          className={`border px-2 rounded-md ${
            page == 1 ? "opacity-30" : null
          }`}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <MdKeyboardArrowLeft />
        </button>
        {Array.from({ length: totalPage }, (_, i) => (
          <button
            key={i}
            className={`border px-3 rounded-md ${
              page === i + 1 ? "bg-blue-500 text-white border-0" : ""
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={`border px-2 rounded-md ${page === 2 ? "opacity-30" : ""}`}
          onClick={() => setPage(page + 1)}
          disabled={page === 2}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}

export default UserList;
