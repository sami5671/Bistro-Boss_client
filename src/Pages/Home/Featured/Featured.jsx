import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>

      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>

        <div className="md: ml-10">
          <p>Aug 20, 2020</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eos
            odio ipsam reprehenderit dolore, dolor distinctio doloremque
            eligendi quia at, aut vitae incidunt iste nisi est dolorem ratione.
            Ullam, sapiente aliquam provident accusamus modi autem adipisci
            voluptatum accusantium voluptate quisquam molestias eum velit
            repudiandae voluptates, sequi nulla reiciendis tempora ex!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 btn-secondary">
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
