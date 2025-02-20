import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'Essential Tips for Better Portrait Photography',
      excerpt: 'Learn the fundamentals of capturing stunning portraits with these professional tips...',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
      date: 'Mar 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'Wedding Photography: Capturing the Perfect Moment',
      excerpt: 'Discover the secrets to capturing those magical wedding moments that last forever...',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
      date: 'Mar 10, 2024',
      readTime: '4 min read'
    },
    {
      title: 'The Art of Landscape Photography',
      excerpt: 'Master the techniques of capturing breathtaking landscape photographs...',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80',
      date: 'Mar 5, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Latest from the Blog
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                
                <a
                  href="#"
                  className="inline-block text-gray-900 dark:text-white font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;