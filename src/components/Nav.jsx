import React from "react";

const Nav = ({
  isCartOpen,
  toggleCart,
  cartItem,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const totalItems = cartItem.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <header className="md:max-w-[1200px] md:mx-auto">
      <nav
        className="
          flex justify-between items-center px-6 pt-4 pb-6 relative
          md:pb-4 md:border-b md:border-b-light-grayish-blue md:border-b-[2px]
        "
      >
        <div className="flex items-center gap-3">
          <button
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            className="pt-px md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <img src="/images/icon-menu.svg" alt="Open menu" />
          </button>
          <div className="flex items-center">
            <img src="/images/logo.svg" alt="Company logo" />
          </div>
          <div
            className={`
              bg-white w-2/3 h-screen absolute top-0 left-0 z-50 p-6 
              transition-transform transform duration-500 ease-in-out
              ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full"} 
              md:static md:flex md:h-auto md:w-auto md:bg-transparent md:transform-none md:translate-x-0
            `}
          >
            <button
              aria-label="Close menu"
              aria-expanded={!isMenuOpen}
              className="mb-10 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src="/images/icon-close.svg" alt="Close menu" />
            </button>
            <ul
              className="
                flex flex-col gap-4 font-bold cursor-pointer 
                md:flex-row md:gap-8 md:ml-10 md:font-normal md:text-xl md:text-dark-grayish-blue
              "
            >
              <li className="relative group">
                <a href="#">Collections</a>
                <span className="absolute left-1/2 -bottom-10 w-0 h-[4px] bg-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
              <li className="relative group">
                <a href="#">Men</a>
                <span className="absolute left-1/2 -bottom-10 w-0 h-[4px] bg-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
              <li className="relative group">
                <a href="#">Women</a>
                <span className="absolute left-1/2 -bottom-10 w-0 h-[4px] bg-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
              <li className="relative group">
                <a href="#">About</a>
                <span className="absolute left-1/2 -bottom-10 w-0 h-[4px] bg-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
              <li className="relative group">
                <a href="#">Contact</a>
                <span className="absolute left-1/2 -bottom-10 w-0 h-[4px] bg-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-5 md:gap-12">
          <button
            aria-label="Cart icon"
            aria-expanded={isCartOpen}
            className="cursor-pointer relative"
            onClick={toggleCart}
          >
            <img
              src="/images/icon-cart.svg"
              alt="Cart icon"
              className="md:w-[24px]"
            />
            <span className="absolute -top-2 -right-2 bg-orange text-white px-2 rounded-lg text-[10px] md:text-xs">
              {totalItems > 0 && totalItems}
            </span>
          </button>
          <img
            src="/images/image-avatar.png"
            alt="user icon"
            className="w-[24px] h-[24px] md:w-[50px] md:h-[50px] cursor-pointer md:hover:outline-2 md:hover:outline-orange md:rounded-full transition-all duration-100 ease-in-out"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
