import { motion } from "motion/react"
import Avatar from "/src/assets/1760631326279_2-removebg-preview.png"
import { Link } from "react-scroll"

// Floating code tag decoration
const CodeTag = ({ text, className }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 2, duration: 0.4 }}
    className={`absolute font-mono text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-purple-300 select-none ${className}`}
  >
    {text}
  </motion.span>
)

function Hero() {
  return (
    <div className="relative text-white py-10 overflow-hidden min-h-[90vh] flex items-center">

      {/* ── Background glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          {/* ── Left: Text content ── */}
          <div className="flex-1 text-center md:text-left">

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold mb-3 leading-tight tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Sandeep Das
              </span>
            </motion.h1>

            {/* Role line — web dev only, clear and unambiguous */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-3 justify-center md:justify-start mb-4"
            >
              <span className="h-px w-8 bg-purple-500" />
              <p
                className="text-lg md:text-xl text-gray-300 font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Web Developer
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I build responsive, full-stack web applications — with a bonus skill in
              data analysis that helps me make smarter product decisions.
              Open to full-time and freelance opportunities.
            </motion.p>

            {/* Tech pill tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-8"
            >
              {["React", "Tailwind CSS", "PHP", "MySQL", "SQL", "Power BI"].map((tech, i) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.button
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-purple-600 hover:bg-purple-500 text-white px-7 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg shadow-purple-500/20"
              >
                <Link to="contact" smooth={true} duration={500} offset={-70}>
                  Hire Me
                </Link>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/20 hover:border-purple-400 hover:text-purple-300 text-white px-7 py-3 rounded-full font-semibold transition-all duration-200 backdrop-blur-sm"
              >
                <Link to="projects" smooth={true} duration={500} offset={-70}>
                  View Projects
                </Link>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/20 hover:border-blue-400 hover:text-blue-300 text-white px-7 py-3 rounded-full font-semibold transition-all duration-200 backdrop-blur-sm"
              >
                <Link to="about" smooth={true} duration={500} offset={-70}>
                  My Story
                </Link>
              </motion.button>
            </div>
          </div>

          {/* ── Right: Avatar with decorations ── */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-fit">

              {/* Floating code tags around avatar */}
              <CodeTag text="<Developer />" className="-top-4 -left-8 hidden sm:block" />
              <CodeTag text="{ data: insights }" className="-bottom-2 -right-6 hidden sm:block" />
              <CodeTag text="const skills = []" className="top-1/2 -left-16 hidden md:block" />

              {/* Glowing ring behind avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/20 blur-2xl scale-110" />

              <motion.img
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.03 }}
                className="relative z-10 w-48 sm:w-56 md:w-64 lg:w-72 h-auto drop-shadow-2xl"
                src={Avatar}
                alt="Sandeep Das"
              />
            </div>
          </div>

        </div>

        {/* ── Bottom scroll hint ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="flex justify-center mt-14"
        >
          <div className="flex flex-col items-center gap-1 text-gray-600 text-xs font-mono">
            <span>scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="w-px h-6 bg-gradient-to-b from-gray-600 to-transparent"
            />
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero