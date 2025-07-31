import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center bg-gradient-to-b from-black/60 to-black/20 bg-blend-overlay"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="mb-4">
            Pure Dairy Delight from Nature's Heart
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            At Natura, we bring you the finest milk and dairy products from our happy Holstein Friesian cows raised in the serene landscapes of Gondia, Maharashtra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#products"
              className="btn bg-natura-green text-white hover:bg-natura-green/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Product
            </motion.a>
            <motion.a 
              href="#cow-care"
              className="btn bg-white text-natura-green hover:bg-white/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Approach
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20L4 12L5.41421 10.5858L12 17.1716L18.5858 10.5858L20 12L12 20Z" fill="white"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero