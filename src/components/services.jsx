import { FaAppStore } from "react-icons/fa";
import {motion} from "motion/react"
import {useInView} from "react-intersection-observer"
function services() {

  const servicesData=[
    {
      title: "Excel",
      description:"Analyzing and organizing data to uncover meaningful insights "
    },
    {
      title: "Power Bi",
      description:"Creating interactive dashboards for data-driven decisions "
    },
    {
      title: "SQL",
      description:"Querying databases to extract and analyze structured data"
    },
    {
      title: "Python",
      description:"Using and learning python for data cleaning, analysis and automation"
    },
    {
      title: "Frontend Development",
      description:"Building responsive and user-friendly web interfaces"
    }
  ];
  const {ref,inView} = useInView ({
        triggerOnce :true,
        threshold:0.1,
    });

  return (
    <div id="services" className="text-white py-16" >
        <motion.div
        ref={ref}
        initial={{opacity:0, y:100}}
        animate={inView ? {opacity:1, y:0}:{}}
        transition={{duration:0.5}}
         className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold underline mb-8">Services</h2>
            <p className="mb-12 text-gray-400">Transforming raw data into meaning insights using Excel, SQL, Power BI and Python</p>

            <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={ref}
        initial={{opacity:0, scale:0.8}}
        animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
        transition={{delay:0.2 , duration:0.5}}
            >
            {servicesData.map((service,index)=>
            <div key={index}
            className="bg-[#030227] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300"
            >
              <FaAppStore className="text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto"/>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{service.title}</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400">{service.description}</p>
            </div>
            )}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default services