import Link from "next/link";
import { useGlobalContext } from "@/context/GlobalContext";
import { it } from "node:test";

function Sidebar() {
  const { menu } = useGlobalContext();

  return (
    <div className=" w-1/4 pt-12 ">
      <div className="bg-stone-800 rounded-lg flex py-6 px-12 ml-16 my-6">
        <Link
          href={{ pathname: "/menu" }}
          className="font-bold text-white text-2xl transition-all ease-in flex flex-col duration-400 hover:bg-stone-700 hover:scale-105 py-2 px-4 rounded-lg"
        >
          Our Menu
        </Link>
      </div>
      <div className="bg-stone-800 rounded-lg flex flex-col text-neutral-300 text-base py-6 px-12 ml-16 my-6">
        {menu.map((item) => {
          return (
            <Link
              key={item.id}
              href={{
                pathname: "/menu",
                query: { itemId: item.id },
              }}
              className="my-1 w-full w-full transition-all ease-in duration-400 hover:bg-stone-700 hover:scale-105 py-2 px-4 rounded-lg "
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
