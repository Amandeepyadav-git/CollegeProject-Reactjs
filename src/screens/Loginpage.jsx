import React, { useState } from "react";

const Loginpage = () => {
  const [switche, setSwitche] = useState(false);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);

  return (
    <>
      <div className="h-screen w-screen bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="w-[400px] backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 flex flex-col gap-6 text-white">
          <h1 className="text-4xl font-bold text-center mb-4">LOGIN</h1>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-200">Email</label>
            <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
              type="text"
              placeholder="Enter your Email"
              className="w-full p-3 rounded-md bg-transparent border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-sm text-gray-200">Password</label>
            <input
              value={pass}
              onChange={(e)=>{setPass(e.target.value)}}
              type={switche ? "text" : "password"}
              placeholder={switche ? "Set password" : "****"} 
              className="w-full p-3 rounded-md bg-transparent border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
            />
            <button
              onClick={() => setSwitche(!switche)}
              className="absolute right-3 top-9 text-sm text-blue-300 hover:text-white transition-all duration-200"
            >
              {switche ? "Hide" : "Show"}
            </button>
          </div>

          <div className="flex justify-between text-sm ">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500 text-black" /> Remember me
            </label>
            <a href="#" className="text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>
          <button onClick={()=>{setEmail("");setPass("");console.log(email,pass)}} className="mt-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-md p-3 text-white font-semibold">
            LOGIN
          </button>

          <div className="text-center mt-2 text-sm">
            <p>
              Don’t have an account?{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Sign Up
              </a>
            </p>
          </div>

          <p className="text-center text-gray-300 mt-2">Or log in with</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt=""
                className="h-8 w-8"
              />
            </a>
            <a href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfqRMiCMRs7msrEG1VS4d83xrM-l6vGeT4Q&s"
                alt=""
                className="h-8 w-8 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
