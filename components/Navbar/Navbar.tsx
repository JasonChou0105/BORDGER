import React from "react";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5"; // Ionicons from React Icons

function Navbar() {
  //test
  return (
    <div className="w-full fixed z-30">
      <div className="flex flex-row space-between items-center justify-between px-8 py-6 bg-stone-900 rounded-b-md text-white">
        <div className=" text-3xl font-black">BORDGER</div>
        <div className="flex flex-row justify-center items-center space-between">
          <div className="mx-8 flex flex-row space-between items-center justify-between">
            <div className="mx-4">Home</div>
            <div className="mx-4">Menu</div>
          </div>
          <div className="mx-8 flex flex-row space-between items-center justify-between">
            <div className="border-2 rounded-full aspect-square flex items-center justify-center mx-2">
              <IoPersonOutline size={20} color="white" className="m-1" />
            </div>
            <button className="mx-2 flex rounded-full bg-amber-600 px-4 py-2 justify-center items-center border-2 border-amber-600 hover:bg-transparent transition-all ease-in-out duration-400">
              <IoCartOutline size={20} color="white" className="mr-2" />
              <div className="text-white text-sm">View Cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
