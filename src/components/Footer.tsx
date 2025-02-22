import { Instagram, Twitter, Facebook } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="ft bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 data-aos="fade-up" className="text-xl font-bold mb-4">Lens</h3>
            <p data-aos="fade-up" className="text-gray-400">
              Capturing life's precious moments with professional photography services.
              We specialize in creating timeless memories through our lens.
            </p>
          </div>
          
          <div>
            <h4 data-aos="fade-up" className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul data-aos="fade-up" className="space-y-2">
              {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 data-aos="fade-up" className="text-lg font-semibold mb-4">Connect</h4>
            <div data-aos="fade-up" className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <p data-aos="fade-up" className="text-gray-400">
                Follow us on social media for the latest updates and behind-the-scenes content.
              </p>
            </div>
          </div>
          
          <div>
            <h4 data-aos="fade-up" className="text-lg font-semibold mb-4">Newsletter</h4>
            <form data-aos="fade-up" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p >© {new Date().getFullYear()} Lens Photography. All rights reserved.Designed and developed by <a className='ss' href='https://sairamkottu.ccbp.tech/' target='_blank'>Sairam</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;