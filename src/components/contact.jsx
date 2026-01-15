import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import {
    FaEnvelope,
    FaLinkedin,
    FaTwitter,
    FaMapMarkerAlt,
    FaGithub
} from "react-icons/fa";
import { useState } from "react";


export default function Contact() {
const {ref,inView} = useInView ({
        triggerOnce :true,
        threshold:0.1,
    });
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "ef7efb36-25a4-47c1-abfe-d8b38463f1e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
            <motion.h2
            ref={ref}
        initial={{opacity:0 , y:-100}}
        animate={inView ? {opacity:1 ,y:0}:{}}
        transition={{delay:0.2, duration:0.5}}
             className='text-4xl font-bold text-white'>Contact <span className="text-purple-500">Me</span></motion.h2>
            <motion.p
            ref={ref}
        initial={{opacity:0 , y:-100}}
        animate={inView ? {opacity:1 ,y:0}:{}}
        transition={{delay:0.2, duration:0.5}}
             className="text-slate-400 mt-4">Contact me for any kind of work or services </motion.p>
        
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">

            <motion.div 
            ref={ref}
        initial={{opacity:0 , x:-50}}
        animate={inView ? {opacity:1 ,x:0}:{}}
        transition={{delay:0.2, duration:0.5}}
            className="flex items-center space-x-4">
                <div className="bg-purple-500 p-4 rounded-full">
                    <FaEnvelope className="text-white w-6 h-6"/>
                </div>
                <div>
                    <p className="text-lg font-medium text-purple-500">Email</p>
                    <p className="text-white">dass34171@gmail.com</p>
                </div>
            </motion.div>

            <motion.div 
            ref={ref}
        initial={{opacity:0 , x:-50}}
        animate={inView ? {opacity:1 ,x:0}:{}}
        transition={{delay:0.3, duration:0.5}}
            className="flex items-center space-x-4">
                <div className="bg-purple-500 p-4 rounded-full">
                    <FaMapMarkerAlt className="text-white w-6 h-6"/>
                </div>
                <div>
                    <p className="text-lg font-medium text-purple-500">Address</p>
                    <p className="text-white">Sibsagar, Assam</p>
                </div>
            </motion.div>
            </div>

            <motion.form onSubmit={onSubmit}
            ref={ref}
        initial={{opacity:0 , x:100}}
        animate={inView ? {opacity:1 ,x:0}:{}}
        transition={{delay:0.2, duration:0.5}}
        className="space-y-4 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type='text' name="name" placeholder="Full Name" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"/>
                    <input type='Email' name="email" placeholder="Your Email" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type='text' name="phone" placeholder="Phone Number" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"/>
                    <input type='text' name="description" placeholder="Description" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"/>
                </div>
                <textarea name="message" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" placeholder="Message"></textarea>
                <motion.button 
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200 flex items-center" type="submit">Submit Message</motion.button>
            </motion.form>
            <span className="text-white">{result}</span>
        </div>
        {/*Footer*/}
        <motion.div 
        ref={ref}
        initial={{opacity:0 , y:-100}}
        animate={inView ? {opacity:1 ,y:0}:{}}
        transition={{delay:0.6, duration:0.5}}
        className="mt-48 flex justify-between items-center p-5 text-white border-t-2 border-purple-500">
            <p>2025, All Rights Reserved</p>
            <p>Sandeep</p>
            <div className="flex justify-center space-x-4 text-white mt-4">
                <a href="https://www.linkedin.com/in/sandeep-das-855291303/" target="blank" className="hover:text-purple-500"><FaLinkedin className="w-4 h-4"/>{""}</a>
                <a href="https://github.com/Sandeep2907733" target="_blank_" className="hover:text-purple-500"><FaGithub className="w-4 h-4"/>{""}</a>
                <a href="https://x.com/SandeepDas34477?t=iq2ioUM-xjoskqzjDEqY8Q&s=09" target="blank_" className="hover:text-purple-500"><FaTwitter className="w-4 h-4"/>{""}</a>
            </div>
        </motion.div>
    </div>
  )
}
