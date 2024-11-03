const CategoryPage = ({ category, subcategory }) => {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">{category} - {subcategory}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Placeholder for product grid */}
              <div className="border rounded-lg p-4">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg mb-4">
                  <img src="/api/placeholder/200/200" alt="Product" className="object-cover" />
                </div>
                <h3 className="font-medium">Product Name</h3>
                <p className="text-gray-600">$99.99</p>
              </div>
              {/* Add more product cards as needed */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CategoryPage;