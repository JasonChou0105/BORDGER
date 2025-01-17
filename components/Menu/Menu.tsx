import Sidebar from "./Sidebar";
import MenuItem from "./MenuItem";
import { useGlobalContext } from "@/context/GlobalContext";

function Menu({ id }) {
  const { menu } = useGlobalContext();
  console.log(menu);
  let localMenu = menu;

  if (id) {
    localMenu = menu.filter(
      (cat) => cat.id.toLowerCase() === (id || "").toLowerCase()
    );
  }

  return (
    <div className="flex pt-24 text-white text-5xl">
      <Sidebar />
      <div className="container flex flex-col justify-center items-center mx-auto py-12 px-48 text-white w-3/4">
        {localMenu.map((category) => (
          <div key={category.id} className="w-full mb-24">
            <h1 className="text-4xl font-bold border-b-2 p-4 mb-6">
              {category.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <MenuItem key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
