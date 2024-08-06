import Blockbluster from "../components/home/Blockbluster";
import Category from "../components/home/Category";
import HeroSlider from "../components/home/HeroSlider";
import Infocus from "../components/home/Infocus";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex items-center justify-center w-screen">
        <HeroSlider />
      </div>
      <Category />
      <Infocus />
      <Blockbluster />
      <div className="w-[90vw] md:w-[80vw] mx-auto">
        <img
          src="https://assets.tatacliq.com/medias/sys_master/images/49733188190238.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
