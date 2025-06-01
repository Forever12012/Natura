import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRegCheckCircle } from 'react-icons/fa'

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const milkBenefits = [
    "Rich in essential nutrients like calcium, vitamin D, and protein",
    "Supports bone health and helps prevent osteoporosis",
    "Provides high-quality protein for muscle maintenance and growth",
    "Contains vitamin B12, vital for red blood cell formation and brain function",
    "Natural source of phosphorus, important for kidney function and bone health",
    "Contains potassium, which helps maintain healthy blood pressure",
    "Provides iodine, essential for thyroid function and metabolic rate",
    "Source of vitamin A, supporting vision and immune function"
  ]
  
  return (
    <section id="benefits" className="section-padding relative overflow-hidden" ref={ref}>
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">The Benefits of Pure Milk</h2>
            <p className="mb-8 text-lg">
              Milk from our Holstein Friesian cows is more than just a refreshing beverage—it's a nutrient powerhouse that offers numerous health benefits for people of all ages.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {milkBenefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FaRegCheckCircle className="text-natura-green text-lg mt-1 mr-2 flex-shrink-0" />
                  <p>{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-4">Why Choose Natura Milk?</h3>
              <p className="mb-6">
                Our Holstein Friesian cows are known for producing milk that is:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-natura-green/20 flex items-center justify-center mr-4">
                    <span className="text-natura-green font-bold">4.0%</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Fat Content</h4>
                    <p className="text-sm text-gray-600">Rich, creamy texture</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-natura-green/20 flex items-center justify-center mr-4">
                    <span className="text-natura-green font-bold">3.5%</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Protein Content</h4>
                    <p className="text-sm text-gray-600">High nutritional value</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-natura-green/20 flex items-center justify-center mr-4">
                    <span className="text-natura-green font-bold">A2</span>
                  </div>
                  <div>
                    <h4 className="font-bold">A2 Protein</h4>
                    <p className="text-sm text-gray-600">Easier to digest for many people</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#products" className="btn btn-primary">
                  Explore Our Products
                </a>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-natura-green/10 rounded-full z-0"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-natura-green/10 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Benefits