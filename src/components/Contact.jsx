import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general'
  })
  
  const [formStatus, setFormStatus] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    // For now, we'll simulate a successful form submission
    setFormStatus('success')
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus(null)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'general'
      })
    }, 3000)
  }
  
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-natura-green text-xl" />,
      title: "Address",
      details: "Natura Dairy Farm, Gondia, Maharashtra, India - 441614"
    },
    {
      icon: <FaPhone className="text-natura-green text-xl" />,
      title: "Phone",
      details: "+91 92846 28559"
    },
    {
      icon: <FaEnvelope className="text-natura-green text-xl" />,
      title: "Email",
      details: "info@naturadairy.com"
    },
    {
      icon: <FaClock className="text-natura-green text-xl" />,
      title: "Farm Visit Hours",
      details: "Monday - Saturday: 9:00 AM - 5:00 PM"
    }
  ]
  
  return (
    <section id="contact" className="section-padding bg-natura-cream" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Have questions about our products or interested in placing an order? Reach out to us and we'll be happy to help.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {formStatus === 'success' ? (
              <motion.div 
                className="bg-natura-green/20 border border-natura-green text-natura-green p-4 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-medium">Thank you for your message! We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-natura-green"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-natura-green"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-natura-green"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block mb-1 font-medium">I'm Interested In</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-natura-green"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="wholesale">Wholesale Partnership</option>
                    <option value="visit">Farm Visit</option>
                    <option value="order">Place an Order</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-natura-green"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-md mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{info.title}</h4>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
  <h4 className="font-bold mb-4">Find Us on the Map</h4>
  <div className="bg-white p-4 rounded-lg shadow-md h-64 relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7439.52771528941!2d80.11452808253753!3d21.201537755452573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2ba01831fa204d%3A0x8e652d204d63a716!2sSitepar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1747557920132!5m2!1sen!2sin"
      className="absolute inset-0 w-full h-full rounded-lg"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact