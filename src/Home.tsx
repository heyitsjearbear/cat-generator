import { FC } from "react";
import myImage from './assets/cat-pic.webp'; // Replace with the actual path to your image file
import GenerationSettings from "./GenerationSettings";
const Home: FC = () => {
  return (
    <div>
      <GenerationSettings />
    </div>
  );
}

export default Home;