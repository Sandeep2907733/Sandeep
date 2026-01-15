import { motion } from 'motion/react'

function Tech() {
    const Techs =[
        "Ms Excel",
        "PowerBi",
        "Vs code",
        "Python",
        "SQL",
        "Numpy",
        "Pandas",
        "React",
        "Javascript",
    ];
    const TechsList =[...Techs,...Techs];

    const scrollvariant1={
        animate:{
            x:[0,-2000],
            transition:{
                x:{
                    repeat:Infinity,
                    repeatType:"loop",
                    duration: 15,
                    ease:"linear",
                }
            }
        }
    }
    const scrollvariant2={
        animate:{
            x:[-2000,0],
            transition:{
                x:{
                    repeat:Infinity,
                    repeatType:"loop",
                    duration: 15,
                    ease:"linear",
                }
            }
        }
    }
  return (
    <div className='text-whie py-16'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8 text-white'>Techs I use</h2>
            <div className='overflow-hidden relative w-full'>
                <motion.div 
                variants={scrollvariant1}
                animate="animate"
                className='whitespace-nowrap flex space-x-10'>
                    {TechsList.map((Techs,index)=>(
                        <div
                        key={index}
                        className='text-lg bg-gray-800 px-6 py-1 rounded-full text-white'>
                        {Techs}
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className='overflow-hidden relative w-full mt-5'>
                <motion.div 
                variants={scrollvariant2}
                animate="animate"
                className='whitespace-nowrap flex space-x-10'>
                {TechsList.map((Techs,index)=>(
                        <div
                        key={index}
                        className='text-lg bg-gray-800 px-6 py-1 rounded-full text-white'>
                        {Techs}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Tech