import React from "react";
import { useState,useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

import axios from "axios";


function Freebook() {
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setBook(res.data.filter((data) => data.category === "Free"))
      }
      catch(error){
        console.log(error)
      }
    }
    getBook();
  },[])


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Books</h1>
          <p>
            Explore our vast collection of captivating stories and timeless
            classics. Dive into adventures, unravel mysteries, and find
            inspiration. Shop now and embark on your next unforgettable literary
            journey!
          </p>
        </div>

        <div className="">
          <Slider {...settings}>
            {book.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
