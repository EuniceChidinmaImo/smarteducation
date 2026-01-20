const AboutPage = () => (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">About Smart-Edge Tuition</h2>
          <p className="text-lg opacity-95">Transforming education through personalized, technology-enabled tuition</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              We believe every child deserves personalized, engaging tuition that builds confidence and delivers real results. Our mission is to make expert tutoring accessible, affordable, and effective for families across Derby and beyond.
            </p>
            <p className="text-gray-700">
              By combining expert tutors with the Ed-Heads learning platform, we provide a smarter approach to academic support.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-bold">Expert Tutors</h4>
                  <p className="text-sm text-gray-600">Carefully selected and trained professionals</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-bold">Smart Technology</h4>
                  <p className="text-sm text-gray-600">Real-time progress tracking and insights</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h4 className="font-bold">Affordable & Transparent</h4>
                  <p className="text-sm text-gray-600">No hidden fees. Flexible plans.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-blue-600 mb-2">Excellence</h4>
              <p className="text-sm text-gray-700">Highest standards in tutoring</p>
            </div>
            <div>
              <h4 className="font-bold text-green-600 mb-2">Integrity</h4>
              <p className="text-sm text-gray-700">Transparent communication always</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-600 mb-2">Support</h4>
              <p className="text-sm text-gray-700">Here for you every step of the way</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default AboutPage;