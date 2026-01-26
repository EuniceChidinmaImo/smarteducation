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
                <button
                  onClick={() => handlePlanSelect(plan.name)}
                  className={`w-full py-3 rounded font-semibold transition ${
                    plan.highlight
                      ? 'bg-orange-500 hover:bg-orange-600'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {plan.cta}
                </button>
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

 


  

  