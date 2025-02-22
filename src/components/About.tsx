import { Camera, Award, Users, Heart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const About = () => {
  const stats = [
    { icon: Camera, value: '1000+', label: 'Photo Sessions' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Heart, value: '50+', label: 'Awards Won' }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 data-aos="fade-right" className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Our Studio
            </h2>
            <p data-aos="fade-right" className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With over 15 years of experience in professional photography, we've built a reputation
              for excellence in capturing life's most precious moments. Our passion for photography
              goes beyond just taking pictures – we create timeless memories that tell your unique story.
            </p>
            <p data-aos="fade-right" className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our team of skilled photographers combines technical expertise with artistic vision
              to deliver stunning results that exceed expectations. Whether it's a wedding, corporate
              event, or personal portrait session, we approach each project with dedication and creativity.
            </p>
            <button onClick={scrollToContact} data-aos="fade-right" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200">
              Contact
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                data-aos="fade-left"
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white dark:text-gray-900" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;