import "./App.css";
import pp from "./media/ProfliePic.jpeg"

function App() {
  return (
    <div>
      <div className="h-screen">
        <div className="w-full h-[10%] flex justify-center items-center bg-yellow-300">
          <navbar className="w-11/12 max-w-screen-xl flex flex-col md:flex-row justify-between items-center">
            <h1>Yusuf Yiğit Aydemir</h1>

            <nav className="w-5/6 sm:w-3/5 lg:w-2/5">
              <ul className="w-full flex justify-between items-center">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Resume</a>
                </li>
              </ul>
            </nav>
          </navbar>
        </div>

        <div className="bg-blue-200 h-[90%] w-full flex justify-center items-start">
          <div className="bg-yellow-200 mt-20 w-11/12 max-w-screen-xl flex flex-col sm:flex-row">
            <div className="w-3/5">
              <h1>Front-End React Developer</h1>
              <p>Hi, I'm Yusuf Yiğit Aydemir. A passionate Front-End React developer based in Istanbul, Turkey.</p>
            </div>

            <div className="w-2/5">
              <img src={pp} alt="Profile Picture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
