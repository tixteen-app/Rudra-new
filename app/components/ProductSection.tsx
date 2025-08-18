// "use client"

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Plus } from 'lucide-react';

// const ProductSection: React.FC = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
//   const videoTimes = useRef<number[]>([]); // To store current playback times
//   const initializedRef = useRef(false);

//   // Product data with the new videos
//   const products = [
//     {
//       id: 1,
//       videoUrl: 'https://cdn.sanity.io/files/226cdrrp/production/c7dc0e053b05b3692283ca1769165f3306164cc7.mp4',
//       posterUrl: 'https://images.unsplash.com/photo-1563715656-f3b84bf6ad2b?w=400&h=400&fit=crop&crop=center&q=80'
//     },
//     {
//       id: 2,
//       videoUrl: 'https://cdn.sanity.io/files/226cdrrp/production/280e6e40b41cd3c181efcd9336264795dc49b7e5.mp4',
//       posterUrl: 'https://images.unsplash.com/photo-1563715656-f3b84bf6ad2b?w=400&h=400&fit=crop&crop=center&q=80'
//     },
//     {
//       id: 3,
//       videoUrl: 'https://cdn.sanity.io/files/226cdrrp/production/5241435b2ca6f9bbc81fd21b344dfc6cae15e79c.mp4',
//       posterUrl: 'https://images.unsplash.com/photo-1563715656-f3b84bf6ad2b?w=400&h=400&fit=crop&crop=center&q=80'
//     },
//     // Repeating the videos to fill the grid (you can add more unique videos if needed)
//     ...Array.from({ length: 13 }, (_, index) => ({
//       id: index + 4,
//       videoUrl: [
//         'https://cdn.sanity.io/files/226cdrrp/production/c7dc0e053b05b3692283ca1769165f3306164cc7.mp4',
//         'https://cdn.sanity.io/files/226cdrrp/production/280e6e40b41cd3c181efcd9336264795dc49b7e5.mp4',
//         'https://cdn.sanity.io/files/226cdrrp/production/5241435b2ca6f9bbc81fd21b344dfc6cae15e79c.mp4'
//       ][index % 3],
//       posterUrl: `https://images.unsplash.com/photo-${1563715656 + index}f3b84bf6ad2b?w=400&h=400&fit=crop&crop=center&q=80`
//     }))
//   ];

//   // Initialize videoTimes array
//   useEffect(() => {
//     videoTimes.current = new Array(products.length).fill(0);
//   }, [products.length]);

//   useEffect(() => {
//     if (initializedRef.current) return;
//     initializedRef.current = true;

//     // Play all videos for 1 second on initial load
//     videoRefs.current.forEach((video) => {
//       if (video) {
//         video.currentTime = 0;
//         video.play().catch(e => console.error("Video play failed:", e));
//       }
//     });

