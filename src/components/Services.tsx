import { useState } from 'react';
import { Camera, Users, Image, Package, Heart, Video, Aperture, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Camera,
      title: 'Wedding Photography',
      description: 'Capture your special day with our professional wedding photography services. We focus on both candid and posed shots to tell your unique love story.',
      features: ['Full Day Coverage', 'Engagement Session', 'Digital Gallery', 'Premium Editing']
    },
    {
      icon: Users,
      title: 'Event Coverage',
      description: 'From corporate events to private parties, we provide comprehensive coverage of your special occasions with attention to detail.',
      features: ['Multiple Photographers', 'Same-Day Previews', 'Corporate Packages', 'Event Timeline Planning']
    },
    {
      icon: Package,
      title: 'Product Photography',
      description: 'Showcase your products in the best light with our professional product photography services. Perfect for e-commerce and marketing materials.',
      features: ['360° Views', 'White Background', 'Lifestyle Shots', 'Commercial License']
    },
    {
      icon: Image,
      title: 'Portrait Sessions',
      description: 'Individual or group portraits that capture personality and emotion. Perfect for professional headshots or family photos.',
      features: ['Studio Sessions', 'Outdoor Shoots', 'Retouching', 'Multiple Outfits']
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video services for events, weddings, and commercial projects. Cinematic quality that tells your story.',
      features: ['4K Recording', 'Drone Footage', 'Audio Recording', 'Professional Editing']
    },
    {
      icon: Heart,
      title: 'Family Sessions',
      description: 'Preserve precious family moments with our specialized family photography sessions. Natural, candid, and full of joy.',
      features: ['Child-Friendly', 'Multiple Locations', 'Print Packages', 'Digital Delivery']
    },
    {
      icon: Aperture,
      title: 'Fine Art Photography',
      description: 'Artistic photography for collectors and enthusiasts. Limited edition prints and custom artwork for your space.',
      features: ['Museum Quality', 'Limited Editions', 'Custom Framing', 'Art Consultation']
    },
    {
      icon: MapPin,
      title: 'Location Shoots',
      description: 'On-location photography services for real estate, architecture, and landscape projects. Technical excellence meets artistic vision.',
      features: ['Aerial Photos', 'HDR Imaging', 'Virtual Tours', 'Licensed Drone Pilot']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-indigo-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
            Our Services
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          </h2>
          <p data-aos="fade-up" className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-8">
            Professional photography services tailored to your needs. We combine technical expertise
            with creative vision to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-indigo-100 dark:hover:border-gray-700">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className={`space-y-3 transition-all duration-300 ${
                    hoveredService === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;