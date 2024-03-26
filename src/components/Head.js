import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://imgs.search.brave.com/FM06LUSQwkDjLI2vg0vA4FenQKAApNxJVAUi52mVdzo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8zMTQ0MzkzLTIw/MC5wbmc"
          alt="hamburger-menu"
        />
        <a href="/">
        <img
          className="h-11 mx-3 "
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube-logo"
          />
          </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-1 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 py-1 px-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          src="https://imgs.search.brave.com/VtuLHgcddG8TLDGhaJKjTncbbvvSBk_shiTxgEnwGFs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/YWJzdHJhY3QtdXNl/ci1mbGF0LTQucG5n"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
