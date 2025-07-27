import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  Linkedin, 
  Twitter, 
  Mail,
  BookOpen,
  Heart,
  Lightbulb,
  ArrowRight,
  Users,
  Globe,
  Target
} from 'lucide-react';

export default function Founder() {
  const founder = [
    {
      name: 'Sri Harsha',
      role: 'Founder & CEO',
      image: '/api/placeholder/300/300', 
      bio: '',
      education: ' VIT Chennai | B.Tech, Electronics and Computer Engineering',
      linkedin: 'https://www.linkedin.com/in/sri-harsha-v-a-a64643273/',
      twitter: 'https://x.com/WeberHarsha',
      email: 'vasriharsha@gmail.com',
    }
  ];

  const foundertory = {
    inspiration: "The idea for Akshaya was born during a late-night conversation between our founder at a Mumbai restaurant. They witnessed perfectly good food being thrown away while homeless individuals waited outside. That moment of cognitive dissonance sparked a mission that would grow into India's leading food rescue platform.",
    journey: "What started as weekend volunteering to redistribute leftover food quickly evolved into a systematic approach. The founder realized that the problem wasn't just about goodwill – it was about efficient coordination, quality assurance, and scalable technology. They left their corporate jobs to build Akshaya full-time.",
    vision: "Today, our founder continue to lead by example, working directly with restaurant partners and NGOs to understand ground realities. Their combined expertise in social impact, technology, and operations creates the perfect foundation for Akshaya's mission."
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet Our
              <span className="text-green-600 block">founder</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The passionate visionaries who turned a simple idea into a movement that&apos;s 
              transforming how we think about food waste and community care.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Story Behind Akshaya
            </h2>
            <p className="text-xl text-gray-600">
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">The Inspiration</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{foundertory.inspiration}</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">The Journey</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{foundertory.journey}</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">The Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{foundertory.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* founder Profiles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the individuals driving change at Akshaya
            </p>
          </div>
          
          <div className="space-y-16">
            {founder.map((founder, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Profile Image */}
                <div className="lg:w-1/3">
                  <div className="relative">
                    <div className="w-80 h-80 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-6xl font-bold">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
                  </div>
                </div>
                
                {/* Profile Content */}
                <div className="lg:w-2/3">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                      <p className="text-xl text-green-600 font-semibold mb-4">{founder.role}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Education</h4>
                      </div>
                      <p className="text-sm text-gray-600">{founder.education}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <a 
                        href={founder.linkedin}
                        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                        aria-label={`${founder.name} LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href={founder.twitter}
                        className="bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition-colors"
                        aria-label={`${founder.name} Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a 
                        href={`mailto:${founder.email}`}
                        className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                        aria-label={`Email ${founder.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What Drives Us
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Our founder shares a common belief that technology and compassion can solve the world&apos;s biggest challenges
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Purpose-Driven</h3>
              <p className="text-gray-600">Every decision we make is guided by our mission to eliminate hunger and food waste.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community-First</h3>
              <p className="text-gray-600">We believe in building partnerships that benefit everyone in the ecosystem.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Globe className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Impact</h3>
              <p className="text-gray-600">Creating long-term solutions that benefit both people and the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want to Connect?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Our founder are always excited to meet like-minded individuals who share our passion for social impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/signup"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Join Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
