import { useState } from "react";
import { navigationLinks } from "../config.js/data";
import SmartEdgeLogo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ handlePlanSelect }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <div className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src={SmartEdgeLogo}
              alt="SmartEdgeLogo"
              className="h-12 w-auto sm:h-16 cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center items-center gap-6">
            <div className="flex gap-6 text-sm font-semibold">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.link}
                  to={link.link}
                  className={({ isActive }) =>
                    `whitespace-nowrap border-b-2 transition ${
                      isActive
                        ? "text-blue-600 border-blue-600"
                        : "text-gray-600 border-transparent hover:text-blue-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <a
              href="https://calendly.com/peter-a-smartedgeeducationservicesltd/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2 bg-orange-500 text-white rounded font-semibold text-sm hover:bg-orange-600 transition whitespace-nowrap">
                Book Now
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 mt-4">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.link}
                  to={link.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-semibold py-2 border-b-2 transition ${
                      isActive
                        ? "text-blue-600 border-blue-600"
                        : "text-gray-600 border-transparent hover:text-blue-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  handlePlanSelect("Quick");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-6 py-3 bg-orange-500 text-white rounded font-semibold text-sm hover:bg-orange-600 transition mt-2"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
