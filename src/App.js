import "./App.css";
import pp from "./media/ProfliePic.jpeg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div>
      <div className="w-full shadow-2xl">
        <nav className="w-11/12 max-w-screen-xl m-auto flex justify-between items-center h-[8vh]">
          <h1 className="text-2xl font-bold">Yusuf Yiğit Aydemir</h1>

          <ul className="flex">
            <li className="m-2 p-2 font-semibold">
              <a href="#">Home</a>
            </li>
            <li className="m-2 p-2 font-semibold">
              <a href="#">About</a>
            </li>
            <li className="m-2 p-2 font-semibold">
              <a href="#">Projects</a>
            </li>
            <li className="m-2 p-2 font-semibold">
              <a href="#">Blog</a>
            </li>
            <li className="m-2 p-2 font-semibold">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-full bg-[#F5F8FA] h-[92vh]">
        <div className="w-11/12 max-w-screen-xl m-auto py-10">
          <div className="w-full flex mt-20 flex-col justify-center items-center">
            <img src={pp} alt="Profile Picture" className="w-1/4 rounded-full p-2 border-2 border-gray hover:border-black" />

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-7xl font-extrabold">
                Front-End React Developer
              </h1>
              <p className="py-5 leading-7 tracking-wide text-xl">
                Hi, I'm Stefan Topalovic. A passionate Front-end React
                Developer based in Belgrade, Serbia.
              </p>

              <ul className="flex items-center">
                <li className="mr-2">
                  <a href="#" className="text-4xl">
                    <FaLinkedin></FaLinkedin>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-4xl">
                    <FaGithub></FaGithub>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
