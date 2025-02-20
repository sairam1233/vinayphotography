import React from 'react';
import { Check, Camera, Users, Video, Star } from 'lucide-react';
import toast from 'react-hot-toast';

const Packages = () => {
  const handleBooking = (packageName: string) => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      toast.success(`Selected ${packageName} package. Please fill out the contact form.`, {
        icon: '✨',
        style: {
          background: '#4F46E5',
          color: '#FFFFFF'
        },
        duration: 3000
      });
    }
  };

  const packages = [
    {
      name: 'Essential',
      price: 299,
      icon: Camera,
      description: 'Perfect for small events and portrait sessions',
      features: [
        '2-hour photography session',
        '50 professionally edited photos',
        'Online gallery delivery',
        'Single location shoot',
        'Basic photo retouching',
        '5 printed photos (8x10)'
      ]
    },
    {
      name: 'Professional',
      price: 599,
      icon: Users,
      description: 'Ideal for weddings and large events',
      features: [
        '6-hour photography session',
        '150 professionally edited photos',
        'Online gallery + USB delivery',
        'Multiple location shoots',
        'Advanced retouching',
        '20 printed photos (8x10)',
        'One 16x20 canvas print',
        'Engagement shoot session'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 999,
      icon: Video,
      description: 'Complete coverage for your special day',
      features: [
        'Full-day photography coverage',
        '300+ professionally edited photos',
        'Online gallery + USB delivery',
        'Unlimited locations',
        'Premium retouching',
        '50 printed photos (8x10)',
        'Two 16x20 canvas prints',
        'Engagement shoot session',
        '4K highlight video (5 minutes)',
        'Photo album design'
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-white via-indigo-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
            Our Packages
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-8">
            Choose the perfect package for your photography needs. Each package is customizable
            to ensure you get exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-300 transform hover:-translate-y-2 ${
                pkg.popular ? 'lg:-mt-8 lg:mb-8' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" /> Most Popular
                  </div>
                </div>
              )}
              
              <div className={`h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                pkg.popular 
                  ? 'border-2 border-indigo-500 dark:border-indigo-400 shadow-indigo-100 dark:shadow-none'
                  : 'border border-gray-100 dark:border-gray-700'
              }`}>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-6 transition-transform duration-300">
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center mb-8">
                    <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                      ${pkg.price}
                    </span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">
                      /session
                    </span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mt-1 mr-3">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleBooking(pkg.name)}
                    className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;