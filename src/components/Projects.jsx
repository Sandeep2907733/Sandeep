import Zepto from "../assets/Zepto.png"
import HR from "../assets/HR.png"
import Powerbi from "../assets/Power bi .png"
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Tech from  "./Tech";
function Work() {

    const {ref,inView} = useInView ({
        triggerOnce :true,
        threshold:0.1,
    });

    const projects=[
        {
            id:1,
            title:"Apsara Ecommerce Sales Analysis",
            Description:"This project showcases a Power BI Sales Dashboard built to analyze the performance of Apsara E-commerce across various business dimensions such as sales, profit, customers, product categories, and payment modes.",
            image :Powerbi,
            link:"https://github.com/Sandeep2907733/Apsara-E-commerce-Sales-Dashboard.git"
        },
        {
            id:2,
            title:"HR attrition analysis(Excel)",
            Description:"This project focuses on analyzing employee attrition data to uncover insights that can help organizations improve retention strategies.The dataset consists of 1,471 employees and the dashboard was designed in Microsoft Excel using Pivot Tables, Pivot Charts, and Slicers.",
            image :HR,
            link:"https://github.com/Sandeep2907733/HR-Employee-Attrition-Analysis-Dasboard.git"
        },
        {
            id:3,
            title:"Zepto ",
            Description:"This project focuses on data exploration and data cleaning using SQL on a Zepto inventory dataset. The cleaned data will be used in a future phase to build a Power BI dashboard.",
            image :Zepto,
            link:"https://github.com/Sandeep2907733/Zepto-Inventory-Data-Analysis-SQL-"
        },
    ];

  return (
    <div id="projects" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
        ref={ref}
        initial={{opacity:0}}
        animate={inView ? {opacity:1}:{}}
        transition={{duration:0.5}}
        >
            <h2 className="text-4xl text-white underline font-bold text-center mb-12">Projects</h2>
            <p className="mb-12 text-gray-400 text-center">Real-world data analysis projects showcasing insights, dashboards, and problem solving skills </p>
        </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{delay:0.3 , duration:0.5}}
            >
              {projects.map((project)=>
              <div 
              key={project.id}
              className="bg-gray-900 shadow-lg  rounded-lg overflow-hidden m-4 hover:shadow-purple-500 transition-shadow duration-300"
              >
              <img src={project.image} className="w-full h-46 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.Description}</p>
                <button onClick={()=>window.open(project.link)} className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition ">Details</button>
                </div>
              </div>)}
            </motion.div>
        </div>
        <motion.div
        ref={ref}
        inital={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.5, duration:0.3}}
        >
            <Tech/>
        </motion.div>
    </div>
  )
}

export default Work