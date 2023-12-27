import { FaGoogle } from "react-icons/fa";
import useAuth from "./../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSign } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSign = () => {
    googleSign().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="px-8">
      <div>
        <div className="divider"></div>
        <button onClick={handleGoogleSign} className="btn">
          <FaGoogle className="mr-4 text-green-500"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
