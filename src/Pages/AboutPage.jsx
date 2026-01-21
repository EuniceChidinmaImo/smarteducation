const AboutPage = () => (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">About Smart-Edge Tuition</h2>
           <ul className="space-y-2 ml-4">
          <p className="text-lg opacity-95">SmartEdge Education Services Ltd is a UK-registered education services company providing personalised tuition to students from Year 1 to GCSE.</p>
            <li>- We operate as Ed-Heads Tuition – Derby, delivering structured, high-quality tuition supported by modern learning technology.</li>
            <li>- Registered in England & Wales</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              To help every child build confidence, consistency, and academic success through personalised support.
            </p>

                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>

            <p className="text-gray-700">
              By combining expert tutors with the Ed-Heads learning platform, we provide a smarter approach to academic support.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Our approach combines:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">👨‍🏫</span>
                <div>
                  <h4 className="font-bold">Expert Tutors</h4>
                  <p className="text-sm text-gray-600">Carefully selected and trained professionals</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-bold">Personalised learning plans</h4>
                  <p className="text-sm text-gray-600">Tailored to each student's needs and learning style</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">💻</span>
                <div>
                  <h4 className="font-bold">Clear progress tracking for parents</h4>
                  <p className="text-sm text-gray-600">Real-time updates and insights into your child's learning journey</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
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

        <div className="mt-16">

           <h3 className="text-2xl font-bold mb-4">Our Learning Platform</h3>
          <p className="text-gray-700">
            We use the Ed-Heads® Learning System, a proven educational platform offering curriculum-aligned content, automatic marking, and detailed performance analytics. This technology enhances our tutoring by providing interactive resources and tracking progress effectively.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Company Information</h3>
            <p className="text-gray-700">
             <span className="font-bold"> Legal name</span>  : SmartEdge Education Services Ltd<br />
             <span className="font-bold"> Trading name</span> : Trading as Ed-Heads Tuition – Derby<br />
             <span className="font-bold"> Jurisdiction</span> : Registered in England & Wales<br />
             <span className="font-bold"> Email</span> : peter.a@smartedgeeducationservicesltd.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );

export default AboutPage;