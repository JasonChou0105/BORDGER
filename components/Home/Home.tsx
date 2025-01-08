import Carousel from "./Carousel/Carousel";
import HomeDescription from "./HomeDescription";

function Home() {
  const slides = [
    "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/9/e/3/9e336572e36abe7ae915e9c11f3768a99f3beca2.jpeg",
    "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/b/2/a/b2a886decefdbbce8c6e54fbd2c994598a11514a.jpeg",
    "https://m.media-amazon.com/images/M/MV5BY2ZlNzNmNDYtMGM5OS00OTgwLTk5NzAtZjQ5ODhjZjhkZmJlXkEyXkFqcGc@._V1_.jpg",
  ];
  return (
    <div className="m-auto pt-8">
      <div className="flex w-full">
        <Carousel slides={slides} />
        <HomeDescription />
      </div>
    </div>
  );
}

export default Home;
