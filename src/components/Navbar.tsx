import Logo from "./Logo";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center w-[40vw] h-[20vh] z-10 absolute right-0 ">
      <Logo />
      <span className="text-3xl">
        <HiMenuAlt2 />
      </span>
    </div>
  );
};

export default Navbar;
