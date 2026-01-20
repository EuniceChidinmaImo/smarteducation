const PrivacyPage = () => (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Privacy Policy</h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8 text-gray-700">
          <section>
            <h3 className="text-2xl font-bold mb-4">1. Introduction</h3>
            <p>Smart-Edge Education Services Ltd is committed to protecting your privacy. This policy explains how we collect and use your personal data.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">2. Data We Collect</h3>
            <ul className="space-y-2 ml-4">
              <li>- Contact Information: Name, email, phone, address</li>
              <li>- Student Data: Name, age, year group, subjects</li>
              <li>- Payment Information: Processed securely, we do not store</li>
              <li>- Progress Data: Attendance, scores, reports</li>
              <li>- Communication: Messages and feedback</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">3. How We Use Your Data</h3>
            <ul className="space-y-2 ml-4">
              <li>- Delivering tuition services</li>
              <li>- Processing payments</li>
              <li>- Communication about your account</li>
              <li>- Improving our services</li>
              <li>- Legal compliance</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">4. Data Security</h3>
            <p>We use industry-standard security including encrypted data transmission, secure payment processing, regular audits, and restricted staff access.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">5. Your Rights</h3>
            <p>Under GDPR, you have the right to access, correct, delete, or object to your data processing. Contact us at peter.a@smartedgeeducationservicesltd.com</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">6. Contact Us</h3>
            <p>For privacy questions: peter.a@smartedgeeducationservicesltd.com</p>
            <p className="mt-4">Last updated: January 2025</p>
          </section>
        </div>
        </div>
    </div>
  );
export default PrivacyPage;