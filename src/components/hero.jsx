import { motion } from "motion/react"
import Avatar from "/src/assets/1760631326279_2-removebg-preview.png"
import {Link} from "react-scroll"
function Hero() {
  return (
    <div
    className="text-white py-10">
        <motion.img
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{
          delay:0.5,
          duration:0.5
        }}
        className="mx-auto w-24 sm:w-24 md:w-50 lg:w-48 xl:w-56 h-auto"
        src={Avatar} alt="Avatar"

        />
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          duration:0.5
        }}
        className="container mx-auto text-center">
            <motion.h1 
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{
              delay:1, duration:0.5
            }}
            className="text-3xl md:text-5xl flex flex-col gap-1 font-bold mb-2">
            Hi,I am Sandeep Das
            <motion.span className="text-purple-500"
             initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{
              delay:1.2, duration:0.5
            }}
            >Aspiring Data Analyst</motion.span>
            </motion.h1>
            <motion.p
             initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{
              delay:1.5, duration:0.5
            }}
             className="text-grey-400 text-lg mb-8 px-4">Turning data into insights and insights into impact</motion.p>
            <div className="flex justify-center space-x-4 mb-10">
            <motion.button 
              initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}}
            transition={{
              delay:1.6, duration:0.5
            }}
            className="bg-purple-500 text-white px-6 py-3 rounded-full active:bg-white active:text-black"><Link to="contact" smooth={true} duration={500} offset={-70}>Hire me</Link></motion.button>
            <motion.button 
             initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{
              delay:1.6, duration:0.5
            }}
            className="border border-white text-white px-6 py-3 rounded-full active:bg-white active:text-black"><Link to="about" smooth={true} duration={500} offset={-70}>My story</Link></motion.button>
            </div>
        </motion.div>
    </div>
  )
}

export default Hero