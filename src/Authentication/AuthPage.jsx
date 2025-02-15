import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white'>
      <div className='w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg text-center'>
        <h2 className='text-3xl font-bold mb-4'>
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form className='space-y-4'>
          {!isLogin && (
            <input
              type='text'
              placeholder='Username'
              className='w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          )}
          <input
            type='email'
            placeholder='Email'
            className='w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='password'
            placeholder='Password'
            className='w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button className='w-full p-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold'>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className='mt-4 text-sm'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className='text-blue-400 cursor-pointer hover:underline'
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Sign up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
