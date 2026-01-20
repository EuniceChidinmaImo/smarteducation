const TermsPage = () => (
        <div>
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
            <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4">Terms & Conditions</h2>
            </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="space-y-8 text-gray-700">
            <section>
                <h3 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h3>
                <p>By using Smart-Edge Tuition services, you agree to these terms. If you do not agree, please do not use our services.</p>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4">2. Service Description</h3>
                <p>Smart-Edge Tuition provides personalized tuition for students Year 1 to GCSE. Services delivered online, in-centre, or blended.</p>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4">3. Payment Terms</h3>
                <ul className="space-y-2 ml-4">
                <li>- All payments per selected subscription plan</li>
                <li>- Processed securely through Stripe or GoCardless</li>
                <li>- Billing at start of each period</li>
                <li>- All prices in GBP and inclusive of VAT</li>
                </ul>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4">4. Student Conduct</h3>
                <p>Students and parents agree to attend on time, maintain respectful behavior, complete homework, and notify us 24 hours before cancellations.</p>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4">5. Limitation of Liability</h3>
                <p>Smart-Edge Tuition provides services on an as-is basis. We cannot guarantee specific exam results as progress depends on student effort and home support.</p>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4">6. Intellectual Property</h3>
                <p>All materials and content are the property of Smart-Edge Tuition or licensed partners. Unauthorized reproduction is prohibited.</p>
            </section>
            </div>
        </div>
        </div>
    );
export default TermsPage;