import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import pp from "./media/ProfliePic.jpeg";
import web1 from "./media/web1.png";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "./media/about.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900">
        <section id="home" className="min-h-screen relative">
          <div className="w-full shadow-xl dark:bg-gray-800 fixed z-10 bg-white">
            <nav className="w-full sm:w-11/12 max-w-screen-xl m-auto py-5 px-5 sm:px-0 flex justify-between items-center">
              <h1 className="text-xl dark:text-white">Yusuf Yiğit Aydemir</h1>

              <div className="flex items-center">
                <ul className="hidden sm:flex sm:items-center">
                  <li>
                    <Link
                      className="mx-2 cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 duration-300 dark:text-white"
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="mx-2 cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 duration-300 dark:text-white"
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="mx-2 cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 duration-300 dark:text-white"
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/@yusufyaydemir"
                      className="mx-2 cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 duration-300 dark:text-white"
                      target="blank"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <Link
                      className="mx-2 cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 duration-300 dark:text-white"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                {showMenu ? (
                  <RxCross2
                    onClick={handleMenu}
                    className="text-3xl mx-2 sm:hidden cursor-pointer"
                  ></RxCross2>
                ) : (
                  <GiHamburgerMenu
                    onClick={handleMenu}
                    className="text-3xl mx-2 sm:hidden cursor-pointer"
                  ></GiHamburgerMenu>
                )}

                <a
                  href="#"
                  className="mx-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded"
                >
                  Resume
                </a>

                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                ></BsFillMoonStarsFill>
              </div>
            </nav>

            <div className={showMenu ? "duration-500" : "duration-500 hidden"}>
              <ul className="flex flex-col justify-center items-center text-center">
                <li className="p-2 w-full border-y border-black">
                  <Link
                    className="cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 duration-300 dark:text-white"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="p-2 w-full border-b border-black">
                  <Link
                    className="cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 duration-300 dark:text-white"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleMenu}
                  >
                    About
                  </Link>
                </li>
                <li className="p-2 w-full border-b border-black">
                  <Link
                    className="cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 duration-300 dark:text-white"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleMenu}
                  >
                    Projects
                  </Link>
                </li>
                <li className="p-2 w-full border-b border-black">
                  <a
                    href="https://medium.com/@yusufyaydemir"
                    className="mx-2 cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 duration-300 dark:text-white"
                    target="blank"
                    onClick={handleMenu}
                  >
                    Blog
                  </a>
                </li>
                <li className="p-2">
                  <Link
                    className="cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 duration-300 dark:text-white"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className=" w-11/12 max-w-screen-xl m-auto text-center py-10">
            <div className="mt-20 relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 mb-10 sm:mb-20 overflow-hidden md:w-80 md:h-80">
              <img src={pp} alt="Profile Picture" className="w-full z-0" />
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
            <a href="https://www.linkedin.com/in/yusufyaydemir/" target="blank">
              <FaLinkedin className="text-[#0e76a8] dark:text-white"></FaLinkedin>
            </a>
            <a href="https://github.com/yigitaydemir" target="blank">
              <FaGithub className="text-[#c9510c] dark:text-white"></FaGithub>
            </a>
          </div>
        </section>

        <section
          id="about"
          className="w-11/12 max-w-screen-xl min-h-screen m-auto flex flex-col xl:flex-row items-center justify-center pt-[8rem] sm:pt-0"
        >
          <div>
            <Lottie
              animationData={animationData}
              className="w-3/4 sm:w-2/4 md:w-1/4 lg:w-96 m-auto lg:m-0 bg-gray-200 rounded-md"
            ></Lottie>
          </div>
          <div className="w-full lg:w-3/4 pl-0 lg:pl-10 flex flex-col justify-center text-center sm:text-left">
            <h3 className="text-3xl py-1 text-teal-600">About Me</h3>
            <p className="text-md pt-2 leading-8 text-gray-800 dark:text-white">
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

        <section
          id="projects"
          className="w-11/12 max-w-screen-xl m-auto pt-20 pb-10 sm:pb-0 min-h-screen"
        >
          <div className="py-5">
            <h3 className="text-3xl py-1 text-teal-600">Projects</h3>
            <p className="dark:text-white">
              I take pride in presenting the applications that showcases my
              expertise in ReactJS, exemplifying my capabilities as a skilled
              developer.
            </p>
          </div>

          <div className="w-full shadow-lg p-10 rounded-xl mt-10 dark:bg-white">
            <div className="flex flex-col xl:flex-row">
              <img src={web1} alt="" className="w-full xl:w-2/5 rounded-lg" />

              <div className="w-full xl:w-3/5 xl:px-5">
                <h1 className="pt-10 xl:pt-0 text-2xl">CoinPort</h1>
                <p className="py-5 text-md leading-7 text-gray-800">
                  The primary purpose of this application is to provide users
                  with the ability to monitor cryptocurrency prices and assess
                  their historical performance through interactive charts. By
                  signing up with your Google account, you can effortlessly
                  personalize your experience by adding your preferred
                  cryptocurrencies to a designated watchlist.
                </p>
                <ul className="list-disc px-4 text-md leading-7 text-gray-800">
                  <li>
                    The application is developed using{" "}
                    <a
                      href="https://legacy.reactjs.org/"
                      target="blank"
                      className="text-cyan-800"
                    >
                      ReactJS
                    </a>
                    , a powerful JavaScript framework.
                  </li>
                  <li>
                    Cryptocurrency prices are fetched from the{" "}
                    <a
                      href="https://developers.coinranking.com/api"
                      target="blank"
                      className="text-cyan-800"
                    >
                      Coinranking API
                    </a>
                    , ensuring real-time and accurate data.
                  </li>
                  <li>
                    The fetched data is visualized using{" "}
                    <a
                      href="https://www.tradingview.com/lightweight-charts/"
                      target="blank"
                      className="text-cyan-800"
                    >
                      Tradingview Lightweight Charts
                    </a>
                    , offering interactive and intuitive charting capabilities.
                  </li>
                  <li>
                    Styling is implemented with the assistance of{" "}
                    <a
                      href="https://tailwindcss.com/"
                      target="blank"
                      className="text-cyan-800"
                    >
                      TailwindCSS
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.flowbite-react.com/"
                      target="blank"
                      className="text-cyan-800"
                    >
                      Flowbite
                    </a>
                    , enhancing the application's aesthetic appeal and user
                    interface.
                  </li>
                  <li>
                    Authentication functionality is implemented using{" "}
                    <a
                      href="https://firebase.google.com/"
                      target="blank"
                      className="text-cyan-800"
                    >
                      Google Firebase
                    </a>
                    , providing secure and reliable user authentication through
                    Google accounts.
                  </li>
                  <li>
                    Watchlist feature powered by{" "}
                    <a
                      href="https://firebase.google.com/docs/firestore/quickstart?hl=tr"
                      target="blank"
                      className="text-cyan-800"
                    >
                      Google Firestore
                    </a>{" "}
                    database, enabling users to track and manage their favorite
                    cryptocurrencies in real-time within their portfolio.
                  </li>
                </ul>

                <ul className="flex justify-center">
                  <li className="m-1 p-1 flex items-center text-xl">
                    <a
                      href="https://github.com/yigitaydemir/coinport"
                      target="blank"
                      className="p-1"
                    >
                      Code
                    </a>
                    <FaGithub></FaGithub>
                  </li>
                  <li className="m-1 p-1 flex items-center text-xl">
                    <a
                      href="https://coinport.vercel.app/"
                      target="blank"
                      className="p-1"
                    >
                      Demo
                    </a>
                    <ImNewTab></ImNewTab>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-11/12 max-w-screen-xl m-auto min-h-screen flex flex-col justify-center pt-10 sm:pt-0"
        >
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-teal-600 font-bold">Interested? <br /> Let's Get in Touch!</p>
          <p className="py-10 w-3/4 text-md sm:text-lg md:text-xl lg:text-2xl leading-8 text-gray-800 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
            debitis iste fugit impedit placeat eos, laudantium deleniti quam
            architecto saepe obcaecati quod assumenda laborum voluptas? At
            laborum neque totam?
          </p>

          <ul className="flex">
            <li className="mr-4 md:mr-10 pr-4 md:pr-10 text-4xl sm:text-5xl dark:text-white"><a href="#"><FaGithub></FaGithub></a></li>
            <li className="mr-4 md:mr-10 pr-4 md:pr-10 text-4xl sm:text-5xl dark:text-white"><a href="#"><FaGithub></FaGithub></a></li>
            <li className="mr-4 md:mr-10 pr-4 md:pr-10 text-4xl sm:text-5xl dark:text-white"><a href="#"><FaGithub></FaGithub></a></li>
            <li className="mr-4 md:mr-10 pr-4 md:pr-10 text-4xl sm:text-5xl dark:text-white"><a href="#"><FaGithub></FaGithub></a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;
