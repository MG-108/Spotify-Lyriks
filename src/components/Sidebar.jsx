import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10 h-full">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        onClick={() => handleClick && handleClick()}
        className=" my-8 ml-2 flex flex-row items-center justify-start text-sm font-medium text-gray-400 hover:text-cyan-400"
      >
        <item.icon className="mr-2 h-6 w-6" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* // OTHER DEVICES SIDEBAR */}
      <div className="hidden w-[240px] flex-col bg-[#191624] py-10 px-4 md:flex ">
        <Link to="/">
          <img src={logo} alt="logo" className="h-14 w-full object-contain" />
        </Link>
        <NavLinks />
      </div>

      {/* // MOBILE MENU ICON (close, open) */}
      <div className="absolute top-6 right-3 z-30 block md:hidden">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="mr-2 h-6 w-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="mr-2 h-6 w-6 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      {/* MOBILE SIDEBAR MENU */}
      <div
        className={`smooth-transition absolute top-0 z-10 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b]
         p-6 backdrop-blur-lg md:hidden ${
           mobileMenuOpen ? "left-0" : "-left-full"
         }`}
      >
        <img src={logo} alt="logo" className="h-14 w-full object-contain" />
        {/* close sidebar Menu */}
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
