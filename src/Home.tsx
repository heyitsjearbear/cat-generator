import { FC } from "react";
import myImage from './assets/cat-pic.webp'; // Replace with the actual path to your image file

const Home: FC = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <img src={myImage} alt="cat-picture" /> {/* Add this line */}
    </div>
  );
}

export default Home;