"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of a menu item and category
type MenuItem = {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
};

type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

// Define the shape of your context state
interface GlobalContextType {
  theme: string;
  setTheme: (theme: string) => void;
  menu: MenuCategory[];
  setMenu: (menu: MenuCategory[]) => void;
}

// Create the context with an undefined default value
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create the provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light"); // Example global state
  const [menu, setMenu] = useState<MenuCategory[]>([
    {
      id: "featured-items",
      title: "Featured",
      items: [
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
          name: "Supa Dupa Borger",
          price: 12.49,
          imageUrl:
            "https://static.tossdown.com/images/b91efb91-54da-42d2-858a-5c84b60a5e22.webp",
          description:
            "Double the beef, double the cheese, and crispy bacon for extra indulgence.",
        },
      ],
    },
    {
      id: "burgers",
      title: "Burgers",
      items: [
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
          name: "Supa Dupa Borger",
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
          name: "Chicken Burger",
          price: 11.99,
          imageUrl:
            "https://static.tossdown.com/images/901efc3f-95a4-446b-8d68-fa48d2d32bb9.webp",
          description:
            "A tender grilled chicken patty topped with sautéed mushrooms and Swiss cheese.",
        },
      ],
    },
    {
      id: "wraps",
      title: "Wraps",
      items: [
        {
          name: "Cheesy Bacon Wrap",
          price: 13.49,
          imageUrl:
            "https://static.tossdown.com/images/c92dd89c-753b-4161-9e97-e01b1443e7ad.webp",
          description: "Loaded with crispy bacon and melted cheddar cheese.",
        },
        {
          name: "Cheesy Beef Wrap",
          price: 13.49,
          imageUrl:
            "https://static.tossdown.com/images/c92dd89c-753b-4161-9e97-e01b1443e7ad.webp",
          description: "Loaded with crispy bacon and melted cheddar cheese.",
        },
        {
          name: "Grilled Chicken Wrap",
          price: 9.99,
          imageUrl:
            "https://static.tossdown.com/images/dcd7531d-6e46-497b-88f7-9e3042b5e227.webp",
          description:
            "A flavorful grilled chicken wrap with fresh veggies and creamy dressing.",
        },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [
        {
          name: "Poutine",
          price: 10.99,
          imageUrl:
            "https://static.tossdown.com/images/2a2fb06a-80b2-4baa-8388-3ea25f9bf147.webp",
          description: "Fries topped with cheese curds and gravy.",
        },
        {
          name: "French Fries",
          price: 3.99,
          imageUrl:
            "https://static.tossdown.com/images/301fc595-5aa9-4108-b4a0-5ea053d63c74.webp",
          description: "Crispy and golden, perfect as a side for any meal.",
        },
        {
          name: "More Fries?",
          price: 3.99,
          imageUrl:
            "https://static.tossdown.com/images/301fc595-5aa9-4108-b4a0-5ea053d63c74.webp",
          description: "Crispy and golden, perfect as a side for any meal.",
        },
        {
          name: "Chicken Tenders",
          price: 5.49,
          imageUrl:
            "https://static.tossdown.com/images/2d2ba9fe-dcbb-4cde-bb9a-a70a0a1a8dff.webp",
          description: "Crispy tenders served with dipping sauce.",
        },
      ],
    },
    {
      id: "drinks",
      title: "Drinks",
      items: [
        {
          name: "Coca-Cola",
          price: 1.99,
          imageUrl:
            "https://static.vecteezy.com/system/resources/previews/037/751/381/original/coca-cola-plastic-bottle-isolated-on-transparent-background-free-png.png",
          description: "Classic Coca-Cola, served chilled.",
        },
        {
          name: "Pepsi",
          price: 1.99,
          imageUrl:
            "https://www.freeiconspng.com/thumbs/pepsi-png/pepsi-png-image-22.png",
          description: "Refreshing Pepsi, served chilled.",
        },
        {
          name: "Nestea",
          price: 2.49,
          imageUrl:
            "https://www.ordercured.com/cdn/shop/files/nestea.png?v=1716300754",
          description: "Iced tea with a hint of lemon flavor.",
        },
      ],
    },
    {
      id: "kids-meals",
      title: "Kids Meals",
      items: [
        {
          name: "Chicken TENIDIES",
          price: 5.49,
          imageUrl:
            "https://static.tossdown.com/images/2d2ba9fe-dcbb-4cde-bb9a-a70a0a1a8dff.webp",
          description: "Crispy tenders served with dipping sauce.",
        },
        {
          name: "Kids Meal",
          price: 8.49,
          imageUrl:
            "https://static.tossdown.com/images/bca3c781-4e66-4acd-b90d-adc7f19936f0.webp",
          description: "A fun-sized burger with a side and drink.",
        },
        {
          name: "Chicken Tenders",
          price: 5.49,
          imageUrl:
            "https://static.tossdown.com/images/2d2ba9fe-dcbb-4cde-bb9a-a70a0a1a8dff.webp",
          description: "Crispy tenders served with dipping sauce.",
        },
      ],
    },
  ]);

  return (
    <GlobalContext.Provider value={{ theme, setTheme, menu, setMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