//     // Pause all videos after 1 second
//     const timer = setTimeout(() => {
//       videoRefs.current.forEach((video, index) => {
//         if (video) {
//           video.pause();
//           video.currentTime = 0;
//           videoTimes.current[index] = 0; // Reset stored time
//         }
//       });
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleMouseEnter = (index: number) => {
//     setHoveredIndex(index);
//     const video = videoRefs.current[index];
//     if (video) {
//       video.currentTime = videoTimes.current[index] || 0; // Resume from stored time
//       video.play().catch(e => console.error("Video play failed:", e));
//     }
//   };

//   const handleMouseLeave = (index: number) => {
//     setHoveredIndex(null);
//     const video = videoRefs.current[index];
//     if (video) {
//       videoTimes.current[index] = video.currentTime; // Store current playback position
//       video.pause();
//     }
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Title */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-600 font-normal"
//           style={{color:"#a4b0ae" , fontFamily: 'var(--kohinoor-2)' }}
//           >
//             We Deliver instead of "Your Purpose,Our Priority"
//           </h2>
//         </motion.div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               className="relative aspect-square cursor-pointer"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
//               viewport={{ once: true }}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={() => handleMouseLeave(index)}
//             >
//               {/* Video Container */}
//               <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
//                 <video
//                   ref={(el) => { videoRefs.current[index] = el; }}
//                   className="w-full h-full object-cover"
//                   muted
//                   loop
//                   poster={product.posterUrl}
//                   preload="auto"
//                   playsInline
//                 >
//                   <source src={product.videoUrl} type="video/mp4" />
//                 </video>

//                 {/* Plus Icon */}
//                 <motion.div
//                   className="absolute top-3 right-3 w-6 h-6 md:w-8 md:h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
//                   initial={{ opacity: 0.7 }}
//                   whileHover={{ opacity: 1, scale: 1.1 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <Plus size={14} className="md:size-4 text-gray-700" />
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;



"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const ProductSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const videoTimes = useRef<number[]>([]);
  const initializedRef = useRef(false);

  // Product data with dummy details
  const products = [
    {
      id: 1,
      videoUrl: 'https://cdn.sanity.io/files/226cdrrp/production/c7dc0e053b05b3692283ca1769165f3306164cc7.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1563715656-f3b84bf6ad2b?w=400&h=400&fit=crop&crop=center&q=80',
      name: 'Premium Industrial Gear',
      price: '$249.99',
      description: 'High-performance industrial component designed for durability and precision in demanding environments.',
      features: ['Corrosion resistant', 'High torque capacity', 'Precision machined', 'Long service life'],
      industry: 'Industrial',
      weight: '726g',
      material: 'IC 8620 Low Alloy Steel',
      focus: 'Quality Control'
    },
    {
      id: 2,
      videoUrl: 'https://cdn.sanity.io/files/226cdrrp/production/280e6e40b41cd3c181efcd9336264795dc49b7e5.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1563715656-f3b84bf6ad2b?w=400&h=400&fit=crop&crop=center&q=80',
      name: 'Heavy Duty Bearing',
      price: '$179.99',
      description: 'Industrial-grade bearing with superior load capacity and wear resistance.',
      features: ['High load capacity', 'Sealed design', 'Precision ground', 'Low maintenance'],
      industry: 'Industrial',
      weight: '845g',
      material: 'Chromium Steel',
      focus: 'Precision Engineering'
    },
    {
      id: 3,
      videoUrl: 'https://cdn.sanity.io/files/226cdrrp/production/5241435b2ca6f9bbc81fd21b344dfc6cae15e79c.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1563715656-f3b84bf6ad2b?w=400&h=400&fit=crop&crop=center&q=80',
      name: 'Hydraulic Valve',
      price: '$899.99',
      description: 'High-pressure hydraulic valve with precise flow control and durability.',
      features: ['5000 PSI rating', 'CNC machined', 'Quick response', 'Leak-proof design'],
      industry: 'Industrial',
      weight: '1.2kg',
      material: 'Stainless Steel 316',
      focus: 'Pressure Control'
    },
    // Repeating the videos to fill the grid with dummy details
    ...Array.from({ length: 13 }, (_, index) => ({
      id: index + 4,
      videoUrl: [
        'https://cdn.sanity.io/files/226cdrrp/production/c7dc0e053b05b3692283ca1769165f3306164cc7.mp4',
        'https://cdn.sanity.io/files/226cdrrp/production/280e6e40b41cd3c181efcd9336264795dc49b7e5.mp4',
        'https://cdn.sanity.io/files/226cdrrp/production/5241435b2ca6f9bbc81fd21b344dfc6cae15e79c.mp4'
      ][index % 3],
      posterUrl: `https://images.unsplash.com/photo-${1563715656 + index}f3b84bf6ad2b?w=400&h=400&fit=crop&crop=center&q=80`,
      name: ['Gear Assembly', 'Pneumatic Cylinder', 'Conveyor Roller', 'Industrial Coupling', 'Machine Mount'][index % 5],
      price: ['$79.99', '$129.99', '$349.99', '$59.99', '$99.99'][index % 5],
      description: [
        'Precision gear assembly for industrial machinery.',
        'High-speed pneumatic cylinder with smooth operation.',
        'Durable conveyor roller for heavy loads.',
        'Flexible coupling for vibration damping.',
        'Stable machine mount for precision equipment.'
      ][index % 5],
      features: [
        ['Hardened teeth', 'Precision aligned', 'Oil impregnated', 'Long lifespan'],
        ['Double acting', 'Corrosion resistant', 'Smooth operation', 'Easy maintenance'],
        ['Stainless steel', 'Ball bearings', 'High load rating', 'Quiet operation'],
        ['Flexible design', 'Torque resistant', 'Easy installation', 'Durable'],
        ['Vibration damping', 'Adjustable height', 'Stable base', 'Easy alignment']
      ][index % 5],
      industry: 'Industrial',
      weight: ['550g', '1.1kg', '2.3kg', '680g', '950g'][index % 5],
      material: ['Carbon Steel', 'Aluminum Alloy', 'Stainless Steel', 'Polyurethane', 'Cast Iron'][index % 5],
      focus: ['Power Transmission', 'Motion Control', 'Material Handling', 'Vibration Damping', 'Stability'][index % 5]
    }))
  ];

  // Initialize videoTimes array
  useEffect(() => {
    videoTimes.current = new Array(products.length).fill(0);
  }, [products.length]);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Play all videos for 1 second on initial load
    videoRefs.current.forEach((video) => {
      if (video) {
        video.currentTime = 0;
        video.play().catch(e => console.error("Video play failed:", e));
      }
    });

    // Pause all videos after 1 second
    const timer = setTimeout(() => {
      videoRefs.current.forEach((video, index) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
          videoTimes.current[index] = 0;
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (selectedProduct === null) {
      setHoveredIndex(index);
      const video = videoRefs.current[index];
      if (video) {
        video.currentTime = videoTimes.current[index] || 0;
        video.play().catch(e => console.error("Video play failed:", e));
      }
    }
  };

  const handleMouseLeave = (index: number) => {
    if (selectedProduct === null) {
      setHoveredIndex(null);
      const video = videoRefs.current[index];
      if (video) {
        videoTimes.current[index] = video.currentTime;
        video.pause();
      }
    }
  };

  const handleProductClick = (index: number) => {
    if (selectedProduct === index) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(index);
      const video = videoRefs.current[index];
      if (video) {
        video.currentTime = 0;
        video.play().catch(e => console.error("Video play failed:", e));
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1750px]  mx-auto px-4 xl:px-24">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-normal"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We Deliver instead of "Your Purpose,Our Priority"
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative aspect-square cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleProductClick(index)}
            >
              {/* Video Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  poster={product.posterUrl}
                  preload="auto"
                  playsInline
                >
                  <source src={product.videoUrl} type="video/mp4" />
                </video>

                {/* Product Details Overlay - Single Column Layout */}
                {selectedProduct === index && (
                  <div className="absolute inset-0 bg-black/20 px-4 py-1 flex flex-col bg-paper/0 backdrop-blur-sm">
                    <div className="flex justify-end">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(null);
                        }}
                        className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <X size={14} className="text-white" />
                      </button>
                    </div>
                    
                    <div className="text-white ">
                      <div className="space-y-3 text-md ">
                        <div>
                          <p 
                            className="text-lg font-normal"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            Industry
                          </p>
                          <p 
                            className='text-gray-800 font-normal'
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {product.industry}
                          </p>
                        </div> 
                        <div>
                          <p 
                            className="text-lg font-normal"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            Weight
                          </p>
                          <p 
                            className='text-gray-800 font-normal'
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {product.weight}
                          </p>
                        </div>
                        <div>
                          <p 
                            className="text-lg font-normal"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            Material
                          </p>
                          <p 
                            className='text-gray-800 font-normal'
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {product.material}
                          </p>
                        </div>
                        <div>
                          <p 
                            className="text-lg font-normal"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            Focus
                          </p>
                          <p 
                            className='text-gray-800 font-normal'
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {product.focus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Plus Icon - Only show when not selected */}
                {selectedProduct !== index && (
                  <motion.div
                    className="absolute top-3 right-3 w-6 h-6 md:w-8 md:h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={14} className="md:size-4 text-gray-700" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;