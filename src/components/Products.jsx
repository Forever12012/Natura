import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import milk from '../images/milk.jpg'
import yogurt from '../images/yogurt.jpg'
import { Link } from 'react-router-dom'


const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const products = [
    {
      name: "Fresh Whole Milk",
      image: milk,
      description: "Straight from our Holstein Friesian cows, our whole milk is rich, creamy, and packed with nutrients. Available in glass bottles to preserve freshness and flavor.",
      sizes: ["500ml", "1 Liter", "2 Liter"]
    },
    {
      name: "Natural Yogurt",
      image: yogurt,
      description: "Our creamy yogurt is made from pure whole milk and live cultures. With no added sugars or preservatives, it's the perfect healthy snack or breakfast option.",
      sizes: ["200g", "500g", "1kg"]
    },
    {
      name: "Farm Butter",
      image: "https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "Hand-churned butter made from cream skimmed from our fresh milk. Rich, smooth, and perfect for cooking or spreading on your morning toast.",
      sizes: ["100g", "250g", "500g"]
    },
    {
      name: "Artisan Cheese",
      image: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "Our artisanal cheese is crafted using traditional methods. Available in various flavors and aging periods, perfect for any cheese board or recipe.",
      sizes: ["200g", "500g"]
    }
  ]
  
  return (
    <section id="products" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Our Dairy Products</h2>
          <p className="text-lg text-gray-600">
            From farm to table, we offer a range of premium dairy products made with milk from our Holstein Friesian cows.
            Each product reflects our commitment to quality, taste, and nutritional value.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.sizes.map((size, i) => (
                    <span key={i} className="bg-natura-green/10 text-natura-green px-3 py-1 rounded-full text-sm">
                      {size}
                    </span>
                  ))}
                </div>
                <Link 
                  to="/contact" 
                  className="btn btn-primary w-full text-center"
                >
                  Inquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-natura-cream p-8 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Looking for Wholesale Options?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We offer competitive rates for restaurants, cafes, bakeries, and retail stores. Contact us to discuss how our premium dairy products can enhance your offerings.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact for Wholesale
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Products