import React from "react";
import Img1 from "../../assets/F13.jpg";
import Img2 from "../../assets/Iphone1.jpg";
import Img3 from "../../assets/Iphone2.jpg";
import Img4 from "../../assets/Iphone3.jpeg";
import Img5 from "../../assets/A15.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Samsung-Galaxy",
    rating: 10.0,
    color: "Zyan",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Iphone15",
    rating: 9.5,
    color: "black",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Iphone14",
    rating: 9.0,
    color: "white",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Iphone13",
    rating: 8.9,
    color: "white",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Samsung A15",
    rating: 6.9,
    color: "black",
    aosDelay: "800",
  },
];

const NewProducts = () => {
  return (
    <div className="  mt-14 mb-12">
      <div className="container bg-gray-100 shadow-lg ">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-lg text-black ">
            Top New Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold text-blue-700">
            New-Products
          </h1>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-blue-700" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
          {/* Buy now button */}
          <div className="flex justify-center">
          <button className="bg-blue-700 hover:scale-105 duration-300
           text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
            group-hover:text-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
