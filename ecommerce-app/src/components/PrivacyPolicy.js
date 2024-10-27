const PrivacyPolicy = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
                <p className="text-gray-700 mb-4">
                  We collect information that you provide directly to us, including your name, email
                  address, postal address, phone number, and any other information you choose to provide.
                </p>
              </section>
              <section>
                <h3 className="text-xl font-semibold mb-3">How We Use Your Information</h3>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to provide, maintain, and improve our services,
                  to process your transactions, and to communicate with you about orders and promotions.
                </p>
              </section>
              <section>
                <h3 className="text-xl font-semibold mb-3">Information Sharing</h3>
                <p className="text-gray-700 mb-4">
                  We do not sell or rent your personal information to third parties. We may share your
                  information with service providers who assist us in operating our website and conducting our business.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PrivacyPolicy;