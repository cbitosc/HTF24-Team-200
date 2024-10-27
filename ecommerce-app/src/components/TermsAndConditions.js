const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6">Terms & Conditions</h2>
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-700 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms
                and provision of this agreement.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-3">2. Use License</h3>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials (information
                or software) on our website for personal, non-commercial transitory viewing only.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-3">3. Disclaimer</h3>
              <p className="text-gray-700 mb-4">
                The materials on our website are provided on an 'as is' basis. We make no warranties,
                expressed or implied, and hereby disclaim and negate all other warranties including,
                without limitation, implied warranties or conditions of merchantability.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;