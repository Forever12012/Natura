import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLeaf, FaThermometerHalf, FaHome, FaHeartbeat } from 'react-icons/fa'
import threeCows from '../images/3cows.jpg'

const CowCare = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const carePractices = [
    {
      icon: <FaLeaf className="text-4xl text-natura-green" />,
      title: "Nutritious Diet",
      description: "Our cows enjoy a carefully balanced diet of fresh fodder, high-quality grains, and nutritional supplements to ensure optimal health and milk production."
    },
    {
      icon: <FaHome className="text-4xl text-natura-green" />,
      title: "Spacious Housing",
      description: "We provide clean, well-ventilated barns with comfortable bedding and enough space for our cows to move freely, promoting their natural behaviors and well-being."
    },
    {
      icon: <FaHeartbeat className="text-4xl text-natura-green" />,
      title: "Regular Health Checks",
      description: "Our veterinary team conducts regular health assessments, vaccinations, and preventive care to ensure our Holstein Friesian herd remains in excellent health."
    },
    {
      icon: <FaThermometerHalf className="text-4xl text-natura-green" />,
      title: "Climate Control",
      description: "Our barns are equipped with cooling systems and fans to keep cows comfortable during hot summers, and warm, draft-free environments during winters."
    }
  ]
  
  return (
    <section id="cow-care" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">How We Care for Our Cows</h2>
          <p className="text-lg text-gray-600">
            At Natura, we believe that exceptional milk begins with exceptional care for our Holstein Friesian cows. 
            Our comprehensive approach ensures their comfort, health, and happiness.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {carePractices.map((practice, index) => (
            <motion.div 
              key={index}
              className="feature-card bg-gray-50 p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{practice.icon}</div>
              <h3 className="text-xl font-bold mb-3">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-natura-green/10 p-8 rounded-xl border border-natura-green/20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Commitment to Ethical Farming</h3>
              <p className="mb-4">
                We believe in sustainable and ethical dairy farming practices. Our commitment goes beyond just producing high-quality milk – we strive to be responsible stewards of the environment and our animals.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                <li>No growth hormones or unnecessary antibiotics</li>
                <li>Sustainable waste management systems</li>
                <li>Regular exercise and outdoor access when weather permits</li>
                <li>Low-stress handling techniques and quiet environments</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
              <img 
                src={threeCows}
                alt="Holstein Friesian cow grazing" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CowCare