import { useState } from "react";
import { SlMenu} from "react-icons/sl"
import { IoClose } from "react-icons/io5"
import { motion } from "motion/react"
import {Link} from "react-scroll"
const Navbar = () => {

    const[menu, setMenu]=useState(false);

    const variants ={
        open: {clipPath : "circle(1200px at 43px 43px)",
            transition:{
                type:"spring",
            },
        },
            closed:{
                clipPath: "circle(25px at 43px 37px)",
                transition:{
                    type:"spring",
                    duration:1
                }
            }
        
    }

    const items =[

        {id:1 , text: "About", to: "about"},
        {id:2 , text: "Services", to: "services"},
        {id:3 , text: "Projects", to: "projects"},
        {id:4 , text: "Contact", to: 'contact'}
    ]

  return (
    <div>
    <motion.div 
    initial={{opacity:0,y:-100}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
    className="container mx-auto hidden md:flex justify-between items-center py-6">
        <div className="text-xl lg:5xl font-bold flex items-center gap-1 px-4">
        <span className="text-white">SANDEEP</span>
        <span className="text-purple-600">DAS</span>
        </div>
        <div>
            <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white">
                {items.map(({id,text,to})=>(
                    <li className="cursor-pointer hover:text-purple-500 duration-200"
                    key={id}>
                    <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    >
                        {text}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
        <a href="public/Sandeep_Resume.pdf" className="text-white font-bold bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-900">Download Cv</a>
        </motion.div>

        <div className="flex md:hidden justify-between">
            <motion.div
            animate={menu ? "open":"closed"}
            >
                <motion.div
                variants={variants}
                onClick={()=> setMenu((prev)=>!prev)}
                className="bg-white w-2/3 h-screen text-black fixed z-10">
                    <div className="px-7 py-6">
                    {menu ?(<IoClose size={30}/>) :
                    <SlMenu size={30}/>}
                    </div>
                    {menu && (
                        <div className="flex flex-col justify-center items-center">
                            <ul className="space-y-6 text-black text-lg">
                                {items.map(({id,text,to})=>(
                                    <li className="hover:text-purple-500 duration-200 cursor-pointer font-bold"
                                    key={id}>
                                    <Link
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}>
                                    {text}
                                    </Link>
                                    </li>
                                    ))}
                            </ul>
                        </div>
                    )}
                </motion.div>
            </motion.div>

            <motion.div 
            initial={{opacity:0,x:100,y:0}}
            animate={{opacity:1, x:0,y:0}}
            transition={{duration:0.5}}
                className="text-xl font-bold flex items-center gap-2 py-6 px-2">
                <span className="text-white">SANDEEP</span>
                <span className="text-purple-600">DAS</span>
            </motion.div>

        </div>
    </div>
  )
}

export default Navbar