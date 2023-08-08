import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import pp from "./media/ProfliePic.jpeg";
import web1 from "./media/web1.png";
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
              {/* <li className="mx-2 dark:text-white">Home</li>
              <li className="mx-2 dark:text-white">About</li>
              <li className="mx-2 dark:text-white">Projects</li>
              <li className="mx-2 dark:text-white">Blog</li>
              <li className="mx-2 dark:text-white">Contact</li> */}

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
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 mb-10 sm:mb-20 overflow-hidden md:w-80 md:h-80">
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

        <section className="w-11/12 max-w-screen-xl my-10 lg:my-0 min-h-screen m-auto flex flex-col xl:flex-row items-center lg:items-center gap-10">
          <div>
            <Lottie
              animationData={animationData}
              className="w-3/4 lg:w-96 m-auto lg:m-0 bg-gray-200 rounded-md"
            ></Lottie>
          </div>
          <div className="w-full lg:w-3/4 pl-0 lg:pl-10 flex flex-col justify-center">
            <h3 className="text-3xl py-1">About Me</h3>
            <p className="text-md pt-2 leading-8 text-gray-800">
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

        </section>

        <section className="w-11/12 max-w-screen-xl m-auto pb-10">
          <div className="py-5">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p>
              I take pride in presenting the applications that showcases my
              expertise in ReactJS, exemplifying my capabilities as a skilled
              developer.
            </p>
          </div>

          <div className="w-full shadow-lg p-10 rounded-xl mt-10">
            <div className="flex flex-col md:flex-row">
              <img src={web1} alt="" className="w-full md:w-2/5 rounded-lg" />

              <div className="w-full md:w-3/5 md:px-5">
                <h1 className="pt-10 md:pt-0">Project Name</h1>
                <p className="py-5">
                  The primary purpose of this application is to provide users
                  with the ability to monitor cryptocurrency prices and assess
                  their historical performance through interactive charts. By
                  signing up with your Google account, you can effortlessly
                  personalize your experience by adding your preferred
                  cryptocurrencies to a designated watchlist.
                </p>
                <ul className="list-disc px-4">
                  <li>
                    The application is developed using ReactJS, a powerful
                    JavaScript framework.
                  </li>
                  <li>
                    Cryptocurrency prices are fetched from the Coinranking API,
                    ensuring real-time and accurate data.
                  </li>
                  <li>
                    The fetched data is visualized using Tradingview Lightweight
                    Charts, offering interactive and intuitive charting
                    capabilities.
                  </li>
                  <li>
                    Styling is implemented with the assistance of TailwindCSS
                    and Flowbite, enhancing the application's aesthetic appeal
                    and user interface.
                  </li>
                  <li>
                    Authentication functionality is implemented using Google
                    Firebase, providing secure and reliable user authentication
                    through Google accounts.
                  </li>
                  <li>
                    Watchlist feature powered by Google Firestore database,
                    enabling users to track and manage their favorite
                    cryptocurrencies in real-time within their portfolio.
                  </li>
                </ul>

                <ul className="flex justify-center">
                  <li className="m-1 p-1 flex items-center text-xl">
                    <a href="#" className="p-1">
                      Code
                    </a>
                    <FaGithub></FaGithub>
                  </li>
                  <li className="m-1 p-1 flex items-center text-xl">
                    <a href="#" className="p-1">
                      Demo
                    </a>
                    <ImNewTab></ImNewTab>
                  </li>
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
