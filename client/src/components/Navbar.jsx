import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  LogoIcon,
  PersonIcon,
  SearchIcon,
} from "../assets/svgs";

const Navbar = () => {
  const userInfo = useSelector((state) => state?.auth?.auth?.user);

  return (
    <header className="flex justify-between items-center">
      {/* logo */}
      <Link to={"/"} className="flex items-start gap-1 items-center">
        <LogoIcon />
        <span className="font-bold text-xl">airbnb</span>
      </Link>
      {/* middle area */}
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Any week</div>
        <div className="border-l border-gray-300"></div>
        <div>Add guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <SearchIcon />
        </button>
      </div>
      {/* right side */}
      <Link
        to={userInfo ? "/account" : "/login"}
        className="flex gap-2 items-center border border-gray-300 rounded-full py-2 px-4"
      >
        <HamburgerIcon />
        <div className="bg-gray-500 text-white rounded-full border-gray-500 overflow-hidden">
          <PersonIcon />
        </div>
        {!!userInfo && <div>{userInfo?.name}</div>}
      </Link>
    </header>
  );
};

export default Navbar;
