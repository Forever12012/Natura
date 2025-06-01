import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ourStory from '../images/story.jpg'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <section id="about" className="section-padding bg-natura-cream" ref={ref}>
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <img 
              src={ourStory} 
              alt="Tushar Harinkhede, owner of Natura Dairy" 
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="lg:pl-6">
            <h2 className="text-natura-green mb-6">Our Story</h2>
            <p className="mb-4">
              Welcome to Natura Dairy, where passion for quality dairy products meets commitment to animal welfare. Founded by Tushar Harinkhede in the serene landscapes of Gondia, Maharashtra, our farm is home to a herd of purebred Holstein Friesian cows.
            </p>
            <p className="mb-4">
              My journey began with a simple vision – to create a dairy farm where cows are treated with respect and care, resulting in the purest, most nutritious milk possible. At Natura, we believe that happy cows produce better milk, which is why our Holstein Friesian cows enjoy spacious, clean living conditions and a nutritionally balanced diet.
            </p>
            <p className="mb-8">
              Every bottle of milk from Natura carries with it our commitment to quality, cleanliness, and ethical farming practices. We take pride in delivering dairy products that are not just delicious but also produced with the highest standards of care – both for our animals and for you, our valued customers.
            </p>
            <div className="flex items-center space-x-6">
              <div>
                <h4 className="text-3xl font-bold text-natura-green">15+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-natura-green">100+</h4>
                <p className="text-gray-600">Holstein Cows</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-natura-green">500+</h4>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About