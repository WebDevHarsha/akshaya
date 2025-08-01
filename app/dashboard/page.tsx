"use client"
import { useState } from 'react';
import { 
  Bell, 
  Plus, 
  MapPin, 
  Clock, 
  Users, 
  Package, 
  TrendingUp, 
  Heart,
  Building2,
  Truck,
  Calendar,
  Search,
  Filter,
  MoreHorizontal,
  User,
  Settings,
  LogOut,
  Utensils,
  Eye,
} from 'lucide-react';

export default function Dashboard() {
  const [userRole, setUserRole] = useState<'Restaurant/Hotel' | 'NGO'>('Restaurant/Hotel');
  const [notifications, setNotifications] = useState(5);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Mock data - in real app this would come from API
  const restaurantData = {
    totalDonations: 156,
    mealsProvided: 1240,
    wasteReduced: 89,
    partnerNGOs: 12,
    recentDonations: [
      { id: 1, food: 'Biryani & Curry', quantity: '25 portions', ngo: 'Hope Foundation', status: 'picked-up', time: '2 hours ago' },
      { id: 2, food: 'Fresh Vegetables', quantity: '15 kg', ngo: 'Care Trust', status: 'pending', time: '4 hours ago' },
      { id: 3, food: 'Bread & Pastries', quantity: '40 items', ngo: 'Seva Mandal', status: 'delivered', time: '6 hours ago' },
      { id: 4, food: 'Rice & Dal', quantity: '30 portions', ngo: 'Children Aid', status: 'confirmed', time: '1 day ago' }
    ]
  };

  const ngoData = {
    totalReceived: 89,
    mealsDistributed: 892,
    peopleServed: 445,
    partnerRestaurants: 8,
    recentPickups: [
      { id: 1, food: 'Mixed Vegetables', quantity: '20 kg', restaurant: 'Green Garden', status: 'received', time: '1 hour ago' },
      { id: 2, food: 'Cooked Rice', quantity: '35 portions', restaurant: 'Royal Palace', status: 'in-transit', time: '3 hours ago' },
      { id: 3, food: 'Fresh Fruits', quantity: '12 kg', restaurant: 'City Cafe', status: 'scheduled', time: '5 hours ago' },
      { id: 4, food: 'Curry & Bread', quantity: '40 portions', restaurant: 'Spice Route', status: 'completed', time: '8 hours ago' }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
      case 'completed':
      case 'received':
        return 'bg-green-100 text-green-800';
      case 'picked-up':
      case 'in-transit':
        return 'bg-blue-100 text-blue-800';
      case 'confirmed':
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const mockNotifications = [
    { id: 1, message: 'New food request from Hope Foundation', time: '5 min ago', type: 'request' },
    { id: 2, message: 'Your donation was successfully picked up', time: '1 hour ago', type: 'success' },
    { id: 3, message: 'Quality check reminder for upcoming donation', time: '2 hours ago', type: 'reminder' },
    { id: 4, message: 'New NGO partner joined in your area', time: '1 day ago', type: 'info' },
    { id: 5, message: 'Monthly impact report is ready', time: '2 days ago', type: 'report' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-full">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Akshaya</h1>
                <p className="text-xs text-green-600">Dashboard</p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              {/* Role Switcher (for demo) */}
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value as 'Restaurant/Hotel' | 'NGO')}
                className="text-sm border border-gray-300 rounded-md px-3 py-1 bg-white"
              >
                <option value="Restaurant/Hotel">Restaurant View</option>
                <option value="NGO">NGO View</option>
              </select>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Bell className="h-6 w-6" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {mockNotifications.map((notification) => (
                        <div key={notification.id} className="p-3 border-b border-gray-100 hover:bg-gray-50">
                          <p className="text-sm text-gray-900">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center">
                      <button className="text-sm text-green-600 hover:text-green-700">View All</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                </button>

                {showProfile && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-3 border-b border-gray-200">
                      <p className="font-medium text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-500">{userRole}</p>
                    </div>
                    <div className="py-1">
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {userRole === 'Restaurant/Hotel' ? 'Restaurant Dashboard' : 'NGO Dashboard'}
            </h1>
            <p className="text-gray-600 mt-1">
              {userRole === 'Restaurant/Hotel' 
                ? 'Manage your food donations and track impact' 
                : 'Track food pickups and distribution progress'
              }
            </p>
          </div>
          <button className="mt-4 sm:mt-0 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>
              {userRole === 'Restaurant/Hotel' ? 'Add Donation' : 'Request Food'}
            </span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userRole === 'Restaurant/Hotel' ? (
            <>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Donations</p>
                    <p className="text-2xl font-bold text-gray-900">{restaurantData.totalDonations}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">+12% from last month</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Meals Provided</p>
                    <p className="text-2xl font-bold text-gray-900">{restaurantData.mealsProvided}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-blue-600 mt-2">Impact growing</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Waste Reduced</p>
                    <p className="text-2xl font-bold text-gray-900">{restaurantData.wasteReduced}%</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <p className="text-sm text-yellow-600 mt-2">Excellent progress</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Partner NGOs</p>
                    <p className="text-2xl font-bold text-gray-900">{restaurantData.partnerNGOs}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-sm text-purple-600 mt-2">Strong network</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Food Received</p>
                    <p className="text-2xl font-bold text-gray-900">{ngoData.totalReceived}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Truck className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">+8% from last month</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Meals Distributed</p>
                    <p className="text-2xl font-bold text-gray-900">{ngoData.mealsDistributed}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-blue-600 mt-2">Lives touched</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">People Served</p>
                    <p className="text-2xl font-bold text-gray-900">{ngoData.peopleServed}</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <p className="text-sm text-yellow-600 mt-2">Community impact</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Partner Restaurants</p>
                    <p className="text-2xl font-bold text-gray-900">{ngoData.partnerRestaurants}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-sm text-purple-600 mt-2">Growing network</p>
              </div>
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {userRole === 'Restaurant/Hotel' ? 'Recent Donations' : 'Recent Pickups'}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Search className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Filter className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {(userRole === 'Restaurant/Hotel' ? restaurantData.recentDonations : ngoData.recentPickups).map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <Package className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{item.food}</h3>
                            <p className="text-sm text-gray-600">
                              {item.quantity} • {'ngo' in item ? item.ngo : item.restaurant}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                          {item.status.replace('-', ' ')}
                        </span>
                        <div className="text-sm text-gray-500 flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.time}</span>
                        </div>
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 text-center border-t border-gray-200">
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  View All Activity
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white p-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>{userRole === 'Restaurant/Hotel' ? 'New Donation' : 'Request Food'}</span>
                </button>
                <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Find {userRole === 'Restaurant/Hotel' ? 'NGOs' : 'Restaurants'}</span>
                </button>
                <button className="w-full bg-gray-600 text-white p-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule Pickup</span>
                </button>
              </div>
            </div>

            {/* Impact Summary */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-4">This Month&apos;s Impact</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-green-100">Meals Provided</span>
                  <span className="font-semibold">
                    {userRole === 'Restaurant/Hotel' ? '324' : '289'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-100">CO₂ Saved</span>
                  <span className="font-semibold">156 kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-100">People Helped</span>
                  <span className="font-semibold">
                    {userRole === 'Restaurant/Hotel' ? '162' : '145'}
                  </span>
                </div>
              </div>
              <button className="w-full bg-white bg-opacity-20 text-white p-2 rounded-lg font-medium hover:bg-opacity-30 transition-colors mt-4">
                View Full Report
              </button>
            </div>

            {/* Recent Partners */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Recent {userRole === 'Restaurant/Hotel' ? 'NGO' : 'Restaurant'} Partners
              </h3>
              <div className="space-y-3">
                {['Hope Foundation', 'Care Trust', 'Seva Mandal'].map((partner, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{partner}</p>
                      <p className="text-xs text-gray-500">Active partner</p>
                    </div>
                    <button className="text-green-600 hover:text-green-700">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}