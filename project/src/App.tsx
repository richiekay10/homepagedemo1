import React from 'react';
import { Shirt, Brain, Camera, Palette, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Your Smart Digital Wardrobe Assistant
            </h1>
            <p className="text-xl mb-8">
              Organize your clothing collection, get AI-powered outfit recommendations, and revolutionize your style game.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors">
              Get Started <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Smart Features for Your Wardrobe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of wardrobe management with our innovative features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Shirt className="w-8 h-8 text-indigo-600" />}
              title="Wardrobe Organization"
              description="Categorize and manage your clothing items efficiently"
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-indigo-600" />}
              title="AI Styling"
              description="Get personalized outfit recommendations powered by AI"
            />
            <FeatureCard
              icon={<Camera className="w-8 h-8 text-indigo-600" />}
              title="Visual Catalog"
              description="Keep a visual record of all your clothing items"
            />
            <FeatureCard
              icon={<Palette className="w-8 h-8 text-indigo-600" />}
              title="Style Analytics"
              description="Understand your style preferences and patterns"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have revolutionized their wardrobe management
          </p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Start Organizing Today
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;