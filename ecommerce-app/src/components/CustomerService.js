const CustomerService = () => {
    const faqs = [
      {
        question: "How do I track my order?",
        answer: "You can track your order by logging into your account and visiting the Orders section."
      },
      {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase. Items must be in original condition."
      },
      {
        question: "How can I change my shipping address?",
        answer: "You can update your shipping address in your account settings or during checkout."
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Customer Service</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-4">
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CustomerService;