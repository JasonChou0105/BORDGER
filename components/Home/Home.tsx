import Carousel from "./Deals/Carousel";
import HomeDescription from "./Deals/DealDescription";
import Popular from "./Popular/Popular";

function Home() {
  const slides = [
    "https://i.abcnewsfe.com/a/bab555f3-a4a5-42d8-ae03-0b37f0729c9b/2024-12_Burger-Blitz_Press_1920x1080_1733857046014_hpMain_16x9.jpg?w=992",
    "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/b/2/a/b2a886decefdbbce8c6e54fbd2c994598a11514a.jpeg",
    "https://m.media-amazon.com/images/M/MV5BY2ZlNzNmNDYtMGM5OS00OTgwLTk5NzAtZjQ5ODhjZjhkZmJlXkEyXkFqcGc@._V1_.jpg",
  ];
  return (
    <div className="m-auto">
      <div className="flex flex-col w-full">
        <Carousel slides={slides} />
        <Popular />
      </div>
    </div>
  );
}

export default Home;
