import Logo from "./Logo";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex md:justify-between justify-around items-center max-w-screen-lg h-[20vh] z-10 absolute md:right-0 right-0">
      <Logo />
      <span className="text-lg mb-6 mr-4 md:mb-1 md:text-3xl">
        <HiMenuAlt2 />
      </span>
    </div>
  );
};

export default Navbar;
