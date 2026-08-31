import { useState } from "react";
import { SlMenu } from "react-icons/sl"
import { IoClose } from "react-icons/io5"
import { motion } from "motion/react"
import { Link } from "react-scroll"

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 43px 43px)",
            transition: { type: "spring" },
        },
        closed: {
            clipPath: "circle(25px at 43px 37px)",
            transition: { type: "spring", duration: 1 }
        }
    }

    const items = [
        { id: 1, text: "About",    to: "about" },
        { id: 2, text: "Services", to: "services" },
        { id: 3, text: "Projects", to: "projects" },
        { id: 4, text: "Contact",  to: "contact" }
    ]

    const cvLink = "https://docs.google.com/document/d/1Kd3LUbXHY5RQzXwnSnTL_hkO4U0yzicO/edit"

    return (
        <div>
            {/* ── Desktop Navbar ── */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto hidden md:flex justify-between items-center py-6 px-4"
            >
                {/* Logo */}
                <div
                    className="text-xl font-extrabold flex items-center gap-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    <span className="text-white">SANDEEP</span>
                    <span className="text-purple-500">DAS</span>
                </div>

                {/* Nav links */}
                <ul
                    className="hidden md:flex items-center space-x-8 list-none text-sm font-medium text-gray-300"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    {items.map(({ id, text, to }) => (
                        <li
                            key={id}
                            className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
                        >
                            <Link to={to} smooth={true} duration={500} offset={-70}>
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CV button — opens in new tab, no download attr */}
                <a
                    href={cvLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-sm font-semibold border border-purple-500 px-5 py-2 rounded-full hover:bg-purple-500 transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    View CV
                </a>
            </motion.div>

            {/* ── Mobile Navbar ── */}
            <div className="flex md:hidden justify-between">
                <motion.div animate={menu ? "open" : "closed"}>
                    <motion.div
                        variants={variants}
                        onClick={() => setMenu((prev) => !prev)}
                        className="bg-[#0f1117] border-r border-white/10 w-2/3 h-screen text-white fixed z-10"
                    >
                        <div className="px-7 py-6">
                            {menu ? <IoClose size={30} /> : <SlMenu size={30} />}
                        </div>

                        {menu && (
                            <div className="flex flex-col justify-center items-center gap-8 mt-8">
                                <ul
                                    className="space-y-6 text-white text-lg text-center"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    {items.map(({ id, text, to }) => (
                                        <li
                                            key={id}
                                            className="hover:text-purple-400 transition-colors duration-200 cursor-pointer font-medium"
                                            onClick={() => setMenu(false)}
                                        >
                                            <Link to={to} smooth={true} duration={500} offset={-70}>
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={cvLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white text-sm font-semibold border border-purple-500 px-5 py-2 rounded-full hover:bg-purple-500 transition-colors duration-200"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    View CV
                                </a>
                            </div>
                        )}
                    </motion.div>
                </motion.div>

                {/* Mobile logo */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-extrabold flex items-center gap-2 py-6 px-4"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    <span className="text-white">SANDEEP</span>
                    <span className="text-purple-500">DAS</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar