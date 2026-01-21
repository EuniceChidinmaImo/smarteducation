const Footer = () => (
    <div className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h4 className="text-lg font-bold mb-4">SmartEdge Tuition - Derby</h4>
          <p className="text-sm text-gray-400">Personalized tuition for every child.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm flex flex-col">
            <a href="/smarteducation/about" className="hover:text-orange-400 transition-colors">About Us</a>
            <a href="/smarteducation/contact" className="hover:text-orange-400 transition-colors">Contact</a>
            <a href="/smarteducation/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="/smarteducation/refund" className="hover:text-orange-400 transition-colors">Refund Policy</a>
            <a href="/smarteducation/terms" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Connect</h4>
          <div className="space-y-2 text-sm">
            <p>📧 peter.a@smartedgeeducationservicesltd.com</p>
            <p>📱 +44(0)7930956793</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-400">
        <p className="mb-2">© 2025 SmartEdge Education Services Ltd. Trading as Ed-Heads Tuition - Derby</p>
        <p>Company registered in England & Wales</p>
        <p>Ed-Heads® is a registered learning platform used under licence.</p>
      </div>
    </div>
  );
export default Footer;