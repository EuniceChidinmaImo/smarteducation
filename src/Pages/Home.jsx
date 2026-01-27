import React, { useState } from 'react';
import {plans,features,testimonials,faqs} from '../config.js/data';

export default function EdHeadsLanding() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (email) {
      setShowModal(false);
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };



  return (
    <div className="font-sans">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
               Personalised Tuition in Derby for Year 1 – GCSE

            </h2>
            <p className="text-lg mb-8 opacity-95">
              Local and online tuition delivered by expert tutors, powered by the Ed-Heads® learning system — helping students build confidence and achieve real results.
            </p>
            <p className="text-lg mb-8 opacity-95">
              📍 Serving families across Derby • UK curriculum aligned • Progress tracked weekly
            </p>

            
            <div className="flex flex-wrap gap-4 items-center">
  <a
    href="https://calendly.com/peter-a-smartedgeeducationservicesltd/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 border-2 border-white bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition text-center"
  >
    Book Free Assessment
  </a>

  <a
    href="https://smartedgeedu.com"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 border-2 border-white text-white rounded font-semibold hover:bg-white hover:text-purple-600 transition text-center"
  >
    Explore Learning Platform →
  </a>
</div>

          </div>
          <div className="text-center text-9xl">📚✨</div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-blue-50 py-6 px-6">
        <div className="max-w-6xl mx-auto flex gap-8 justify-center flex-wrap text-center">
          <div>
            <p className="text-3xl font-bold text-blue-600">500+</p>
            <p className="text-sm text-gray-700">Happy Families Supported
</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600">95%</p>
            <p className="text-sm text-gray-700">Students Improve Grades</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-600">Year 1 – GCSE</p>
            <p className="text-sm text-gray-700">All Key Stages Covered</p>
          </div>
        </div>
      </div>

      {/* Challenge & Solution Section */}
      <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
    {/* The Challenge Section */}
    <div className="min-h-[300px] sm:h-auto">
      <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded text-xs font-semibold mb-3 sm:mb-4">
        The Challenge
      </span>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        Is Your Child Struggling at School?
      </h3>
      <h4 className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 text-gray-700">
        Many students fall behind not because they lack ability — but because they don't get the personalised support they need.
      </h4>
      <div className="space-y-3 sm:space-y-4">
        <div className="flex gap-3">
          <span className="text-xl sm:text-2xl flex-shrink-0">❌</span>
          <p className="text-sm sm:text-base">Large classrooms with limited one-to-one attention</p>
        </div>
        <div className="flex gap-3">
          <span className="text-xl sm:text-2xl flex-shrink-0">❌</span>
          <p className="text-sm sm:text-base">Exam stress and falling confidence</p>
        </div>
        <div className="flex gap-3">
          <span className="text-xl sm:text-2xl flex-shrink-0">❌</span>
          <p className="text-sm sm:text-base">Gaps in core subjects that go unnoticed</p>
        </div>
      </div>
    </div>

    {/* The Solution Section */}
    <div className="min-h-[300px] sm:h-auto">
      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold mb-3 sm:mb-4">
        The Solution
      </span>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        A Smarter, More Personal Approach to Tuition
      </h3>
      <div className="space-y-3 sm:space-y-4">
        <div className="flex gap-3">
          <span className="text-xl sm:text-2xl flex-shrink-0">✅</span>
          <p className="text-sm sm:text-base">Tailored learning plans built around your child</p>
        </div>
        <div className="flex gap-3">
          <span className="text-xl sm:text-2xl flex-shrink-0">✅</span>
          <p className="text-sm sm:text-base">Expert tutors supported by smart learning technology</p>
        </div>
        <div className="flex gap-3">
          <span className="text-xl sm:text-2xl flex-shrink-0">✅</span>
          <p className="text-sm sm:text-base">Real-time progress tracking so you always know how your child is doing</p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Features */}
      <div className="py-16 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-12">
            🌟 WHY FAMILIES CHOOSE US
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Pricing */}
      <div id="pricing" className="py-16 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-4">
            💰 Simple, Transparent Pricing
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Choose the level of support that fits your family — upgrade or switch anytime.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-lg relative transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                {plan.savings && (
                  <span className="absolute -top-3 left-4 px-3 py-1 bg-orange-500 text-white rounded text-xs font-semibold">
                    {plan.savings}
                  </span>
                )}
                {plan.highlight && (
                  <span className="absolute -top-3 right-4 px-3 py-1 bg-orange-500 text-white rounded text-xs font-semibold">
                    Most Popular ⭐
                  </span>
                )}
                <h4 className="text-lg font-bold mb-2 mt-4">{plan.name}</h4>
                <p className="text-4xl font-bold mb-1">{plan.price}</p>
                <p className="text-sm opacity-90 mb-6">{plan.period}</p>
                <a href={plan.url} target="_blank" rel="noopener noreferrer">
                <button
                  className={`w-full py-3 rounded font-semibold transition ${
                    plan.highlight
                      ? 'bg-orange-500 hover:bg-orange-600'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {plan.cta}
                </button>
              </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-12">
            ⭐ What Families Are Saying
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <p className="text-4xl mb-4">{testimonial.emoji}</p>
                <p className="text-sm italic mb-4 text-gray-700">
                  "{testimonial.quote}"
                </p>
                <p className="font-bold text-blue-600">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ed-Heads Integration */}
      <div className="py-16 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">🚀 Powered by Ed-Heads Learning System</h3>
            <p className="text-lg mb-6 opacity-95">
              Our tuition is enhanced by the Ed-Heads learning platform, featuring thousands of curriculum-aligned questions, automatic marking, and detailed analytics so parents can clearly track progress.
            </p>
            <button className="px-6 py-3 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition">
              Explore the Ed-Heads Learning Hub →
            </button>
          </div>
          <div className="text-center text-7xl">📱✨</div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-12">
            ❓ Your Questions Answered
          </h3>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-4 bg-blue-50 rounded text-left font-bold flex justify-between items-center hover:bg-blue-100 transition"
                >
                  {item.q}
                  <span className={`transform transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {expandedFaq === i && (
                  <div className="p-4 bg-gray-100 rounded-b">
                    <p className="text-gray-700">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Give Your Child the Support They Deserve
          </h2>
          <p className="text-lg mb-12 opacity-95">
           Start today and help your child build confidence, consistency, and results.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="#pricing"
              className="px-6 py-3 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition text-center"
            >
              Choose a Tuition Plan 📚
            </a>
            <a
    href="https://calendly.com/peter-a-smartedgeeducationservicesltd/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 border-2 border-white bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition text-center"
  >
    Book Free Assessment
  </a>

          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447930956793"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 animate-bounce"
        title="Chat with us on WhatsApp"
      >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
</svg>
        </div>
      </a>

      {/* Plan Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-md w-11/12">
            <div className="bg-blue-600 text-white p-6 rounded-t-lg flex justify-between items-center">
              <h2 className="text-xl font-bold">🎉 {selectedPlan}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-2xl cursor-pointer hover:opacity-80"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <p className="text-center text-lg mb-6">
                Enter your email and we'll contact you within 24 hours!
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSubmit}
                disabled={!email}
                className={`w-full py-3 rounded font-semibold text-white transition ${
                  email
                    ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Get Started 
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-md w-11/12 p-12 text-center">
            <p className="text-6xl mb-4">✅</p>
            <h2 className="text-2xl font-bold mb-4">You're In!</h2>
            <p className="text-gray-600 mb-8">
              Thanks for joining! We'll be in touch soon to book your free assessment.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

 


  

  