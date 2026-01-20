const RefundPage = () => (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Refund & Cancellation Policy</h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Cancellation Policy</h3>
            <p className="text-gray-700 mb-4">
              We want you to feel confident. Here are our cancellation options:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <p><strong>Monthly Plans:</strong> Cancel anytime with 7 days notice. No penalties.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <p><strong>3-Month and Annual Plans:</strong> Cancel with 14 days notice. Remaining balance refunded.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <p><strong>No Hidden Fees:</strong> What you see is what you pay.</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Refund Policy</h3>
            <p className="text-gray-700 mb-4">
              Not satisfied? Here is our refund policy:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p><strong>14-Day Money-Back Guarantee:</strong> Cancel within 14 days for 100% refund.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p><strong>Pro-Rata Refunds:</strong> After 14 days, refund for unused services.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p><strong>Processing Time:</strong> Refunds processed within 5-10 business days.</p>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3">How to Cancel</h3>
            <p className="text-gray-700">
              Email us at peter.a@smartedgeeducationservicesltd.com with your name and subscription details. We will process within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
export default RefundPage;