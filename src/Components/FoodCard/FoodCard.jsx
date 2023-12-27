import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
// import axios from "axios";

const FoodCard = ({ item }) => {
  // =================================================================
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = (food) => {
    // console.log(food, user.email);
    if (user && user.email) {
      //TODO: send cart item to the database
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your cart`,
          showConfirmButton: false,
          timer: 1500,
        });
        // refetch the cart to update automatically
        refetch();
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //  send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  // =================================================================
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute rounded-xl right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-orange-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
