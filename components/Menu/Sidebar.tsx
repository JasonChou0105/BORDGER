import Link from "next/link";

function Sidebar() {
  return (
    <div className=" w-1/4 pt-12">
      <Link
        href={{ pathname: "/menu" }}
        className="bg-stone-800 font-bold rounded-lg flex flex-col text-white text-2xl py-8 px-16 ml-16 my-6"
      >
        Our Menu
      </Link>
      <div className="bg-stone-800 rounded-lg flex flex-col text-neutral-300 text-base py-8 px-16 ml-16 my-6">
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "featured-items" } }}
            className=""
          >
            Featured
          </Link>
        </div>
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "burgers" } }}
            className=""
          >
            Burgers
          </Link>
        </div>
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "wraps" } }}
            className=""
          >
            Wraps
          </Link>
        </div>
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "sides" } }}
            className=""
          >
            Sides
          </Link>
        </div>
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "drinks" } }}
            className=""
          >
            Drinks
          </Link>
        </div>
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "kids-meals" } }}
            className=""
          >
            Kids meals
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
