import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    const userInfo = {
      email : data.email,
      password : data.password
    }
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Login Successful")
        document.getElementById("my_modal_3").close()
        setTimeout(()=>{
          window.location.reload()
          localStorage.setItem("Users",JSON.stringify(res.data.user))
        },1000)
        
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((error) =>{
     if(error.response){
        console.log(error)
        toast.error(error.response.data.message)
        setTimeout(()=>{},3000)
     }
      
    })
  }

  // Create a ref for the dialog
  const dialogRef = useRef(null);

  // Function to close the dialog
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div className="dark:bg-stone-950 dark:text-white">
      <dialog id="my_modal_3" className="modal" ref={dialogRef}>
        <div className="modal-box dark:bg-stone-950 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeDialog}
            >
              ✕
            </button>
          
            <h3 className="font-bold text-lg">Login</h3>
            {/* EMAIL */}
            <div className="mt-4 space-y-2">
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
            <div className="mt-4 space-y-2">
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
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="cursor:pointer underline text-blue-500"
                >
                  Signup
                </Link>
                {""}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
