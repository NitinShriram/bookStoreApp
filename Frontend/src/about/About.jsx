import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
        <Navbar/>
      <div className="min-h-screen">
      <div className="max-w-screen-2xl container mx-auto p-10 mt-16 items-center justify-center text-center">

      {/* <div className="max-w-screen-2xl container mx-auto mt-16 pt-10 items-center justify-center text-center"> */}
      <p className="text-md  p-5">
        <span className="text-4xl">Welcome to <span className="text-pink-500">bookStore</span>,</span> 
        <br />
        <br />
        <br />
        Where pages come to life and reading becomes an
        adventure. At bookStore, we believe in the transformative power of
        books. From classic literature to contemporary fiction, from gripping
        thrillers to heartwarming tales, our shelves are stocked with a diverse
        array of titles to ignite your imagination and spark conversations.
        
        Whether you're a seasoned bookworm or just beginning your literary
        journey, our passionate team is here to help you discover your next
        favorite book. But bookStore is more than just a bookstore. It's a
        community hub where book lovers can gather, connect, and share their
        love of reading. Join us for author signings, book clubs, and other
        events that celebrate the written word and bring people together. Our
        cozy reading nook invites you to curl up with a good book and lose
        yourself in its pages, while our knowledgeable staff is always on hand
        to offer recommendations and insights.
        
         At bookStore, we're dedicated to
        fostering a love of reading and storytelling in our community. Whether
        you're looking for a new adventure, a moment of escape, or simply a good
        story to get lost in, we invite you to explore the world of books with
        us. Welcome to bookStore—where every page holds a new possibility.
      </p>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
