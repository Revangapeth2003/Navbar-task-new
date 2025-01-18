import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Corrected the toggle function
  const ToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="container flex flex-col md:flex-row justify-between p-8 bg-slate-300 min-w-full">
      <div>
        <h1 className="text-2xl font-bold">Header</h1>
      </div>
      <div>
        <button
          onClick={ToggleMenu}
          className="absolute top-2 right-2 md:hidden"
        >
          &#9776;
        </button>
      </div>
      <div>
        <ul
          className={`${isMenuOpen ? "block" : "hidden"} 
        flex flex-row md:block  `}
        >
          <li className="mr-2 md:mr-8">Home</li>
          <li className="mr-2 md:mr-8">Contact</li>
          <li className="mr-2 md:mr-8">About</li>
          <li className="mr-2 md:mr-8">SignIn</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
