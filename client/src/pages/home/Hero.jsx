import React from "react";
import { motion } from "framer-motion";
import useProgressiveImg from "../../hooks/image/useProgressiveImg";

function Hero() {
  const [src, { blur }] = useProgressiveImg(
    "/images/home-banner/home-compressed.webp",
    "/images/home-banner/home.webp"
  );

  return (
    <>
      <section className="relative overflow-hidden lg:flex h-[30vh] sm:h-[30vh] lg:h-screen lg:items-center">

        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-cover pointer-events-none"
            src="https://cdn.pixabay.com/video/2024/02/05/199341-910144573_large.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Animated Text Content */}
        <div className="z-10 absolute mx-auto max-w-screen-xl lg:px-24 px-4 sm:px-6 top-[50%] -translate-y-[50%]">
          
          <motion.div 
            className="max-w-2xl text-center sm:text-left group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >

            <motion.h1
              className="text-5xl font-bold md:text-7xl transition-all  group-hover:tracking-wide"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
             
            >
              Kisan <strong className="font-bold text-rose-700">Bazaar</strong>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg text-xl sm:text-2xl sm:leading-relaxed transition-all  group-hover:tracking-wide"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
             
            >
              Connecting Farmers and Consumers - Bringing Fresh Produce to Your Doorstep!
            </motion.p>

          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
