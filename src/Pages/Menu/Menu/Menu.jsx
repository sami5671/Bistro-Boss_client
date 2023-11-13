import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
const Menu = () => {
  // =================================================================
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  // =================================================================
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuImg} title="Our menu"></Cover>
      {/*----------  */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Today's offer"
      ></SectionTitle>
      <MenuCategory item={offered}></MenuCategory>
      {/* ----------- */}

      {/* dessert */}
      <MenuCategory
        item={dessert}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory item={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      {/* salad */}
      <MenuCategory item={salad} title="salad" img={saladImg}></MenuCategory>
      {/* soup */}
      <MenuCategory item={soup} title="soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
