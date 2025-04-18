import "./App.css";
import { useState } from "react";
import useIsMobile from "./utils/useIsMobile";
import MobileGallery from "./components/MobileGallery";
import DesktopGallery from "./components/DesktopGallery";
import Nav from "./components/Nav";
import Cart from "./components/Cart";

function App() {
  const isMobile = useIsMobile();
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125,
    imageSrc: "/images/image-product-1-thumbnail.jpg",
  };

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const handleAddToCart = () => {
    if (quantity > 0) {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);

        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prevCart, { ...product, quantity }];
        }
      });

      setQuantity(0);
    }
  };

  return (
    <>
      {/* backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 h-screen w-full z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      {/* backdrop */}
      <Nav
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItem={cart}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {isCartOpen && (
        <Cart
          cartItems={cart}
          setCart={setCart}
          setIsCartOpen={setIsCartOpen}
        />
      )}
      <div className="md:max-w-[1080px] md:mx-auto md:mt-20 md:grid md:grid-cols-2 md:gap-34">
        {isMobile ? (
          <MobileGallery isMenuOpen={isMenuOpen} />
        ) : (
          <DesktopGallery />
        )}
        <section className="px-6 pb-20 md:flex md:flex-col md:justify-center md:px-0 md:pb-0">
          <h2 className="uppercase text-dark-grayish-blue font-bold mb-4">
            Sneaker Company
          </h2>
          <h1 className="text-very-dark-blue text-3xl font-bold mb-5 md:text-5xl md:mb-8">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-dark-grayish-blue mb-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-between items-center mb-6 md:flex-col md:gap-2 md:items-start md:mb-8">
            <div className="flex items-center">
              <p className="text-very-dark-blue text-3xl font-bold mr-4">
                $125.00
              </p>
              <p className="bg-black text-white rounded-md px-2 py-[0.5]">
                50%
              </p>
            </div>
            <p className="text-dark-grayish-blue line-through">$250.00</p>
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-4">
            <div className="flex justify-between items-center bg-light-grayish-blue rounded-md px-4 py-3 mb-4 md:mb-0">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))}
                className="w-3 h-3 bg-orange transition-all duration-100 hover:opacity-75 cursor-pointer"
                style={{
                  WebkitMaskImage: "url(/images/icon-minus.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskImage: "url(/images/icon-minus.svg)",
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                  marginTop: "8px",
                }}
              ></button>
              <p arila-live="polite" className="font-bold">
                {quantity}
              </p>
              <button
                aria-label="Increase quantity"
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-3 h-3 bg-orange transition-all duration-100 hover:opacity-75 cursor-pointer"
                style={{
                  WebkitMaskImage: "url(/images/icon-plus.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskImage: "url(/images/icon-plus.svg)",
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                }}
              ></button>
            </div>
            <button
              aria-label="Add to cart"
              className="flex items-center justify-center bg-orange rounded-md font-bold py-3 w-full shadow-lg shadow-orange-500/50 cursor-pointer md:col-span-2 md:shadow-none hover:bg-pale-orange transition-all duration-100 ease-in-out"
              onClick={handleAddToCart}
            >
              <img
                src="/images/icon-cart.svg"
                alt="Add to cart icon"
                className="icon-cart mr-3 w-[18px] h-[16px]"
              />
              Add to cart
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
