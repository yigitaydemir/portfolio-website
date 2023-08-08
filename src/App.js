import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import pp from "./media/ProfliePic.jpeg";
import design from "./media/design.png";
import code from "./media/code.png";
import consulting from "./media/consulting.png";
import web1 from "./media/web1.png";
import web2 from "./media/web2.png";
import web3 from "./media/web3.png";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "./media/about.json";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="w-11/12 max-w-screen-xl m-auto py-10 flex justify-between ">
            <h1 className="text-xl dark:text-white">Yusuf Yiğit Aydemir</h1>

            <ul className="flex items-center">
              <li className="mx-2 dark:text-white">Home</li>
              <li className="mx-2 dark:text-white">About</li>
              <li className="mx-2 dark:text-white">Projects</li>
              <li className="mx-2 dark:text-white">Blog</li>
              <li className="mx-2 dark:text-white">Contact</li>

              <li>
                <a
                  href="#"
                  className="mx-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded"
                >
                  Resume
                </a>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                ></BsFillMoonStarsFill>
              </li>
            </ul>
          </nav>

          <div className=" w-11/12 max-w-screen-xl m-auto text-center py-10">
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 mb-20 overflow-hidden md:w-80 md:h-80">
              <img src={pp} alt="Profile Picture" className="w-full" />
            </div>

            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Yusuf Yiğit Aydemir
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Front-End React Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Hi, I'm Yusuf Yiğit Aydemir. A passionate Front-end React
              Developer based in Istanbul, Turkey.
            </p>
          </div>

          <div className=" w-11/12 max-w-screen-xl m-auto text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="#">
              <FaLinkedin className="dark:text-white"></FaLinkedin>
            </a>
            <a href="#">
              <FaGithub className="dark:text-white"></FaGithub>
            </a>
          </div>
        </section>

        <section className="w-11/12 max-w-screen-xl m-auto flex flex-col lg:flex-row items-center lg:items-center">
          <div>
            <Lottie
              animationData={animationData}
              className="w-1/2 lg:w-96 m-auto lg:m-0"
            ></Lottie>
          </div>
          <div className="w-full lg:w-3/4 pl-0 lg:pl-10 flex flex-col justify-center">
            <h3 className="text-3xl py-1">About Me</h3>
            <h3 className="text-5xl py-1">A dedicated Front-end Developer based in Istanbul, Turkey</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Greetings! I am Yiğit, a dedicated Frontend Developer with a
              strong focus on React.js and Tailwind CSS, complemented by Google
              Firebase for robust backend solutions. I'm passionate about
              crafting engaging user experiences and transforming designs into
              functional web applications. Eager to expand my skill set, I'm on
              a journey to learn Redux, Next.js, TypeScript, testing, and cloud
              technologies like AWS. I thrive in collaborative environments and
              always seek opportunities to grow and make a positive impact
              through my work. Feel free to contact me anytime on any platform.
            </p>
          </div>

          {/* <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <img src={design} alt="" className="w-24 h-24 m-auto" />
              <h3 className="text-xl font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                maiores, eum iure, quibusdam officia, corrupti autem voluptas
                obcaecati dolore maxime eligendi unde culpa illum quos facilis
                laudantium! Ullam, explicabo? Quos.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <img src={code} alt="" className="w-24 h-24 m-auto" />
              <h3 className="text-xl font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                maiores, eum iure, quibusdam officia, corrupti autem voluptas
                obcaecati dolore maxime eligendi unde culpa illum quos facilis
                laudantium! Ullam, explicabo? Quos.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <img src={consulting} alt="" className="w-24 h-24 m-auto" />
              <h3 className="text-xl font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                maiores, eum iure, quibusdam officia, corrupti autem voluptas
                obcaecati dolore maxime eligendi unde culpa illum quos facilis
                laudantium! Ullam, explicabo? Quos.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div> */}
        </section>

        <section className="bg-red-200 w-11/12 max-w-screen-xl m-auto">
          <div className="py-5">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vero eos beatae similique debitis possimus nihil.
              Blanditiis itaque autem ducimus. Quia, asperiores! Quasi soluta
              molestias repellat quisquam cum accusantium aspernatur.
            </p>
          </div>

          <div className="bg-yellow-200 w-full">
            <div className="flex">
              <img src={web1} alt="" className="w-2/5"/>

              <div className="w-3/5">
                <h1>Project Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae error laboriosam corporis quaerat optio corrupti esse cum! Veniam ducimus sint perferendis reprehenderit et, accusantium temporibus necessitatibus eum natus deleniti?</p>
                <ul>
                  <li><a href="#">See Code</a></li>
                  <li><a href="#">See Demo</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
