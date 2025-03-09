'use client'

import { MdWavingHand } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiCopyrightFill } from "react-icons/pi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSanity } from "react-icons/si";
import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import { FiMenu } from 'react-icons/fi';
import { motion } from "framer-motion";



export default function Home(){


  const navVariants = {
    hidden: { opacity: 0, x: "100%", filter: "blur(20px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)", 
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 } 
    },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.5, ease: "easeIn" } },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut", 
        delay: 0.2 
      } 
    },
  }



  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Sanity", icon: <SiSanity className="text-red-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-red-500" /> },
  ];


  const [isOpen, setIsOpen] = useState(false);


  return(
    <div>
        <div className="2xl:w-[1600px] sm:w-[100%] sm:h-[100vh] lg:h-[85vh] 2xl:h-[100vh] relative mx-auto">

          <div></div>

          {/* background image */}
             <div className="overflow-hidden  absolute inset-0 bg-[url('/background1.avif')] bg-center bg-cover mx-auto"></div>

     {/* navbar */}

          <div className="relative 2xl:w-[1600px] h-20 bg-primary z-50 text-white flex justify-between items-center px-6 shadow-black shadow-xl sticky top-0">
     
            <div className="w-auto h-full flex items-center uppercase font-extrabold text-2xl">
                Hassan
             </div>

      
      <div className="hidden md:flex w-[30%] h-full text-white justify-evenly items-center font-sans text-lg">
        <a href="#About">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>

  
           <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <FiMenu size={30} />
           </div>

      {/* Mobile  */}
      {isOpen && (
        <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute top-20 right-0 w-full bg-primary text-white flex flex-col items-center py-6 shadow-2xl rounded-lg md:hidden"
      >
        {[
          { name: "About", path: "#about" },
          { name: "Skills", path: "#skills" },
          { name: "Work", path: "#work" },
          { name: "Contact", path: "#contact" }
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.path}
            variants={itemVariants}
            className="py-3 text-lg font-semibold tracking-widest text-shadow-lg uppercase transform transition-all duration-300 hover:scale-110 hover:text-blue-800"
          >
            {item.name}
          </motion.a>
        ))}
      </motion.div>

      )}
    </div> 

           {/* hero section */}

           <div className="2xl:w-[1600px] h-auto relative z-10 flex px-[90px] sm:px-[100px] lg:px-[100px] xl:px-[200px] grid lg:grid-cols-2 grid-cols-1 gap-9 items-center">
                <div className=" sm:w-[600px] sm:h-[55%] h-96 flex flex-col gap-6 mt-24 lg:mt-0 sm:mt-40">

                       <div className="flex text-3xl font-sans font-bold gap-3 text-white tracking-wider">
                          <MdWavingHand />
                         <div> Hello, Im </div>
                       </div>
                       <div className="text-5xl sm:text-6xl lg:text-6xl italic bg-gradient-to-r from-blue-600 via-gray-600 to-pink-600 bg-clip-text text-transparent font-extrabold tracking-tight">
  Hassan Nadeem
