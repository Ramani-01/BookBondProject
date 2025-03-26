import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo_Bookbond.png"; // Ensure logo import is correct

function MyBooks() {
  return (
    <div>
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-4">
        {/* Navigation without background */}
        <div className="navbar flex items-center">
          <img src={logo} alt="Logo" className="logo" />
          <ul className="flex space-x-6">
            {[
              { name: "Home", path: "/Login" },
              { name: "MyBooks", path: "/mybooks" },
              { name: "Community", path: "/community" },
              { name: "About Us", path: "/AboutUs" }
            ].map((item, index) => (
              <li key={index} className="cursor-pointer">
                <NavLink
                  to={item.path}
                  className="scroll-container overflow-x-auto whitespace-nowrap scroll-smooth flex gap-4 snap-x snap-mandatory hide-scrollbar"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default MyBooks;
