import React from "react";
import webImage from "./assets/website.png";
import webDev from "./assets/web-development.svg";
import mobDev from "./assets/mobile-development.svg";
import designer from "./assets/Designer.svg";


function App() {
  return (
    // <--NavBar>
    <>
      <div className="container mx-auto bg-green-200">
        <nav className="flex justify-between items-center">
          <div>
            <a href="#">
              <img
                className="rounded-full h-12 w-12 mt-auto"
                src="https://picsum.photos/200"
                alt="random"
              />
            </a>
          </div>
          <ul className="flex space-x-6">
            <li>
              <a
                className="text-blue-600 hover:text-black font-medium"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-blue-600 hover:text-black font-medium"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="text-blue-600 hover:text-black font-medium"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-blue-600 hover:text-black font-medium"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-green-500 rounded-full px-6 py-2 text-black">
            SignUp
          </button>
        </nav>
      </div>
      {/* Hero section */}
      <div className=" container mx-auto  mt-12 flex items-center ">
        <div className="w-1/2 text-center">
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            tempore nobis sint quis voluptas quam aut et, assumenda facere modi
            saepe voluptates rem. Dolorem officia repellendus aperiam quam fugit
            neque!
          </p>
          <button className="bg-blue-600 rounded-lg text-white px-2 py-1 hover:text-black mt-6 font-medium">
            Get Started
          </button>
        </div>
        <div className="w-1/2 ">
          <img className="h-150 w-80 mx-auto " src={webImage} alt="" />
        </div>
      </div>
      {/* Main Section */}
      <div className="container mx-auto flex mt-12">
        <div className="w-1/3  text-center  flex flex-col  border-2">
          <h1 className="text-2xl">Website Deveploment</h1>
          <img className="h-40 w-40 mx-auto" src={webDev} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            reprehenderit illum ipsum perspiciatis veniam eaque possimus minus?
            Suscipit,
          </p>
        </div>

        <div className="w-1/3   text-center flex flex-col  border-2 gap-2">
          <h1 className="text-2xl">Mobile Deveploment</h1>
          <img className="h-40 w-40  mx-auto" src={mobDev} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            reprehenderit illum ipsum perspiciatis veniam eaque possimus minus?
            Suscipit,
          </p>
        </div>
        <div className="w-1/3  text-center flex flex-col  border-2">
          <h1 className="text-2xl">Designer</h1>
          <img className="h-40 w-40 mx-auto" src={designer} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            reprehenderit illum ipsum perspiciatis veniam eaque possimus minus?
            Suscipit,
          </p>
        </div>
      </div>
      {/* Pricing */}
      <div className=" container mx-auto mt-6">
        <div className="text-center">
          <h1 className="font-bold text-green-500 text-3xl">Pricing</h1>
          <p className="text-2xl">
            Offers multiple package yealry and monthly subcruption
          </p>
          <p className="text-2xl">Feature plans</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-300 w-80  mt-4 rounded-2xl hover:shadow-2xl text-center relative">
            <h1 className="font-bold text-5xl">$99</h1>
            <h2 className="text-black font-semibold mb-3">Basics</h2>
            <p>All the basic features here</p>
            <ul className="ml-6 mb-10">
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="CurrentColor"
                        d="M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>Core business plans</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="CurrentColor"
                        d="M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>Core business plans</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="CurrentColor"
                        d="M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>Core business plans</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="w-6 h-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        opacity="0.5"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                        fill="#1C274C"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>Customised features</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="w-6 h-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        opacity="0.5"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                        fill="#1C274C"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>Customised features</div>
              </li>
            </ul>
             <button className=" absolute bottom-0 transform translate-y-5  -translate-x-16   bg-blue-600 rounded-lg text-white px-2 py-1 hover:text-black mt-6 font-medium">
            Get Started
          </button>
          </div>
          <div className="bg-gray-300 relative  border-4 border-indigo-500 border-dashed    w-80  rounded-2xl hover:shadow-2xl text-center">
            <h1 className="font-bold text-5xl">$199</h1>
            <h2 className="text-black  font-semibold mb-3">Advanced plan</h2>
            <p>All the basic features here</p>
            <ul className="ml-6 mb-10">
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="CurrentColor"
                        d="M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>Core business plans</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="CurrentColor"
                        d="M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>Core business plans</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="CurrentColor"
                        d="M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>Core business plans</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="w-6 h-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        opacity="0.5"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                        fill="#1C274C"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>Customised features</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="w-6 h-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        opacity="0.5"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                        fill="#1C274C"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>Customised features</div>
               
              </li>
            </ul>
               <button className=" absolute bottom-0 transform translate-y-5  -translate-x-16   bg-blue-600 rounded-lg text-white px-2 py-1 hover:text-black mt-6 font-medium">
            Get Started
          </button>
          </div>
          <div className="bg-gray-300  border-4  relative mt-4   w-80  rounded-2xl hover:shadow-2xl text-center">
            <h1 className="font-bold text-5xl">$299</h1>
            <h2 className="text-black  font-semibold mb-3">Busines plan</h2>
            <p>All the basic features here</p>
            <ul className="ml-6 mb-10">
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="CurrentColor"
                        d="M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>Core business plans</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="CurrentColor"
                        d="M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>Core business plans</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="CurrentColor"
                        d="M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>Core business plans</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="w-6 h-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        opacity="0.5"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                        fill="#1C274C"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>Customised features</div>
              </li>
              <li className="flex items-center mt-4">
                <div>
                  <svg
                    className="w-6 h-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        opacity="0.5"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                        fill="#1C274C"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>Customised features</div>
              </li>
            </ul>
               <button className=" absolute bottom-0 transform translate-y-5  -translate-x-16   bg-blue-600 rounded-lg text-white px-2 py-1 hover:text-black mt-6 font-medium">
            Get Started
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
