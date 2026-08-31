import { motion } from "motion/react"
import mypic from "../assets/slazzer-preview-fci4p (1)~2 (1) (1)-Photoroom.png"
import { useInView } from "react-intersection-observer"

export default function About() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const stats = [
        { value: "5+", label: "Projects Built" },
        { value: "2+", label: "Years of Learning" },
        { value: "3+", label: "Freelance Clients" },
    ]

    const highlights = [
        { icon: "Web Dev. Skills", text: "Full-stack apps with PHP, MySQL & React" },
        { icon: "Data Anal. Skills", text: "Data dashboards with Power BI & Excel" },
        { icon: "College", text: "BCA @ Dibrugarh University, 2026" },
        { icon: "Location", text: "Based in Dibrugarh, Assam" },
    ]

    return (
        <motion.div ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.5 }} id="about" className="text-white py-20">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* ── Section heading ── */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl font-extrabold mb-3"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Me</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3 mt-2">
                        <span className="h-px w-12 bg-purple-500/50" />
                        <span className="text-gray-500 text-sm font-mono">who I am</span>
                        <span className="h-px w-12 bg-purple-500/50" />
                    </div>
                </motion.div>

                {/* ── Main content: image + text ── */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-16">

                    {/* Photo */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex-shrink-0 flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/20 blur-2xl scale-110" />
                            <img
                                src={mypic}
                                alt="Sandeep Das"
                                className="relative z-10 w-44 sm:w-52 md:w-60 rounded-2xl object-cover drop-shadow-xl"
                            />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Hey there! I'm{" "}
                            <span className="text-white font-semibold">Sandeep Das</span>, a
                            Web Developer and BCA graduate from Dibrugarh University (Batch 2023–2026).
                            I build full-stack web applications — from grocery delivery platforms to
                            client business websites — with a focus on clean UI, smooth UX, and
                            real-world functionality.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed mb-8">
                            Beyond web dev, I have hands-on experience with data analysis using
                            SQL, Excel, and Power BI — a skill that helps me build smarter,
                            data-informed products. I'm actively looking for web developer
                            roles where I can grow, contribute, and ship things that matter.
                        </p>

                        {/* Quick highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {highlights.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                                >
                                    <span className="material-icons-round text-purple-400 font-bold">
                                        {item.icon}
                                    </span>
                                    <span className="text-gray-300 text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ── Stats row ── */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="grid grid-cols-3 divide-x divide-white/10 bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center py-8 px-4">
                            <h3
                                className="text-3xl md:text-4xl font-extrabold text-purple-400 mb-1"
                                style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </motion.div>
    )
}
