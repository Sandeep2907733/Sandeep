import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { FaCode, FaServer, FaLayerGroup, FaChartBar, FaChartPie, FaLaptopCode } from "react-icons/fa"

const servicesData = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description: "Building responsive, pixel-perfect web interfaces using React, Tailwind CSS, and modern UI patterns.",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: "Creating server-side logic, REST APIs, and database-driven apps using PHP and MySQL.",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
  },
  {
    icon: FaLayerGroup,
    title: "Full-Stack Web Apps",
    description: "End-to-end web application development — from UI design to database architecture and deployment.",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/20",
  },
  {
    icon: FaChartBar,
    title: "Data Analysis",
    description: "Analyzing datasets with SQL, Excel and Python to extract trends and support better decisions.",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/20",
  },
  {
    icon: FaChartPie,
    title: "Dashboard & Reports",
    description: "Designing interactive Power BI and Excel dashboards that turn raw data into clear visual stories.",
    color: "from-fuchsia-500/20 to-fuchsia-500/5",
    border: "border-fuchsia-500/30",
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/20",
  },
  {
    icon: FaLaptopCode,
    title: "Client Websites",
    description: "Crafting professional websites for local businesses with clean design, mobile responsiveness, and SEO-ready structure.",
    color: "from-sky-500/20 to-sky-500/5",
    border: "border-sky-500/30",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/20",
  },
]

function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div id="services" className="text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* ── Section heading ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Offer
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2 mb-4">
            <span className="h-px w-12 bg-purple-500/50" />
            <span className="text-gray-500 text-sm font-mono">services</span>
            <span className="h-px w-12 bg-purple-500/50" />
          </div>
          <p className="text-gray-400 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            From building full-stack web apps to creating data dashboards — here's how I can add value to your team or project.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${service.color} border ${service.border} rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300`}
            >
              {/* Icon badge */}
              <div className={`w-12 h-12 rounded-xl ${service.iconBg} border ${service.border} flex items-center justify-center`}>
                <service.icon className={`${service.iconColor} text-2xl`} />
              </div>

              <div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default Services