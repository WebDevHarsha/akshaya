import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  Heart, 
  Users, 
  Building2, 
  CheckCircle,
  Target,
  Eye,
  ArrowRight,
  Globe,
  Leaf,
  HandHeart,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We believe every person deserves access to nutritious food and no good meal should go to waste.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Creating a circular food economy that benefits both people and the planet.'
    },
    {
      icon: HandHeart,
      title: 'Community',
      description: 'Building strong partnerships between businesses and organizations to create lasting impact.'
    },
    {
      icon: CheckCircle,
      title: 'Transparency',
      description: 'Maintaining open communication and accountability in all our operations and partnerships.'
    }
  ];

  const milestones = [
    { year: '2023', event: 'Akshaya founded with a vision to eliminate food waste', count: '1' },
    { year: '2023', event: 'First 10 restaurant partners joined our platform', count: '10' },
    { year: '2024', event: 'Reached 100+ NGO partnerships across major cities', count: '100+' },
    { year: '2024', event: 'Facilitated distribution of 25,000+ meals', count: '25K+' },
    { year: '2025', event: 'Expanded to 200+ restaurants and 50,000+ meals served', count: '50K+' }
  ];

  const impact = [
    { number: '50,000+', label: 'Meals Rescued', icon: Heart },
    { number: '200+', label: 'Partner Restaurants', icon: Building2 },
    { number: '75+', label: 'NGO Partners', icon: Users },
    { number: '15', label: 'Cities Covered', icon: Globe },
    { number: '95%', label: 'Food Waste Reduced', icon: Leaf },
    { number: '24/7', label: 'Platform Availability', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-green-600 block">Akshaya</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We are on a mission to transform the way surplus food reaches those who need it most, 
              creating a sustainable ecosystem that benefits everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To eliminate food waste by creating an efficient, technology-driven platform that connects 
                restaurants and hotels with surplus food to NGOs and communities in need. We strive to ensure 
                that no good meal goes to waste while addressing hunger and malnutrition in our society.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where food waste is eliminated, hunger is eradicated, and every community has access 
                to nutritious meals. We envision Akshaya as the leading platform for food redistribution, 
                creating a sustainable circular economy that benefits both businesses and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600">
              How Akshaya came to life through passion and purpose
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Akshaya was born from a simple observation: millions of people go hungry every day while 
                tons of perfectly good food gets wasted. In 2023, our founder witnessed this paradox 
                firsthand when they saw restaurants throwing away surplus food at the end of each day, 
                while nearby communities struggled with food insecurity.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                The name &quot;Akshaya&quot; comes from Sanskrit, meaning &quot;imperishable&quot; or &quot;never diminishing&quot; – 
                reflecting our belief that when we share food with love and purpose, its impact never diminishes. 
                Instead, it multiplies, creating ripples of positive change throughout communities.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                What started as a small initiative to connect a few local restaurants with nearby NGOs has 
                grown into a comprehensive platform serving multiple cities. We&apos;ve learned that technology, 
                when combined with human compassion, can solve complex social problems at scale.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Today, Akshaya stands as a testament to what&apos;s possible when businesses, nonprofits, and 
                technology work together toward a common goal. Every meal rescued, every partnership formed, 
                and every life touched brings us closer to our vision of a world without food waste or hunger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Impact So Far
            </h2>
            <p className="text-xl text-green-100">
              Numbers that tell the story of change we&apos;re creating together
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {impact.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-green-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to eliminate food waste
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-sm font-bold relative z-10">
                    {milestone.year}
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-lg flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{milestone.event}</h3>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {milestone.count}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Founder
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn about the passionate individuals who started this movement
          </p>
          <Link
            href="/founder"
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Meet the Team</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you&apos;re a restaurant, NGO, or individual, there&apos;s a place for you in our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
