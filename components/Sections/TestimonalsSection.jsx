import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const TestimonialsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white dark:bg-[#242622]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#F37621] font-semibold mb-2 font-inter">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#22244E] dark:text-white font-montserrat">
            What our customers say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-[#2E302C] rounded-2xl p-8 hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-[#59C6E5] dark:hover:border-[#59C6E5]"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6 font-inter">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center">
                <div
                  className={`${testimonial.color} rounded-full flex items-center justify-center text-white font-bold w-12 h-12 font-montserrat`}
                >
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-[#22244E] dark:text-white font-montserrat">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
