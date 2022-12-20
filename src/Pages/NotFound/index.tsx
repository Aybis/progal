import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm90JTIwZm91bmR8ZW58MHx8MHx8&w=1000&q=80)`,
      }}
      className="relative flex justify-center items-center min-h-screen max-h-full bg-zinc-50">
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-white/40 backdrop-blur-sm">
        <h1 className="text-4xl font-semibold text-gray-900">
          Oops! The page you were looking for doesn't exist.
        </h1>
        <p className="text-lg font-normal text-gray-900 mt-2">
          You may have misstyped the address of the page may have moved.
        </p>

        <div className="relative mt-5">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-800 shadow-lg hover:shadow-gray-200 px-4 py-2 rounded-lg font-semibold flex justify-center items-center text-white hover:scale-105 transition-all duration-300">
            Back to the Home
          </button>
        </div>
      </div>
    </div>
  );
}
