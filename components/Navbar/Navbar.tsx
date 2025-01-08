import React from "react";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5"; // Ionicons from React Icons

function Navbar() {
  //test
  return (
    <div className="w-full ">
      <div className="flex flex-row space-between items-center justify-between px-8 py-6 bg-black rounded-b-md text-white">
        <div className=" text-3xl font-black">BORDGER</div>
        <div className="flex flex-row justify-center items-center space-between">
          <div className="mx-8 flex flex-row space-between items-center justify-between">
            <div className="mx-4">Home</div>
            <div className="mx-4">Menu</div>
          </div>
          <div className="mx-8 flex flex-row space-between items-center justify-between">
            <IoCartOutline size={24} color="white" className="mx-2" />
            <div className="border-2 rounded-full aspect-square flex items-center justify-center mx-2">
              <IoPersonOutline size={20} color="white" className="m-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
