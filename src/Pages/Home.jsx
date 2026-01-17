import React, { useState } from 'react';

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

  const plans = [
    { name: 'Weekly', price: '£30', period: 'per week', cta: 'Start Weekly', highlight: false, savings: null },
    { name: 'Monthly', price: '£100', period: 'per month', cta: 'Start Monthly', highlight: true, savings: null },
    { name: '3-Month', price: '£250', period: 'for 3 months', cta: 'Save £50', highlight: false, savings: 'Save £50' },
    { name: 'Annual', price: '£1,000', period: 'per year', cta: 'Save £200', highlight: false, savings: 'Save £200' },
  ];

  const features = [
    { icon: '😊', title: 'Fun Learning', desc: 'Tutoring that feels like progress, not pressure' },
    { icon: '📚', title: 'Personal Plans', desc: 'Lessons tailored to your child\'s needs' },
    { icon: '📈', title: 'Real Progress', desc: 'Track improvements every single week' },
    { icon: '🏆', title: 'Exam Ready', desc: 'Focused prep for SATs & GCSEs' },
    { icon: '⚡', title: 'Flexible Hours', desc: 'Online or in-centre — you choose!' },
    { icon: '✅', title: 'Proven Results', desc: 'Families see improvements in weeks' },
  ];

  const testimonials = [
    { name: 'Sarah P.', quote: 'My child went from struggling to top of the class! 🎉', emoji: '👩‍👧' },
    { name: 'James M.', quote: 'The tutors are amazing, and progress is clear every week. 📈', emoji: '👨‍👦' },
    { name: 'Emma L.', quote: 'Finally, tuition that actually works! So proud of my son. 💪', emoji: '👩‍👧‍👦' },
  ];

  const faqs = [
    { q: 'How does online tuition work?', a: 'Our tutors meet your child on a secure video call. They use interactive tools, whiteboards, and the Ed-Heads platform to make learning engaging and effective.' },
    { q: 'What ages do you support?', a: 'We tutor students from Year 1 to GCSE (ages 6–16). Whether your child needs help with foundations or exam prep, we\'ve got them covered.' },
    { q: 'Is this suitable for home-schoolers?', a: 'Absolutely! Many home-schooling families use Ed-Heads to complement their curriculum. We\'re flexible and personalized.' },
    { q: 'How is progress tracked?', a: 'Every session, your child completes assessments on the Ed-Heads platform. You get weekly reports showing exactly what they\'ve learned and improved.' },
    { q: 'Is there a long-term commitment?', a: 'Nope! Start with weekly or monthly — cancel anytime. Many families choose longer plans to lock in savings.' },
  ];

  return (
    <div className="font-sans">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white shadow-sm z-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">🎓 Ed-Heads Tuition</h1>
          <button
            onClick={() => handlePlanSelect('Quick')}
            className="px-6 py-2 bg-orange-500 text-white rounded font-semibold text-sm hover:bg-orange-600 transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              🚀 Your Child's Success Starts Here!
            </h2>
            <p className="text-lg mb-8 opacity-95">
              Personalized tuition that makes learning fun, easy, and effective. Watch your child's confidence soar!
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => handlePlanSelect('Assessment')}
                className="px-6 py-3 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition"
              >
                📅 Book Free Assessment
              </button>
              <button
                className="px-6 py-3 border-2 border-white text-white rounded font-semibold hover:bg-white hover:bg-opacity-10 transition"
              >
                Explore Platform →
              </button>
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
            <p className="text-sm text-gray-700">Happy Families</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600">95%</p>
            <p className="text-sm text-gray-700">Grade Improvement</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-600">Year 1 – GCSE</p>
            <p className="text-sm text-gray-700">All Ages Supported</p>
          </div>
        </div>
      </div>

      {/* Problem → Solution */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded text-xs font-semibold mb-4">The Challenge</span>
            <h3 className="text-3xl font-bold mb-6">😟 Is Your Child Struggling?</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-2xl">❌</span>
                <p>Large classrooms with little one-on-one time</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">❌</span>
                <p>Exam stress and falling confidence</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">❌</span>
                <p>Gaps in understanding key concepts</p>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold mb-4">The Solution</span>
            <h3 className="text-3xl font-bold mb-6">✨ We've Got You Covered!</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-2xl">✅</span>
                <p>Personalized learning plans tailored to your child</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✅</span>
                <p>Expert tutors + Smart learning technology</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✅</span>
                <p>Real-time progress tracking & confidence building</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-12">
            🌟 Why Families Love Ed-Heads
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
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-4">
            💰 Simple, Transparent Pricing
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Choose the plan that fits your family
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
              Our tuition is supercharged by the Ed-Heads platform — thousands of questions, automatic marking, and detailed analytics so you can see exactly where your child shines.
            </p>
            <button className="px-6 py-3 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition">
              Explore Ed-Heads Hub →
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
            🌈 Give Your Child the Support They Deserve
          </h2>
          <p className="text-lg mb-12 opacity-95">
            Start today and watch your child's confidence and grades soar!
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button
              onClick={() => handlePlanSelect('Final')}
              className="px-6 py-3 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition"
            >
              Choose a Plan 📚
            </button>
            <button
              className="px-6 py-3 border-2 border-white text-white rounded font-semibold hover:bg-white hover:bg-opacity-10 transition"
            >
              Book Free Assessment 📅
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Ed-Heads Tuition – Derby</h4>
            <p className="text-sm text-gray-400">Personalized tuition for every child.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <p className="cursor-pointer">About Us</p>
              <p className="cursor-pointer">Contact</p>
              <p className="cursor-pointer">Privacy Policy</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <p>📧 hello@edheads.co.uk</p>
              <p>📱 01332 XXXX</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
          <p className="mb-2">© 2025 SmartEdge Education Services Ltd. Trading as Ed-Heads Tuition – Derby</p>
          <p>Ed-Heads is a registered brand, used under licence.</p>
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
                Get Started 🚀
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