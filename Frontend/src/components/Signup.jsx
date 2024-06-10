import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) =>{
    const userInfo = {
      fullname : data.fullname,
      email : data.email,
      password : data.password
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Successful");
        navigate(from,{replace : true})
        setTimeout(()=>{
          window.location.reload()
        },1500)
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((error) =>{
     if(error.response){
        console.log(error)
        toast.error(error.response.data.message)
     }
      
    })
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center dark:bg-stone-950 dark:text-white">
        <div className="w-[600px]">
          <div className="m-5 modal-box dark:bg-stone-950 dark:text-white ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="dialog"
              className=""
            >
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>
              {/* NAME */}
              <div className="mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent dark:bg-stone-950 dark:text-white"
                  {...register("fullname", { required: "This field is required" })}
                />
                {errors.fullname && <p className="text-sm text-red-500">{errors.fullname.message}</p>}
              </div>
              {/* EMAIL */}
              <div className="mt-4 space-y-2 ">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent dark:bg-stone-950 dark:text-white"
                  {...register("email", { required: "This field is required" })}  
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>
              {/* PASSWORD */}
              <div className="mt-4 space-y-2 ">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent dark:bg-stone-950 dark:text-white"
                  {...register("password", { required: "This field is required" })}
                />
                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-lg">
                  Have account?{" "}
                  <Link
                    to="/"
                    className="cursor:pointer underline text-blue-500 "
                  >
                    Login
                  </Link>
                  {""}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
