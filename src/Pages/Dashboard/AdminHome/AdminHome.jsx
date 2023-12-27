import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaListAlt, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2>
        ho ho ho ho ho
        <span>HI welcome</span>
        {user?.displayName ? user.displayName : "back"}
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <FaDollarSign className="text-2xl"></FaDollarSign>
            </svg>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-2xl"></FaBook>
          </div>
          <div className="stat-title">Menu Item</div>
          <div className="stat-value">{stats.menuItem}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaListAlt className="text-2xl"></FaListAlt>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
