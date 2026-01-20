export default function BookingModal({
  showModal,
  setShowModal,
  selectedPlan,
  email,
  setEmail,
  handleSubmit
}) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-11/12">
        <div className="bg-blue-600 text-white p-6 flex justify-between">
          <h2 className="font-bold">
            Book with us – {selectedPlan}
          </h2>
          <p className="text-center text-lg mb-6">Enter your email and we will contact you within 24 hours</p>
          <button onClick={() => setShowModal(false)}>✕</button>
        </div>

        <div className="p-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full border p-3 rounded mb-4"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
