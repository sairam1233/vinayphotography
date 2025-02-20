import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Wedding Client',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      content: 'Working with this photography studio was an absolute dream! They captured our wedding day perfectly, creating memories that will last a lifetime. Their attention to detail and professionalism exceeded all our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Event',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      content: 'Professional, creative, and incredibly talented. They did an amazing job with our company event photography. The team was efficient, unobtrusive, and delivered stunning results that perfectly captured our brand image.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Family Portrait',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      content: 'They have a special talent for capturing genuine moments. Our family photos turned out beautifully, and the experience was so enjoyable. They made everyone feel comfortable and natural in front of the camera.',
      rating: 5
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
            Client Testimonials
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-8">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-100 dark:text-gray-800/30 pointer-events-none">
            <Quote size={160} className="transform -scale-x-100" />
          </div>

          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-x-0'
                    : index < currentTestimonial
                    ? 'opacity-0 -translate-x-full absolute top-0 left-0 right-0'
                    : 'opacity-0 translate-x-full absolute top-0 left-0 right-0'
                }`}
              >
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                  <div className="flex flex-col items-center">
                    <div className="mb-8 relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-indigo-100 dark:ring-gray-700">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm">
                        {testimonial.role}
                      </div>
                    </div>

                    <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentTestimonial(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'w-8 bg-indigo-600 dark:bg-indigo-400'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;