</div>
                        <div className="text-4xl text-white font-sans">Web Developer</div>
     
                       {/* <div><button className="w-[45%] h-20 text-white text-2xl font-sans flex justify-center items-center gap-2 bg-gray-500  ">Github Account<SiGithub /></button></div> */}
     
                       {/* button */}
                          <Link href="https://github.com/hassannadeemansari" className="relative inline-block">
                              <button className="relative w-[210px] sm:w-[45%] h-20 text-white text-2xl font-sans flex justify-center items-center gap-2 bg-blue-800 bg-opacity-70 overflow-hidden rounded-lg">
                                <span className="relative z-10">Github Account</span> {/* Ensure text is on top */}
                                 <SiGithub className="relative z-10" /> {/* Ensure icon is on top */}
                                <span className="absolute inset-0 border-2 border-white rounded-lg animate-border"></span>
                              </button>
                          </Link>

                </div>

                  <div className=" sm:mt-[92px] flex justify-center lg:w-[410px] xl:w-[410px] 2xl:w-[480px] h-[70%] 2xl:h-[85%] w-0 lg:px-[80px]">
                    <Image
                    src="/avatar.png"
                    alt="avatar"
                    width={287}
                    height={287}
                    className="bg-cover bg-center"
                    />
                  </div>
           </div>
       </div>




           {/* about me  */}

           <div id="About" className="2xl:w-[1600px] min-h-screen z-10 relative flex flex-col mx-auto px-4 lg:px-8">
  <div className="absolute inset-0 bg-[url('/background2.png')] bg-top bg-cover bg-no-repeat mx-auto opacity-35"></div>

  <div className="relative">
   
    <div className="h-36 flex justify-center items-end text-3xl md:text-4xl font-extrabold underline text-gray-800">
      About Me
    </div>

    <div className="w-full flex justify-center grid lg:grid-cols-2 grid-cols-1 gap-6 items-center mt-20">
   
      {/* Image  */}

      <div className="flex items-center justify-center">
        <div className="w-60 sm:w-56 md:w-64 xl:w-80 h-60 sm:h-56 md:h-64 xl:h-80 rounded-full shadow-lg shadow-gray-600 overflow-hidden brightness-50">
            <Image 
              src="/pfp.jpg"
              alt="pfp pic"
              className="bg"
              width={500}
              height={500}
             />
        </div>
      </div>

      {/* Text  */}

      <div className="flex flex-col items-center justify-center text-center px-4 lg:px-0">
        {/* Opening Quote */}

        <div className="text-yellow-500 text-5xl font-bold">“</div>
        <p className="max-w-[75%] text-gray-700 text-base md:text-lg leading-relaxed">
          As a frontend developer with a strong foundation in creating engaging user interfaces, I have contributed to several projects that enhance user experiences. With a keen interest in expanding my skill set, I am actively learning backend technologies to become a full-stack developer. I am eager to leverage my creativity and technical skills to build comprehensive end-to-end solutions in the near future.
        </p>
        {/* Closing Quote */}
        
        <div className="text-yellow-500 text-5xl font-bold">”</div>
      </div>
    </div>
  </div>



                <div className="py-10 2xl:px-72 xl:px-64 lg:px-56 sm:px-40 px-20 mt-10">
                       {/* <!-- Section Title --> */}
                         <div className="mb-6">
                            <h2 className="text-3xl font-extrabold text-gray-800">Education :</h2>
                            <div className="w-16 h-1 bg-yellow-500 mt-2"></div>
                         </div>

                         {/* <!-- Education Entries --> */}
                         <ul className="space-y-6">
                           {/* <!-- Entry 1 --> */}
                          <li className="flex flex-col">
                            <span className="text-gray-600 text-sm">April 2022 - June 2024</span>
                            <span className="text-xl font-extrabold text-gray-800">
                               Matric, Computer Science
                             </span>
                            <span className="text-gray-500">Arqam Public School Karachi</span>
                          </li>

                          {/* <!-- Entry 2 --> */}
                           <li className="flex flex-col">
                             <span className="text-gray-600 text-sm">Feb 2024 - Present</span>
                            <span className="text-xl font-extrabold text-gray-800">
                               Web Development
                            </span>
                            <span className="text-gray-500">Saylani Mass IT Training</span>
                           </li>

                          {/* <!-- Entry 3 --> */}
                          <li className="flex flex-col">
                             <span className="text-gray-600 text-sm">feb 2024 - Present</span>
                             <span className="text-xl font-extrabold text-gray-800">
                               Web 3, AI, & Metaverse
                             </span>
                             <span className="text-gray-500">
                               Governor Initiative for Artificial Intelligence & Computing
                             </span>
                          </li>
                        </ul>
                      </div>

              
          </div>

          {/* skills */}

          <div className="2xl:w-[1600px] h-[145vh] sm:h-[90vh] bg-primary flex justify-center items-center">
               <div className="w-[73%] h-[70%] ">
                 <div className="flex justify-center"><h1 className="text-4xl font-extrabold text-blue-900">Skills And Experience</h1></div>




                 <section
      id="skills"
      className=" text-white py-16 px-6 md:px-20 lg:px-40"
    >


      <div className="grid md:grid-cols-2 gap-10">
        {/* About Me Section */}
        <div className="font-extralight ">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">About Me</h3>
          <p className="mb-6 text-gray-300">
            I started my journey in 2024. Im a fresher specializing in frontend
            development with proficiency in technologies like{" "}
            <span className="text-blue-800">HTML</span>,{" "}
            <span className="text-blue-800">CSS</span>,{" "}
            <span className="text-blue-800">JavaScript</span>, and{" "}
            <span className="text-blue-800">React.js</span>. I am currently
            learning backend development and exploring platforms like{" "}
            <span className="text-blue-800">Sanity</span>.
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="group sm:w-[30%] w-full relative flex items-center justify-center p-4 border-[1px] border-gray-600 text-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
    >
      {/* White line animation */}
      <span className="absolute inset-0 bg-white opacity-60 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {skill.icon}
        <span className="font-medium text-sm">{skill.name}</span>
      </span>
    </div>
  ))}
