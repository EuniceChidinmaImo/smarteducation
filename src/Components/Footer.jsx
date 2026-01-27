const Footer = () => (
  <div className="bg-gray-800 text-white py-12 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <h4 className="text-lg font-bold mb-4">SmartEdge Tuition - Derby</h4>
        <p className="text-sm text-gray-400">Personalized tuition for every child.</p>
        
        {/* Social Media Links */}
        <div className="mt-6">
          <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/smartedgetuition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              title="Follow us on Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com/smartedgetuition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              title="Follow us on Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/smartedgetuition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              title="Follow us on Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.653.25-1.288.578-1.797 1.087-.509.51-.838 1.144-1.087 1.798-.266.788-.468 1.658-.527 2.936C.008 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.527 2.936.249.649.578 1.288 1.087 1.797.51.509 1.144.838 1.798 1.087.788.266 1.658.468 2.936.527C8.333 23.992 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.527.649-.249 1.288-.578 1.797-1.087.509-.51.838-1.144 1.087-1.798.266-.788.468-1.658.527-2.936.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.527-2.936-.249-.649-.578-1.288-1.087-1.797-.51-.509-1.144-.838-1.798-1.087-.788-.266-1.658-.468-2.936-.527C15.667.008 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.821.896 1.381.164.422.355 1.056.408 2.227.061 1.264.07 1.645.07 4.849 0 3.205-.009 3.584-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.164-1.056.355-2.227.408-1.264.061-1.645.07-4.849.07-3.205 0-3.584-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.164-.422-.355-1.056-.408-2.227-.061-1.264-.07-1.645-.07-4.849 0-3.204.009-3.584.07-4.849.054-1.171.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.164 1.056-.355 2.227-.408 1.264-.061 1.645-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/smartedgetuition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              title="Follow us on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/smartedgetuition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors"
              title="Subscribe on YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447930956793"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors"
              title="Chat with us on WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.75 5.413 2.174 7.722l-2.308 8.437 8.693-2.335c2.25 1.238 4.794 1.903 7.382 1.903 9.687 0 17.543-7.856 17.543-17.543 0-4.687-1.88-9.1-5.266-12.287A17.5 17.5 0 0012.051 2.98zm0 32.179v.006z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div>
        <a href="https://wa.me/447930956793" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 font-semibold">💬 WhatsApp Us</a>
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
        <h4 className="text-lg font-bold mb-4">Resources</h4>
        <div className="space-y-2 text-sm flex flex-col">
          <a href="https://smartedgeedu.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Ed-Heads Platform</a>
          <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-orange-400 transition-colors">FAQ</a>
          <a href="/smarteducation/blog" className="hover:text-orange-400 transition-colors">Blog</a>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-4">Connect</h4>
        <div className="space-y-2 text-sm">
          <p>📧 peter.a@smartedgeeducationservicesltd.com</p>
          <p>📱 +44(0)7930956793</p>
          <p className="mt-4 text-xs text-gray-400">Response time: Within 24 hours</p>
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