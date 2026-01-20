 const ContactPage = () => (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg opacity-95">Get in touch - we would love to hear from you</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">


          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <p className="text-gray-700">peter.a@smartedgeeducationservicesltd.com</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Phone</h4>
                <p className="text-gray-700">07930 956793</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Location</h4>
                <p className="text-gray-700">Derby, UK</p>
                <p className="text-gray-600 text-sm mt-2">Serving families across Derby and online</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Response Time</h4>
                <p className="text-sm text-gray-700">We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
export default ContactPage;