</div>
</div>
    </section>


                          

               </div>
          </div>


        {/* work */}


      <div id="work" className="2xl:w-[1600px] sm:h-[190vh] h-[165vh] relative  flex justify-center items-center">

          {/* background image */}
          <div className="absolute inset-0 bg-[url('/background3.png')] bg-cover bg-center opacity-40"></div>

          <div className="w-[73%] h-[80%]  flex flex-col justify-center gap-20">
                    <div className="flex items-center flex-col">
                      <h1 className="text-4xl font-extrabold">Work</h1>
                      <div className="w-16 h-2 bg-blue-800 mt-2"></div>
                    </div>
                <div className="flex justify-center flex-wrap gap-8">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="sm:w-[45%] w-[95%] sm:h-[250px] h-[170px] border-black shadow-lg shadow-primary rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 "
                    >
                      <Link href="https://ecommerce-website-eight-indol.vercel.app/">
                     <Image
                     src="/Capture.PNG"
                     alt="pic"
                     width={500}
                     height={500}
                     className="aspect-auto bg-cover bg-contain bg-center"
                     />
                     </Link>
                    </div>
                  ))}
                </div>
            </div>
      </div>

      {/* Contact */}


      <div id="contact" className="2xl:w-[1600px] mx-auto sm:h-[125vh] h-[105vh] bg-primary flex items-center justify-center">
              <div className="w-[57%] h-[70%] flex flex-col gap-20">
                 <div className="flex justify-center"><h1 className="text-blue-700 text-4xl font-extrabold">Contact Me</h1></div> 

                <div className="flex flex-col gap-8 text-white">
                    <div className="flex gap-5 items-center">
                       <div className="sm:w-24 w-28 h-24 flex items-center justify-center rounded-full border-[2px] border-blue-800"><IoMdCall className="text-blue-700 w-16 h-20 "/></div>
                       <IoIosArrowForward className="w-16 h-20" />
                       <div className="text-2xl font-bold">0345-2524816</div>
                    </div>

                    <div className="flex gap-5 items-center">
                       <div className="w-24 h-24 flex items-center justify-center rounded-full border-[2px] border-blue-800"><MdEmail  className=" text-blue-700 w-16 h-20 "/></div>
                       <IoIosArrowForward className="w-16 h-20" />
                       <div className="w-[100px] overflow-hidden text-2xl font-bold">hasssannann234@gmail.com</div>
                    </div>

                    <div className="flex gap-5 items-center">
                       <div className="w-24 h-24 flex items-center justify-center rounded-full border-[2px] border-blue-800"><IoLocationSharp   className=" text-blue-700 w-16 h-20 "/></div>
                       <IoIosArrowForward className="w-16 h-20" />
                       <div className="text-2xl font-bold">A/69/3 Malir Extension Colony Karachi</div>
                    </div>
                </div>            

                <hr/>


                   <div className="flex gap-3 justify-center"> 
                      <Link href="#" className="w-16 h-16 flex items-center justify-center rounded-full border-[2px] border-blue-800"><FaFacebookF className=" text-gray-300 w-8 h-8 "/></Link>
                      <Link href="https://www.instagram.com/shutuphassan_/" className="w-16 h-16 flex items-center justify-center rounded-full border-[2px] border-blue-800"><FaInstagram  className=" text-gray-300 w-8 h-8 "/></Link>
                      <Link href="#" className="w-16 h-16 flex items-center justify-center rounded-full border-[2px] border-blue-800"><FaLinkedinIn   className=" text-gray-300 w-8 h-8 "/></Link>
                   </div>
                   


              </div>
      </div>

      <div className="2xl:w-[1600px] w-[99%] h-16 bg-gray-600 flex gap-3 sm:text-2xl text-xl justify-center font-bold items-center text-gray-300 mx-auto">
          <p>Hassan_Nadeem</p>
          <p>Copyright</p>
          <p><PiCopyrightFill /></p>
          <p>2025</p>

      </div>



      
    </div>
  )
}