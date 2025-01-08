import BurgerCard from "./BurgerCard";

function Popular() {
  type Burger = {
    name: string;
    price: number;
    imageUrl: string;
    description: string;
  };

  const burgers: Burger[] = [
    {
      name: "Classic Cheeseburger",
      price: 8.99,
      imageUrl:
        "https://static.tossdown.com/images/546d1a5b-17b6-4b3f-9214-4cacac539013.webp",
      description:
        "A timeless classic with a juicy beef patty, cheddar cheese, lettuce, and tomato.",
    },
    {
      name: "Bacon Double Deluxe",
      price: 12.49,
      imageUrl:
        "https://static.tossdown.com/images/b91efb91-54da-42d2-858a-5c84b60a5e22.webp",
      description:
        "Double the beef, double the cheese, and crispy bacon for extra indulgence.",
    },
    {
      name: "Jalapeno Burger",
      price: 10.99,
      imageUrl:
        "https://static.tossdown.com/images/666b0c38-8e1d-4b22-9830-2658bf228ef3.webp",
      description:
        "Spice things up with jalapeños, pepper jack cheese, and a spicy mayo kick.",
    },
    {
      name: "Mushroom Chicken Burger",
      price: 11.99,
      imageUrl:
        "https://static.tossdown.com/images/901efc3f-95a4-446b-8d68-fa48d2d32bb9.webp",
      description:
        "A tender grilled chicken patty topped with sautéed mushrooms and Swiss cheese.",
    },
    {
      name: "BBQ Ranch Burger",
      price: 11.49,
      imageUrl:
        "https://static.tossdown.com/images/4ade1838-c250-4271-b925-8d30d00fc4c3.webp",
      description:
        "A smoky BBQ sauce, crispy onion rings, and creamy ranch for the ultimate flavor bomb.",
    },
    {
      name: "Random Ass Burger",
      price: 11.99,
      imageUrl:
        "https://static.tossdown.com/images/901efc3f-95a4-446b-8d68-fa48d2d32bb9.webp",
      description:
        "I acc can't design websites. This shi way too hard. I'll get it eventually.",
    },
  ];

  return (
    <div className="container flex flex-col justify-center items-center mx-auto p-32 px-48 text-white">
      <h1 className="text-4xl font-bold w-full border-b-2 p-4 mb-16">
        Popular Burgers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {burgers.map((burger) => (
          <BurgerCard key={burger.name} burger={burger} />
        ))}
      </div>
      <button className="transition-all ease-out duration-500 border-2 border-amber-600 hover:bg-transparent flex justify-center items-center w-40 h-12 m-16 p-5 rounded-lg bg-amber-600">
        <div className="font-bold text-center text-lg">Full Menu</div>
      </button>
    </div>
  );
}

export default Popular;
