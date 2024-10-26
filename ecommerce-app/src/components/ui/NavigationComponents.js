import React from 'react';
import { ShoppingCart, Search, Menu, User, Settings, LogOut, UserCircle, Package, Heart, FileText, HelpCircle, Phone } from 'lucide-react';

const AccountDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
      <div className="px-4 py-2 border-b">
        <p className="text-sm text-gray-700">Welcome!</p>
        <p className="text-xs text-gray-500">example@email.com</p>
      </div>
      <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <UserCircle className="h-4 w-4 mr-2" />
        Your Profile
      </a>
      <a href="/orders" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <Package className="h-4 w-4 mr-2" />
        Your Orders
      </a>
      <a href="/wishlist" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <Heart className="h-4 w-4 mr-2" />
        Wishlist
      </a>
      <div className="border-t">
        <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

const SideMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative flex flex-col w-64 max-w-xs bg-white h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="p-2">
            <h3 className="px-3 py-2 text-sm font-semibold text-gray-500">HELP & SETTINGS</h3>
            <a href="/settings" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <Settings className="h-4 w-4 mr-2" />
              Your Account Settings
            </a>
            <a href="/customer-service" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <HelpCircle className="h-4 w-4 mr-2" />
              Customer Service
            </a>
            <a href="/contact" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </a>
          </div>
          <div className="p-2 border-t">
            <h3 className="px-3 py-2 text-sm font-semibold text-gray-500">POLICIES</h3>
            <a href="/privacy" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <FileText className="h-4 w-4 mr-2" />
              Privacy Policy
            </a>
            <a href="/terms" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <FileText className="h-4 w-4 mr-2" />
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoriesDropdown = ({ isOpen, onClose }) => {
  const categories = [
    {
      name: "Electronics",
      subcategories: ["Phones", "Laptops", "Tablets", "Accessories"]
    },
    {
      name: "Fashion",
      subcategories: ["Men's Clothing", "Women's Clothing", "Kids", "Shoes"]
    },
    {
      name: "Home & Garden",
      subcategories: ["Furniture", "Decor", "Kitchen", "Garden"]
    },
    {
      name: "Sports",
      subcategories: ["Equipment", "Clothing", "Shoes", "Accessories"]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="font-semibold text-gray-800">{category.name}</h3>
              <ul className="space-y-2">
                {category.subcategories.map((sub) => (
                  <li key={sub}>
                    <a href={`/category/${category.name.toLowerCase()}/${sub.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 text-sm">
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { AccountDropdown, SideMenu, CategoriesDropdown };
