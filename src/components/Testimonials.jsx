import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Local Restaurant Owner",
      testimonial: "We've been sourcing dairy products from Natura for our restaurant for over two years now. The consistent quality and rich taste have made a noticeable difference in our dishes. Our customers often compliment the creaminess of our paneer dishes and desserts made with Natura's milk.",
      stars: 5
    },
    {
      name: "Rajesh Patel",
      role: "Health Enthusiast",
      testimonial: "As someone who's particular about nutrition, I appreciate how transparent Natura is about their farming practices. Their milk has a distinctly better taste than commercial brands, and I feel good knowing it comes from well-cared-for cows. My children love the yogurt too!",
      stars: 5
    },
    {
      name: "Meera Joshi",
      role: "Local Bakery Owner",
      testimonial: "The quality of dairy ingredients makes all the difference in baking, and Natura's products have elevated our pastries and cakes. Their butter especially has the perfect fat content for creating those flaky, melt-in-your-mouth textures that our customers love.",
      stars: 5
    }
  ]
  
  useEffect(() => {
    if (testimonials.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  return (
    <section id="testimonials" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our customers have to say about Natura's dairy products.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <FaQuoteLeft className="text-natura-green/20 text-6xl mb-6" />
            
            <div className="min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: currentTestimonial === index ? 1 : 0,
                    x: currentTestimonial === index ? 0 : 20,
                    position: currentTestimonial === index ? 'relative' : 'absolute'
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${currentTestimonial === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-lg mb-6 italic text-gray-700">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                    <div className="flex mt-2 sm:mt-0">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'} text-xl`} 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentTestimonial === index ? 'bg-natura-green' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6">Ready to Try Natura's Quality?</h3>
          <Link to={"/contact"} className="btn btn-primary">
            Get in Touch Today
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials