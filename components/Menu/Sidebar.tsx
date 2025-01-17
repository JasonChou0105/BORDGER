import Link from "next/link";

function Sidebar() {
  return (
    <div className=" w-1/4 pt-12 ">
      <div className="bg-stone-800 rounded-lg flex py-6 px-12 ml-16 my-6">
        <Link
          href={{ pathname: "/menu" }}
          className="font-bold text-white text-2xl hover:bg-stone-700 py-2 px-4 rounded-lg"
        >
          Our Menu
        </Link>
      </div>
      <div className="bg-stone-800 rounded-lg flex flex-col text-neutral-300 text-base py-6 px-12 ml-16 my-6">
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "featured-items" } }}
            className="hover:bg-stone-700 py-2 px-4 rounded-lg"
          >
            Featured
          </Link>
        </div>
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "burgers" } }}
            className="hover:bg-stone-700 py-2 px-4 rounded-lg"
          >
            Burgers
          </Link>
        </div>
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "wraps" } }}
            className="hover:bg-stone-700 py-2 px-4 rounded-lg"
          >
            Wraps
          </Link>
        </div>
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "sides" } }}
            className="hover:bg-stone-700 py-2 px-4 rounded-lg"
          >
            Sides
          </Link>
        </div>
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "drinks" } }}
            className="hover:bg-stone-700 py-2 px-4 rounded-lg"
          >
            Drinks
          </Link>
        </div>
        <div className="my-3">
          <Link
            href={{ pathname: "/menu", query: { itemId: "kids-meals" } }}
            className="hover:bg-stone-700 py-2 px-4 rounded-lg"
          >
            Kids meals
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
