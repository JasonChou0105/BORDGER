import Link from "next/link";

function Sidebar() {
  return (
    <div className="-z-10 w-1/4 pt-12">
      <div className="bg-stone-800 font-bold rounded-lg flex flex-col text-white text-2xl py-8 px-16 ml-16 my-6">
        Our Menu
      </div>
      <div className="bg-stone-800 rounded-lg flex flex-col text-neutral-300 text-base py-8 px-16 ml-16 my-6">
        <div className="my-3">
          <Link href="" className="">
            Featured
          </Link>
        </div>
        <div className="my-3">
          <Link href="" className="">
            Burgers
          </Link>
        </div>
        <div className="my-3">
          <Link href="" className="">
            Wraps
          </Link>
        </div>
        <div className="my-3">
          <Link href="" className="">
            Sides
          </Link>
        </div>
        <div className="my-3">
          <Link href="" className="">
            Drinks
          </Link>
        </div>
        <div className="my-3">
          <Link href="" className="">
            Desserts
          </Link>
        </div>
        <div className="my-3">
          <Link href="" className="">
            Kids meals
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
