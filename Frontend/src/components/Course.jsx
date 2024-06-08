import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json"
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-stone-950">
        <div className="mt-16 pt-10 items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl">
            We're delighted to have{" "}
            <span className="text-pink-500">you Here! :)</span>{" "}
          </h1>
          <p className="mt-12">
            Discover the magic within every page as you dive into our diverse
            collection of books. Whether you're exploring new worlds in fantasy,
            unraveling mysteries in thrilling whodunits, or finding solace in
            heartfelt romances, our carefully curated selection promises to
            captivate your imagination and spark your curiosity. Each book is a
            doorway to adventure, a chance to meet unforgettable characters, and
            an opportunity to experience different lives and perspectives.
            Embrace the joy of reading and let your next great adventure begin
            here!
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300" >Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item} />
                ) )
               
            }
        </div>
      </div>
    </>
  );
}

export default Course;
