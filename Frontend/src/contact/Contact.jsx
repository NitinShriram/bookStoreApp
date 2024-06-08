import React from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center dark:bg-stone-950 dark:text-white">
        <div className="w-[600px]">
          <div className="m-5 modal-box dark:bg-stone-950 dark:text-white ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="dialog"
              className=""
            >
              <h3 className="font-bold text-lg">Contact us!</h3>
              {/* NAME */}
              <div className="mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Fullname"
                  className="w-full px-3 py-1 border rounded-md outline-none bg-transparent dark:bg-stone-950 dark:text-white"
                  {...register("name", { required: "This field is required" })}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              {/* EMAIL */}
              <div className="mt-4 space-y-2 ">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-3 py-1 border rounded-md outline-none bg-transparent dark:bg-stone-950 dark:text-white"
                  {...register("email", { required: "This field is required" })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              {/* MESSAGE */}
              <div className="mt-4 space-y-2 ">
                <span>Message</span>
                <br />
                <textarea
                  type="text"
                  placeholder="Enter your Message"
                  className="w-full px-3 py-1 border rounded-md outline-none bg-transparent dark:bg-stone-950 dark:text-white"
                  {...register("msg", {
                    required: "This field is required",
                  })}
                />
                {errors.msg && (
                  <p className="text-sm text-red-500">
                    {errors.msg.message}
                  </p>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="w-35 bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
