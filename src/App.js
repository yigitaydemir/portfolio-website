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

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Yusuf Yiğit Aydemir</h1>

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                ></BsFillMoonStarsFill>
              </li>
              <li>
                <a
                  href="#"
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Yusuf Yiğit Aydemir
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Front-End React Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              incidunt, delectus quidem voluptatum voluptatibus laudantium velit
              ipsa suscipit sunt deserunt ab consectetur natus atque. Obcaecati
              reprehenderit reiciendis repellat nulla dolor.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="#">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="#">
              <FaGithub></FaGithub>
            </a>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
            <img src={pp} alt="Profile Picture" className="w-full" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium placeat earum quam consectetur libero culpa sed dolore
              adipisci. <span className="text-teal-500">Mollitia</span> placeat
              accusantium reprehenderit tempora natus dicta quo dolor vitae
              consectetur voluptatum.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <img src={design} alt="" srcset="" className="w-24 h-24 m-auto" />
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
              <img src={code} alt="" srcset="" className="w-24 h-24 m-auto" />
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
              <img
                src={consulting}
                alt=""
                srcset=""
                className="w-24 h-24 m-auto"
              />
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
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vero eos beatae similique debitis possimus nihil.
              Blanditiis itaque autem ducimus. Quia, asperiores! Quasi soluta
              molestias repellat quisquam cum accusantium aspernatur.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                src={web1}
                alt=""
                srcset=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <img
                src={web2}
                alt=""
                srcset=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <img
                src={web3}
                alt=""
                srcset=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
