import { motion } from "motion/react"
import mypic from "../assets/slazzer-preview-fci4p (1)~2 (1) (1)-Photoroom.png"
import { useInView } from "react-intersection-observer"

export default function About() {

    const{ref,inView} = useInView ({
        triggerOnce :true,
        threshold:0.1,
    })

  return (
    <div id="about" className="text-white py-16">
    <div className="container mx-auto px-4 text-container">
        <motion.h2 
        ref={ref}
        initial={{opacity:0, y:100}}
        animate={inView ? {opacity:1, y:0}:{}}
        transition={{delay:0.1 , duration:0.5}}
        className="text-3xl md:text-4xl font-bold mb-8 underline text-center">About Me
        </motion.h2>
        <motion.p 
        ref={ref}
        initial={{opacity:0 , y:100}}
        animate={inView ? {opacity:1 ,y:0}:{}}
        transition={{delay:0.2, duration:0.5}}
        className="mb-12 text-gray-400 text-center py-16 px-8 gap-10"> My journey into data analytics began with a love for exploring numbers and understanding trends. Over time,I have developed hands-on skills in data cleaning , vizualization and analysis. I am Currently working on projects like Sales Dashboards and Customer Behavior Analysis to sharpen my analytical and visualization abilities. My goal is to become a skilled data analyst who helps businesses make smart , data-driven decisions. </motion.p>
    <div className="flex flex-col md:flex-row justify-center items-center">
        <motion.div 
        ref={ref}
        initial={{opacity:0, x:-100}}
        animate={inView ? {opacity:1, x:0}:{}}
        transition={{delay:0.3 , duration:0.5}}
        className="mb-8 md:mb-0 md:mr-8 flex justify-center">
            <img src={mypic} 
             className="w-24 sm:w-32 md:w-50"/>
        </motion.div>
        <motion.p 
        ref={ref}
        initial={{opacity:0 , x:100}}
        animate={inView ? {opacity:1 ,x:0}:{}}
        transition={{delay:0.4, duration:0.5}}
        className=" md:1/2 text-gray-400 md:px-0 text-base sm:text-lg md:text-xl py-16 px-8 gap-10 items-center">
            Hey there ! I am <span className="text-white font-semibold">Sandeep Das </span>, a passionate data analyst in the making and a BCA student at Dibrugarh University (Batch 2023-2026). I enjoy working with data, discovering raw numbers into meaningful insights using tools like Excel, SQL, Python and Power BI.
        </motion.p>
    </div>

    <motion.div 
        ref={ref}
        initial={{opacity:0 }}
        animate={inView ? {opacity:1}:{}}
        transition={{delay:0.5, duration:0.5}}
    className="flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0">
        <div className="text-center">
            <h3 className="text-3xl md:text-size:3xl font-bold md:my-6 text-purple-500">7+</h3>
            <p className="text-sm sm:texttext-base text-gray-300">Data Sets Analyzed</p>
        </div>
        <div>
            <h3 
            className="text-3xl md:text-size:3xl font-bold md:my-6 text-purple-500">5+</h3>
            <p className="text-sm sm:texttext-base text-gray-300">Projects Completed</p>
        </div>
        <div>
            <h3 className="text-3xl md:text-size:3xl font-bold md:my-6 text-purple-500">2+</h3>
            <p className="text-sm sm:texttext-base text-gray-300">Years of Learning Experience</p>
        </div>
    </motion.div>
    </div>
    </div>
  )
}