import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import mp from '../images/mp.jpg'
import graze from '../images/grazing.jpg'
import bm from '../images/bm.jpg'
import milk from '../images/milking.jpg'
import herd from '../images/herd.jpg'
import bmc from '../images/bmc.jpg'



const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [selectedImage, setSelectedImage] = useState(null)
  
  const galleryImages = [
    {
      url: graze,
      caption: "Our Holstein Friesian cows grazing in green pastures"
    },
    {
      url: mp,
      caption: "Clean and modern milking facility ensuring highest hygiene standards"
    },
    {
      url: bm,
      caption: "Fresh milk being bottled directly at our dairy"
    },
    {
      url: milk,
      caption: "Holstein Friesian cows known for their superior milk production"
    },
    {
      url: herd,
      caption: "Our happy cows enjoying the serene environment of Gondia"
    },
    {
      url: bmc,
      caption: "State-of-the-art cooling systems for fresh milk preservation"
    }
  ]
  
  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }
  
  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }
  
  return (
    <>
      <section id="gallery" className="section-padding bg-gray-100" ref={ref}>
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Our Gallery</h2>
            <p className="text-lg text-gray-600">
              Take a visual tour of our farm, meet our Holstein Friesian cows, and see our commitment to quality in action.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer image-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openModal(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.caption} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <p className="text-gray-800">{selectedImage.caption}</p>
            </div>
            <button 
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800"
              onClick={closeModal}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Gallery