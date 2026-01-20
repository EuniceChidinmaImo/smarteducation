const Footer = () => (
    <div className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h4 className="text-lg font-bold mb-4">Ed-Heads Tuition - Derby</h4>
          <p className="text-sm text-gray-400">Personalized tuition for every child.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm">
            <p className="cursor-pointer hover:text-orange-400" onClick={() => setCurrentPage('about')}>About Us</p>
            <p className="cursor-pointer hover:text-orange-400" onClick={() => setCurrentPage('contact')}>Contact</p>
            <p className="cursor-pointer hover:text-orange-400" onClick={() => setCurrentPage('privacy')}>Privacy Policy</p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Connect</h4>
          <div className="space-y-2 text-sm">
            <p>📧 peter.a@smartedgeeducationservicesltd.com</p>
            <p>📱 07930956793</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
        <p className="mb-2">© 2025 SmartEdge Education Services Ltd. Trading as Ed-Heads Tuition - Derby</p>
        <p>Company registered in England & Wales</p>
        <p>Ed-Heads is a registered brand, used under licence.</p>
      </div>
    </div>
  );
export default Footer;