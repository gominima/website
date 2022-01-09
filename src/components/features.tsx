import React from "react";
const Features = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="flex flex-col  w-full bg-black">
        <div className="text-2xl md:text-4xl flex justify-center text-gray-400 font-bold">
          Features
        </div>
        <div className="text-3xl md:text-7xl flex justify-center text-white font-semibold pt-2">
          Minimal Developer Experience
        </div>
        <div className="text-xl md:text-2xl flex justify-center text-white pt-2 text-center">
          Minima is made to be minimal and is shipped with plenty of utility to
          boost developer experience.
        </div>
        <div className="bg-black">
          <div className="container px-6 py-10 mx-auto">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="p-8 space-y-3 border-2 border-purple-400 dark:border-purple-300 rounded-xl">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Robust routing
                </h1>
                <p className="text-gray-500 dark:text-gray-300">
                  Routing in go is very flexible, its also very similar to chi
                  and other go-routers
                </p>
                <div className="inline-flex p-2 text-purple-500 capitalize transition-colors duration-200 transform bg-purple-100 rounded-full dark:bg-purple-500 dark:text-white hover:underline hover:text-purple-600 dark:hover:text-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-8 space-y-3 border-2 border-purple-400 dark:border-purple-300 rounded-xl">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Middleware support
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  As minima is fully based on net/http, it is fully compatible
                  to any native go middleware based on net/http
                </p>

                <div className="inline-flex p-2 text-purple-500 capitalize transition-colors duration-200 transform bg-purple-100 rounded-full dark:bg-purple-500 dark:text-white hover:underline hover:text-purple-600 dark:hover:text-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-8 space-y-3 border-2 border-purple-400 dark:border-purple-300 rounded-xl">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Lightweight
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Minima is based on net/http with no dependency outside of the
                  native go eco-system which makes it extremely light and fast
                </p>

                <div className="inline-flex p-2 text-purple-500 capitalize transition-colors duration-200 transform bg-purple-100 rounded-full dark:bg-purple-500 dark:text-white hover:underline hover:text-purple-600 dark:hover:text-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill=""
          fill-opacity="1"
          d="M0,192L60,165.3C120,139,240,85,360,101.3C480,117,600,203,720,208C840,213,960,139,1080,128C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Features;
