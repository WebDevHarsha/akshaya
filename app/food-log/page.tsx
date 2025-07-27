"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { 
  Plus, 
  MapPin, 
  Clock, 
  Search,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye,
  Heart,
  Building2,
  Utensils,
  Phone,
} from 'lucide-react';

// Mock data for demonstration
const mockFoodItems = [
  {
    id: 1,
    title: 'Fresh Vegetable Curry & Rice',
    description: 'Freshly prepared mixed vegetable curry with basmati rice. Perfect for lunch or dinner.',
    quantity: 50,
    unit: 'servings',
    foodType: 'Vegetarian',
    expiryTime: '2025-07-25T18:00:00',
    postedBy: 'Grand Palace Hotel',
    location: 'Anna Nagar, Chennai',
    contact: '+91 9876543210',
    status: 'available',
    image: null,
    postedAt: '2025-07-25T14:30:00',
    category: 'Main Course'
  },
  {
    id: 2,
    title: 'Assorted Bread & Pastries',
    description: 'Fresh bread, croissants, and pastries from our bakery. Great for breakfast distribution.',
    quantity: 30,
    unit: 'pieces',
    foodType: 'Vegetarian',
    expiryTime: '2025-07-26T08:00:00',
    postedBy: 'Royal Inn Restaurant',
    location: 'T. Nagar, Chennai',
    contact: '+91 9876543211',
    status: 'claimed',
    image: null,
    postedAt: '2025-07-25T16:15:00',
    claimedBy: 'Hope Foundation',
    category: 'Bakery'
  },
  {
    id: 3,
    title: 'Chicken Biryani',
    description: 'Authentic chicken biryani with raita and shorba. Freshly prepared for event.',
    quantity: 75,
    unit: 'servings',
    foodType: 'Non-Vegetarian',
    expiryTime: '2025-07-25T20:00:00',
    postedBy: 'Spice Garden Hotel',
    location: 'Velachery, Chennai',
    contact: '+91 9876543212',
    status: 'available',
    image: null,
    postedAt: '2025-07-25T15:45:00',
    category: 'Main Course'
  }
];

