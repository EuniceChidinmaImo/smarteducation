import { navigationLinks } from "../config.js/data";


const Header = (currentPage) => (
    <div className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center mb-4">
            <div>
                <a href="/smarteducation/">
                                              <h1 
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700"
          >
            🎓 Smart-Edge Tuition
          </h1>
                </a>
            </div>
          <div className="flex justify-center items-center">
            
        <div className="flex gap-6 text-sm font-semibold flex-wrap overflow-x-auto">
          {navigationLinks.map((link) => (
            <a href={link.link}
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`whitespace-nowrap border-b-2 transition ${
                currentPage === link.id
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-600 border-transparent hover:text-blue-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
                  <button
            onClick={() => handlePlanSelect('Quick')}
            className="px-6 py-2 ml-4 bg-orange-500 text-white rounded font-semibold text-sm hover:bg-orange-600 transition"
          >
            Book Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
export default Header;