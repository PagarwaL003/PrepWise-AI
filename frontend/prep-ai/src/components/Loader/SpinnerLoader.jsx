import React from "react";

const SpinnerLoader = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-amber-400"
        viewBox="0 0 100 101"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.59c0 27.61-22.39 50-50 50s-50-22.39-50-50 22.39-50 50-50 50 22.39 50 50zm-9.08 0c0-22.57-18.35-40.92-40.92-40.92S9.08 28.02 9.08 50.59s18.35 40.92 40.92 40.92 40.92-18.35 40.92-40.92z"
          fill="currentColor"
        />
        <path
          d="M93.97 39.04c2.36-.63 3.76-3.05 2.73-5.25A49.99 49.99 0 0 0 50 0C22.39 0 0 22.39 0 50c0 2.65 2.15 4.8 4.8 4.8h5.09c2.65 0 4.8-2.15 4.8-4.8 0-22.57 18.35-40.92 40.92-40.92 16.63 0 31.06 9.86 37.52 24.09 1.03 2.2-.37 4.62-2.73 5.25z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerLoader;
