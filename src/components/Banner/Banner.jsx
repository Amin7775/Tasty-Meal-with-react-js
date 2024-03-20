import mealImg from "./../../assets/img/meal-icon.png";
const Banner = () => {
  return (
    <div className="flex mt-10">
      <div className="w-1/6 flex justify-center items-center">
        <img className="w-full" src={mealImg} alt="" />
      </div>
      <div className="flex-1 flex-grow ">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl mb-5">Welcome to Tasty Meals</h1>
          <p className="text-center w-[85%] mx-auto text-white/[.8]">
            We promise a flavorful journey filled with culinary delights.
            Explore our menu crafted with passion, offering a blend of
            comforting classics and innovative creations to tantalize your taste
            buds. Join us and indulge in the joy of unforgettable dining
            experiences.
            {/* <hr className="hr-style" /> */}
          </p>
          <hr className="hr-style mt-10"/>
        </div>
      </div>
      <div className="w-1/6 flex justify-center items-center">
        <img className="w-full" src={mealImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
