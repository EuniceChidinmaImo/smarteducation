const RefundPage = () => (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">REFUND & CANCELLATION POLICY</h2>
          <p className="text-lg opacity-95">We aim to be fair, transparent, and flexible.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4"> Free Assessment</h3>
            <p className="text-gray-700 mb-4">
             ✓ Free assessments carry no obligation to continue. If you choose not to proceed, there are no charges
            </p>
            {/* <ul className="space-y-3">
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
            </ul> */}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Subscription Payments</h3>
            {/* <p className="text-gray-700 mb-4">
              Not satisfied? Here is our refund policy:
            </p> */}
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p><strong>Subscription fees are billed in advance.</strong> </p>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p><strong>You may cancel your subscription at any time before the next billing date.</strong></p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Refunds</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p><strong>Fees already paid are non-refundable once a billing period has started.</strong> </p>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p><strong>Refunds may be granted at our discretion in exceptional circumstances.</strong></p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Missed Sessions</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p><strong>Missed sessions without notice are not refundable.</strong> </p>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p><strong>	With reasonable notice, sessions may be rescheduled subject to availability.</strong></p>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3">How to Cancel</h3>
            <p className="text-gray-700">
              To cancel, contact us at peter.a@smartedgeeducationservicesltd.com with your name and subscription details at least 48 hours before your next billing date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
export default RefundPage;