export default function FoodLog() {
  const [userRole, setUserRole] = useState<'Restaurant/Hotel' | 'NGO'>('Restaurant/Hotel'); // Mock user role
  const [showPostForm, setShowPostForm] = useState(false);
  const [foodItems, setFoodItems] = useState(mockFoodItems);
  const [filters, setFilters] = useState({
    search: '',
    foodType: 'all',
    status: 'all',
    category: 'all'
  });

  // Form state for posting food
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quantity: '',
    unit: 'servings',
    foodType: 'Vegetarian',
    category: 'Main Course',
    expiryTime: '',
    location: '',
    contact: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.title.trim()) errors.title = 'Title is required';
    if (!formData.description.trim()) errors.description = 'Description is required';
    if (!formData.quantity || parseInt(formData.quantity) <= 0) errors.quantity = 'Valid quantity is required';
    if (!formData.expiryTime) errors.expiryTime = 'Expiry time is required';
    if (!formData.location.trim()) errors.location = 'Location is required';
    if (!formData.contact.trim()) errors.contact = 'Contact is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newItem = {
      id: Date.now(),
      ...formData,
      quantity: parseInt(formData.quantity),
      postedBy: 'Your Restaurant', // This would come from user context
      status: 'available' as const,
      image: null,
      postedAt: new Date().toISOString()
    };

    setFoodItems(prev => [newItem, ...prev]);
    setFormData({
      title: '',
      description: '',
      quantity: '',
      unit: 'servings',
      foodType: 'Vegetarian',
      category: 'Main Course',
      expiryTime: '',
      location: '',
      contact: ''
    });
    setShowPostForm(false);
    alert('Food item posted successfully!');
  };

  const handleClaim = (itemId: number) => {
    setFoodItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, status: 'claimed' as const, claimedBy: 'Your NGO' }
        : item
    ));
    alert('Food item claimed successfully! The restaurant will be notified.');
  };

  const filteredItems = foodItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         item.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                         item.postedBy.toLowerCase().includes(filters.search.toLowerCase());
    const matchesFoodType = filters.foodType === 'all' || item.foodType === filters.foodType;
    const matchesStatus = filters.status === 'all' || item.status === filters.status;
    const matchesCategory = filters.category === 'all' || item.category === filters.category;
    
    return matchesSearch && matchesFoodType && matchesStatus && matchesCategory;
  });

  const getTimeRemaining = (expiryTime: string) => {
    const now = new Date();
    const expiry = new Date(expiryTime);
    const diff = expiry.getTime() - now.getTime();
    
    if (diff <= 0) return 'Expired';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) return `${hours}h ${minutes}m left`;
    return `${minutes}m left`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'claimed': return 'text-blue-600 bg-blue-100';
      case 'expired': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return CheckCircle;
      case 'claimed': return Eye;
      case 'expired': return XCircle;
      default: return AlertCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Food Distribution Log</h1>
            <p className="text-gray-600">
              {userRole === 'Restaurant/Hotel' 
                ? 'Post surplus food to share with NGOs in need'
                : 'Find and claim available food from partner restaurants'
              }
            </p>
          </div>
          
          {userRole === 'Restaurant/Hotel' && (
            <button
              onClick={() => setShowPostForm(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-2 mt-4 sm:mt-0"
            >
              <Plus className="h-5 w-5" />
              <span>Post Food</span>
            </button>
          )}
        </div>

        {/* Role Switcher (Demo only) */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Demo Mode - Switch Role:</span>
            <button
              onClick={() => setUserRole('Restaurant/Hotel')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                userRole === 'Restaurant/Hotel' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Restaurant/Hotel
            </button>
            <button
              onClick={() => setUserRole('NGO')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                userRole === 'NGO' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              NGO
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search food items..."
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
            
            {/* Food Type Filter */}
            <div>
              <select
                value={filters.foodType}
                onChange={(e) => setFilters(prev => ({ ...prev, foodType: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="all">All Types</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>
            
            {/* Status Filter */}
            <div>
              <select
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="claimed">Claimed</option>
                <option value="expired">Expired</option>
              </select>
            </div>
            
            {/* Category Filter */}
            <div>
              <select
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="all">All Categories</option>
                <option value="Main Course">Main Course</option>
                <option value="Bakery">Bakery</option>
                <option value="Desserts">Desserts</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
              </select>
            </div>
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const StatusIcon = getStatusIcon(item.status);
            const timeRemaining = getTimeRemaining(item.expiryTime);
            const isExpired = timeRemaining === 'Expired';
            
            return (
              <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <Utensils className="h-12 w-12 text-gray-400" />
                </div>
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{item.title}</h3>
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      <StatusIcon className="h-3 w-3" />
                      <span className="capitalize">{item.status}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                  
                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Quantity:</span>
                      <span className="font-medium">{item.quantity} {item.unit}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-medium">{item.foodType}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Category:</span>
                      <span className="font-medium">{item.category}</span>
                    </div>
                  </div>
                  
                  {/* Time remaining */}
                  <div className={`flex items-center space-x-2 mb-4 p-3 rounded-lg ${
                    isExpired ? 'bg-red-50' : timeRemaining.includes('h') ? 'bg-green-50' : 'bg-yellow-50'
                  }`}>
                    <Clock className={`h-4 w-4 ${
                      isExpired ? 'text-red-500' : timeRemaining.includes('h') ? 'text-green-500' : 'text-yellow-500'
                    }`} />
                    <span className={`text-sm font-medium ${
                      isExpired ? 'text-red-700' : timeRemaining.includes('h') ? 'text-green-700' : 'text-yellow-700'
                    }`}>
                      {timeRemaining}
                    </span>
                  </div>
                  
                  {/* Location and Contact */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4" />
                      <span>{item.postedBy}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{item.contact}</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  {userRole === 'NGO' && item.status === 'available' && !isExpired && (
                    <button
                      onClick={() => handleClaim(item.id)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Heart className="h-4 w-4" />
                      <span>Claim Food</span>
                    </button>
                  )}
                  
                  {item.status === 'claimed' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700 text-sm font-medium">
                        Claimed by: {item.claimedBy || 'Anonymous NGO'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Utensils className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No food items found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Post Food Modal */}
      {showPostForm && userRole === 'Restaurant/Hotel' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Post Surplus Food</h2>
                <button
                  onClick={() => setShowPostForm(false)}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Food Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                      formErrors.title ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Fresh Vegetable Curry & Rice"
                  />
                  {formErrors.title && <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                      formErrors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Describe the food, preparation method, and any special notes..."
                  />
                  {formErrors.description && <p className="mt-1 text-sm text-red-600">{formErrors.description}</p>}
                </div>

                {/* Quantity and Unit */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.quantity}
                      onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        formErrors.quantity ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="50"
                    />
                    {formErrors.quantity && <p className="mt-1 text-sm text-red-600">{formErrors.quantity}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                    <select
                      value={formData.unit}
                      onChange={(e) => setFormData(prev => ({ ...prev, unit: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="servings">Servings</option>
                      <option value="pieces">Pieces</option>
                      <option value="kg">Kilograms</option>
                      <option value="liters">Liters</option>
                      <option value="plates">Plates</option>
                    </select>
                  </div>
                </div>

                {/* Food Type and Category */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Food Type</label>
                    <select
                      value={formData.foodType}
                      onChange={(e) => setFormData(prev => ({ ...prev, foodType: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="Main Course">Main Course</option>
                      <option value="Bakery">Bakery</option>
                      <option value="Desserts">Desserts</option>
                      <option value="Beverages">Beverages</option>
                      <option value="Snacks">Snacks</option>
                    </select>
                  </div>
                </div>

                {/* Expiry Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Until <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.expiryTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, expiryTime: e.target.value }))}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                      formErrors.expiryTime ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.expiryTime && <p className="mt-1 text-sm text-red-600">{formErrors.expiryTime}</p>}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                      formErrors.location ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Full address with landmarks"
                  />
                  {formErrors.location && <p className="mt-1 text-sm text-red-600">{formErrors.location}</p>}
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.contact}
                    onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                      formErrors.contact ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+91 9876543210"
                  />
                  {formErrors.contact && <p className="mt-1 text-sm text-red-600">{formErrors.contact}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowPostForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Post Food
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}