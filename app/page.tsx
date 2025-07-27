"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  ArrowRight, 
  Heart, 
  Users, 
  Building2, 
  Truck,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Utensils
} from 'lucide-react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { number: '50,000+', label: 'Meals Distributed', icon: Heart },
    { number: '200+', label: 'Partner Restaurants', icon: Building2 },
    { number: '75+', label: 'NGO Partners', icon: Users },
    { number: '95%', label: 'Food Waste Reduced', icon: CheckCircle }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Real-time Coordination',
      description: 'Connect restaurants with surplus food to NGOs in need through our smart matching system.'
    },
    {
      icon: MapPin,
      title: 'Location-based Matching',
      description: 'Find the nearest partners to minimize transportation time and maximize freshness.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Our platform works around the clock to ensure no good food goes to waste.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Verified partners and quality checks ensure safe food distribution to those who need it.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Manager, Green Garden Restaurant',
      content: 'Akshaya has transformed how we handle surplus food. Instead of throwing away perfectly good meals, we now feed families in need. It feels amazing to contribute to our community.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Director, Hope Foundation NGO',
      content: 'Thanks to Akshaya, we can provide fresh, quality meals to over 200 children daily. The platform makes coordination seamless and efficient.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Owner, Royal Palace Hotel',
      content: 'We reduced our food waste by 90% while helping our community. Akshaya made it simple to connect with local NGOs and make a real difference.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Feeding Hope,
              <span className="text-green-600 block">Not Landfills</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join Akshaya in the fight against food waste. Connect restaurants with surplus food 
              to NGOs serving those in need. Together, we can transform waste into hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/signup"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2 min-w-[200px] justify-center"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/how-it-works"
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors duration-200 min-w-[200px] text-center"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <stat.icon className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Akshaya Makes a Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform bridges the gap between surplus food and hungry communities 
              through innovative technology and compassionate partnerships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple Steps, Big Impact
            </h2>
            <p className="text-xl text-gray-600">
              Getting started with Akshaya is easy for both restaurants and NGOs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sign Up & Verify</h3>
              <p className="text-gray-600">Register as a restaurant or NGO and complete our simple verification process.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect & Coordinate</h3>
              <p className="text-gray-600">Restaurants post surplus food, NGOs respond. Our system matches based on location and need.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deliver & Impact</h3>
              <p className="text-gray-600">Coordinate pickup and delivery. Track your impact and help build a better community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Stories of Impact
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our partners who are making a difference every day
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-6 italic">
              &apos;{testimonials[currentTestimonial].content}&apos;
            </p>
            <div>
              <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
              <p className="text-green-600">{testimonials[currentTestimonial].role}</p>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of restaurants and NGOs working together to eliminate food waste 
            and feed those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Join as Restaurant</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/signup"
              className="bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Join as NGO</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 p-2 rounded-full">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Akshaya</h3>
                  <p className="text-sm text-green-400">Feeding Hope, Not Landfills</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting surplus food with those who need it most, 
                creating a sustainable future for all.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">+91 12345 67890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">hello@akshaya.org</span>
                </div>
                <div className="flex space-x-3 mt-4">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Akshaya. All rights reserved. Made with ❤️ for a better tomorrow.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}