'use client';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingSection = () => {
  const packages = [
    {
      name: 'Essential Package',
      price: '499',
      description: 'Perfect for intimate events and personal photoshoots',
      features: [
        'Single professional photographer',
        'Full-day coverage (8 hours)',
        'High-resolution digital photos',
        'Professional photo editing',
        'Online gallery',
        'Physical photo album (20 pages)',
        'USB drive with all photos',
        '100 printed photos'
      ],
    },
    {
      name: 'Premium Package',
      price: '899',
      description: 'Ideal for weddings and special celebrations',
      features: [
        'Professional photographer + videographer',
        'Full-day coverage (10 hours)',
        'High-resolution photos & 4K video',
        'Cinematic highlight video (5-7 minutes)',
        'Drone footage included',
        'Professional photo & video editing',
        'Premium photo album (30 pages)',
        'USB drive with all content',
        '200 printed photos',
        'Same-day photo preview'
      ],
      featured: true,
    },
    {
      name: 'Ultimate Experience',
      price: '1,499',
      description: 'Complete coverage for luxury events',
      features: [
        '5 crew members (3 photographers, 2 videographers)',
        'Full event coverage (12 hours)',
        'Dedicated social media manager',
        'Custom Instagram page creation',
        'Live event coverage on social media',
        'Multiple angle shots & coverage',
        'Drone & gimbal footage',
        'Premium photo & video editing',
        'Luxury photo album (40 pages)',
        'Instagram-ready content package',
        'Express delivery within 48 hours',
        'Exclusive behind-the-scenes content'
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light tracking-wider mb-4">Choose Your Package</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect package that suits your event needs. Each package is customizable to ensure your special moments are captured exactly as you envision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                pkg.featured
                  ? 'bg-white/10 border-2 border-white'
                  : 'bg-white/5 border border-gray-800'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-light tracking-wider mb-4">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-light">${pkg.price}</span>
                </div>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-white flex-shrink-0 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg transition-colors duration-300 ${
                  pkg.featured
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'border border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                Choose {pkg.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
