import Zepto from "../assets/Zepto.png"
import HR from "../assets/HR.png"
import Zomazon from "../assets/Zomazon.jpeg"
import Sahityakar from "../assets/Sahityakar.jpeg"
import Here2There from "../assets/Here2There.jpeg"
import Powerbi from "../assets/Power bi .png"
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Tech from "./Tech";

function Work() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const dataProjects = [
        {
            id: 1,
            title: "Apsara Ecommerce Sales Analysis",
            description: "This project showcases a Power BI Sales Dashboard built to analyze the performance of Apsara E-commerce across various business dimensions such as sales, profit, customers, product categories, and payment modes.",
            image: Powerbi,
            github: "https://github.com/Sandeep2907733/Apsara-E-commerce-Sales-Dashboard.git",
        },
        {
            id: 2,
            title: "HR Attrition Analysis (Excel)",
            description: "This project focuses on analyzing employee attrition data to uncover insights that can help organizations improve retention strategies. The dataset consists of 1,471 employees and the dashboard was designed in Microsoft Excel using Pivot Tables, Pivot Charts, and Slicers.",
            image: HR,
            github: "https://github.com/Sandeep2907733/HR-Employee-Attrition-Analysis-Dasboard.git",
        },
        {
            id: 3,
            title: "Zepto Inventory Analysis (SQL)",
            description: "This project focuses on data exploration and data cleaning using SQL on a Zepto inventory dataset. The cleaned data will be used in a future phase to build a Power BI dashboard.",
            image: Zepto,
            github: "https://github.com/Sandeep2907733/Zepto-Inventory-Data-Analysis-SQL-",
        },
    ];

    const webProjects = [
        {
    id: 1,
    title: "Zomazon",
    description: "A multi-role (buyer, seller, admin) local delivery platform with Razorpay payments and an AI recipe suggestor powered by the Groq API — built with PHP & MySQL.",
    image: Zomazon,
    github: "https://github.com/Sandeep2907733/Zomazon-A-Multi-Role-Local-Delivery-Platform.git",
    live: null,
},
       {
    id: 2,
    title: "Sahityakar",
    description: "A social media platform for poets, writers, and artists (PHP & MySQL) where users can post, follow, like, comment, save, and share poetry, literature, and drawings — with a separate admin dashboard.",
    image: Sahityakar,
    github: "https://github.com/Sandeep2907733/Sahityakar.git",
    live: null,
},
       {
    id: 3,
    title: "Here2There Rentals",
     description: "A vehicle rental platform (HTML, CSS, JS, PHP & MySQL) where users sign up, book scooties, bikes, and cars by selecting time and location, upload driving license and required documents, pay securely online, and download a booking receipt. Includes an admin panel to add vehicles and manage pricing and details.",
    image: Here2There,
    github: "https://github.com/Sandeep2907733/Here2There-.git",
    live: null,
},
    ];

    const cardClass = "bg-gray-900 shadow-lg rounded-lg overflow-hidden m-4 hover:shadow-purple-500 transition-shadow duration-300";

    return (
        <motion.div ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.5 }} id="projects" className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Web Development Section ── */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl text-white underline font-bold text-center mb-4">Projects</h2>

                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-px w-16 bg-blue-500"></span>
                        <span className="text-blue-400 font-semibold tracking-widest text-sm uppercase">Web Development</span>
                        <span className="h-px w-16 bg-blue-500"></span>
                    </div>

                    <p className="mb-12 text-gray-400 text-center">
                        Full-stack and frontend web applications built for real clients and personal projects
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {webProjects.map((project) => (
                        <div key={project.id} className={cardClass}>
                            {project.image ? (
                                <img src={project.image} className="w-full h-46 object-cover" alt={project.title} />
                            ) : (
                                <div className="w-full h-46 bg-gray-800 flex items-center justify-center">
                                    <span className="text-gray-500 text-sm">Screenshot coming soon</span>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-4">{project.description}</p>
                                <div className="flex gap-3 flex-wrap">
                                    {project.github ? (
                                        <button
                                            onClick={() => window.open(project.github)}
                                            className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                                        >
                                            GitHub
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            className="border-2 border-gray-600 text-gray-600 px-4 py-2 rounded-full cursor-not-allowed"
                                        >
                                            GitHub
                                        </button>
                                    )}
                                    {project.live ? (
                                        <button
                                            onClick={() => window.open(project.live)}
                                            className="border-2 border-green-500 text-green-500 px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition"
                                        >
                                            Live Demo
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            className="border-2 border-gray-600 text-gray-600 px-4 py-2 rounded-full cursor-not-allowed"
                                        >
                                            Coming Soon
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* ── Data Analytics Section ── */}
                <motion.div
                    ref={ref2}
                    initial={{ opacity: 0 }}
                    animate={inView2 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-px w-16 bg-purple-500"></span>
                        <span className="text-purple-400 font-semibold tracking-widest text-sm uppercase">Data Analytics</span>
                        <span className="h-px w-16 bg-purple-500"></span>
                    </div>

                    <p className="mb-12 text-gray-400 text-center">
                        Real-world data analysis projects showcasing insights, dashboards, and problem solving skills
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    ref={ref2}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {dataProjects.map((project) => (
                        <div key={project.id} className={cardClass}>
                            <img src={project.image} className="w-full h-46 object-cover" alt={project.title} />
                            <div className="p-6">
                                <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-4">{project.description}</p>
                                <button
                                    onClick={() => window.open(project.github)}
                                    className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                                >
                                    GitHub
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>

            {/* ── Tech Stack ── */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
            >
                <Tech />
            </motion.div>
        </motion.div>
    );
}

export default Work;