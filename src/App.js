import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import pp from "./media/ProfliePic.jpeg";
import coinPort from "./media/CoinPort.png";
import typeRapid from "./media/TypeRapid.jpg";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "./media/about.json";
import resume from "./media/resume.pdf";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";
import { AiFillMediumSquare } from "react-icons/ai";

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
                  href={resume}
                  target="blank"
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
              <img src={pp} alt="Profile" className="w-full z-0" />
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
              <FaLinkedin className="text-black dark:text-white"></FaLinkedin>
            </a>
            <a href="https://github.com/yigitaydemir" target="blank">
              <FaGithub className="text-black dark:text-white"></FaGithub>
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
            <h3 className="text-3xl sm:text-5xl py-1 text-teal-600">
              About Me
            </h3>
            <p className="text-md sm:text-lg pt-2 leading-8 text-gray-800 dark:text-white">
              Greetings! I am Yiğit, a dedicated Frontend Developer with a
              strong focus on React.js and Tailwind CSS, complemented by Google
              Firebase for robust backend solutions. I am passionate about
              crafting engaging user experiences and transforming designs into
              functional web applications. In addition, I am always looking for new
              ways to integrate AI into my workflow and increase my
              productivity. I thrive in collaborative environments and always
              seek opportunities to grow and make a positive impact through my
              work. Feel free to{" "}
              <a href="#contact" className="text-teal-600">
                contact me
              </a>{" "}
              anytime on any platform.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="w-11/12 max-w-screen-xl m-auto pt-20 pb-10 sm:pb-0 min-h-screen"
        >
          <div className="py-5">
            <h3 className="text-3xl sm:text-5xl py-1 text-teal-600">
              Projects
            </h3>
            <p className="dark:text-white text-lg">
              I take pride in presenting the applications that showcases my
              expertise in ReactJS, exemplifying my capabilities as a skilled
              developer.
            </p>
          </div>

          <div className="w-full shadow-lg p-10 rounded-xl mt-10 dark:bg-white">
            <div className="relative flex flex-col xl:flex-row">
              <div className="w-full xl:w-2/5 h-[21rem] sm:h-[24rem] md:h-[27rem] lg:h-[30rem] xl:h-[33rem] overflow-hidden">
                <img src={coinPort} alt="" className="rounded-lg coinportimg" />
              </div>

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
                      href="https://react.dev/"
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
                      href="https://firebase.google.com/docs/firestore/quickstart?hl=en"
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

          <div className="w-full shadow-lg p-10 rounded-xl mt-10 dark:bg-white">
            <div className="relative flex flex-col xl:flex-row">
              <div className="w-full xl:w-2/5 h-[21rem] sm:h-[24rem] md:h-[27rem] lg:h-[30rem] xl:h-[33rem] overflow-hidden">
                <img
                  src={typeRapid}
                  alt=""
                  className="rounded-lg coinportimg"
                />
              </div>

              <div className="w-full xl:w-3/5 xl:px-5">
                <h1 className="pt-10 xl:pt-0 text-2xl">TypeRapid</h1>
                <p className="py-5 text-md leading-7 text-gray-800">
                  Typerapid represents a dynamic speed typing game that
                  challenges players to achieve peak performance by accurately
                  typing words before they elapse from the screen. Adding to the
                  complexity, words gradually increase in size and velocity as
                  players advance through the game, testing and enhancing their
                  typing agility. Furthermore, we encourage you to record your
                  scores, securing your place on the leaderboard, and enabling
                  you to engage in friendly competition with your peers.
                </p>
                <ul className="list-disc px-4 text-md leading-7 text-gray-800">
                  <li>
                    The game is developed with{" "}
                    <a
                      href="https://react.dev/"
                      target="blank"
                      className="text-cyan-800"
                    >
                      ReactJS
                    </a>
                    , a highly capable and widely adopted JavaScript framework
                    renowned for its robust features and capabilities.
                  </li>
                  <li>
                    The words within the game are dynamically retrieved in a
                    randomized manner from the{" "}
                    <a
                      href="https://random-word-api.herokuapp.com/home"
                      target="blank"
                      className="text-cyan-800"
                    >
                      Random Word API
                    </a>
                    , enhancing the unpredictability and diversity of gameplay
                    elements.
                  </li>
                  <li>
                    The game's animations are created using the{" "}
                    <a
                      href="https://www.framer.com/motion/"
                      target="blank"
                      className="text-cyan-800"
                    >
                      Framer Motion library
                    </a>
                    , allowing for the creation of visually engaging and dynamic
                    user experiences.
                  </li>
                  <li>
                    Styling is implemented using{" "}
                    <a
                      href="https://tailwindcss.com/"
                      target="blank"
                      className="text-cyan-800"
                    >
                      TailwindCSS
                    </a>
                    , to ensure a polished and consistent visual appearance.
                  </li>
                  <li>
                    In order to maintain an up-to-date record of leaderboard
                    scores, a secure and reliable storage solution is
                    integrated, using{" "}
                    <a
                      href="https://firebase.google.com/docs/firestore/quickstart?hl=en"
                      target="blank"
                      className="text-cyan-800"
                    >
                      Google Firestore
                    </a>
                    , a scalable NoSQL database service provided by Google Cloud
                    Platform.
                  </li>
                </ul>

                <ul className="flex justify-center">
                  <li className="m-1 p-1 flex items-center text-xl">
                    <a
                      href="https://github.com/yigitaydemir/typerapid"
                      target="blank"
                      className="p-1"
                    >
                      Code
                    </a>
                    <FaGithub></FaGithub>
                  </li>
                  <li className="m-1 p-1 flex items-center text-xl">
                    <a
                      href="https://typerapid.vercel.app/"
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
          className="w-11/12 max-w-screen-xl m-auto min-h-screen flex flex-col justify-center pt-10 sm:pt-0 items-center sm:items-start"
        >
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-teal-600 font-bold text-center sm:text-left">
            Interested? <br /> Let's Get in Touch!
          </p>
          <p className="py-10 w-3/4 text-md sm:text-lg md:text-xl lg:text-2xl leading-8 text-gray-800 dark:text-white">
            To reach me quickly, please email me directly at{" "}
            <span className="underline">yusufyigitaydemir@gmail.com</span>.
            Alternatively, you can also check out some of my related links
            below.
          </p>

          <ul className="flex justify-between items-center w-3/4 sm:w-2/4">
            <li className="sm:mr-4 md:mr-10 sm:pr-4 md:pr-10 text-4xl sm:text-5xl dark:text-white">
              <a
                href="https://www.linkedin.com/in/yusufyaydemir/"
                target="blank"
              >
                <FaLinkedin className=" dark:text-white"></FaLinkedin>
              </a>
            </li>
            <li className="sm:mr-4 md:mr-10 sm:pr-4 md:pr-10 text-4xl sm:text-5xl dark:text-white">
              <a href="https://github.com/yigitaydemir" target="blank">
                <FaGithub className=" dark:text-white"></FaGithub>
              </a>
            </li>
            <li className="sm:mr-4 md:mr-10 sm:pr-4 md:pr-10 text-4xl sm:text-5xl dark:text-white">
              <a href="mailto:yusufyigitaydemir@gmail.com">
                <FaRegEnvelope></FaRegEnvelope>
              </a>
            </li>
            <li className="sm:mr-4 md:mr-10 sm:pr-4 md:pr-10 text-4xl sm:text-5xl dark:text-white">
              <a href="https://leetcode.com/yigitaydemir/" target="blank">
                <SiLeetcode></SiLeetcode>
              </a>
            </li>
            <li className="sm:mr-4 md:mr-10 sm:pr-4 md:pr-10 text-4xl sm:text-5xl dark:text-white">
              <a href="https://medium.com/@yusufyaydemir" target="blank">
                <AiFillMediumSquare></AiFillMediumSquare>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;
