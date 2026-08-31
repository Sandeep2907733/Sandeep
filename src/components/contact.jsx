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

const contactInfo = [
    {
        icon: FaEnvelope,
        label: "Email",
        value: "dass34171@gmail.com",
        href: "mailto:dass34171@gmail.com",
    },
    {
        icon: FaMapMarkerAlt,
        label: "Location",
        value: "Sibsagar, Assam, India",
        href: null,
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "Let's connect →",
        href: "https://www.linkedin.com/in/sandeep-das-855291303/",
    },
    {
        icon: FaGithub,
        label: "GitHub",
        value: "See my code →",
        href: "https://github.com/Sandeep2907733",
    },
]

export default function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResult("");
        const formData = new FormData(event.target);
        formData.append("access_key", "cf052fdf-df15-4cc5-bd7c-815b9ced1a35");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            setLoading(false);

            if (data.success) {
                setResult("success");
                event.target.reset();
            } else {
                console.error("Web3Forms error:", data);
                setResult("error");
            }
        } catch (err) {
            console.error("Network/fetch error:", err);
            setLoading(false);
            setResult("error");
        }
    };

    return (
        <motion.div ref={ref} id="contact" className="text-white py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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
                        Get In{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            Touch
                        </span>
                    </h2>
                    <div className="flex items-center justify-center gap-3 mt-2 mb-4">
                        <span className="h-px w-12 bg-purple-500/50" />
                        <span className="text-gray-500 text-sm font-mono">contact</span>
                        <span className="h-px w-12 bg-purple-500/50" />
                    </div>
                    <p className="text-gray-400 max-w-md mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Have a project in mind or want to hire me? I'd love to hear from you — let's build something together.
                    </p>
                </motion.div>

                {/* ── Two column layout ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left: Contact info cards */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <p
                            className="text-gray-400 text-base leading-relaxed mb-6"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            I'm currently open to full-time web developer roles and freelance projects.
                            Feel free to reach out through the form or any of the channels below.
                        </p>

                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-4 hover:border-purple-500/40 transition-colors duration-200"
                            >
                                <div className="w-11 h-11 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="text-purple-400 text-lg" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-mono mb-0.5">{item.label}</p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-white text-sm hover:text-purple-400 transition-colors duration-200"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-white text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                            {item.value}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Contact form */}
                    <motion.form
                        onSubmit={onSubmit}
                        ref={ref}
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                className="bg-gray-900 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-500 p-3 rounded-xl w-full transition-colors duration-200 text-sm"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="bg-gray-900 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-500 p-3 rounded-xl w-full transition-colors duration-200 text-sm"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                className="bg-gray-900 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-500 p-3 rounded-xl w-full transition-colors duration-200 text-sm"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="bg-gray-900 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-500 p-3 rounded-xl w-full transition-colors duration-200 text-sm"
                            />
                        </div>
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Tell me about your project or opportunity..."
                            required
                            className="bg-gray-900 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-500 p-3 rounded-xl w-full transition-colors duration-200 text-sm resize-none"
                        />

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            disabled={loading}
                            className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg shadow-purple-500/20"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </motion.button>

                        {/* Result feedback */}
                        {result === "success" && (
                            <p className="text-green-400 text-sm text-center">
                                ✓ Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        {result === "error" && (
                            <p className="text-red-400 text-sm text-center">
                                ✕ Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </motion.form>
                </div>

                {/* ── Footer ── */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-20 flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-purple-500/30"
                >
                    <p className="text-gray-500 text-sm font-mono">© 2025 Sandeep Das. All rights reserved.</p>

                    <div className="flex items-center gap-4">
                        <a href="https://www.linkedin.com/in/sandeep-das-855291303/" target="_blank" rel="noreferrer"
                            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:text-purple-400 transition-all duration-200">
                            <FaLinkedin className="text-base" />
                        </a>
                        <a href="https://github.com/Sandeep2907733" target="_blank" rel="noreferrer"
                            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:text-purple-400 transition-all duration-200">
                            <FaGithub className="text-base" />
                        </a>
                        <a href="https://x.com/SandeepDas34477?t=iq2ioUM-xjoskqzjDEqY8Q&s=09" target="_blank" rel="noreferrer"
                            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:text-purple-400 transition-all duration-200">
                            <FaTwitter className="text-base" />
                        </a>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    )
}