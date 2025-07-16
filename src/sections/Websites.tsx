
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import comesoImage from '@/assets/images/comesoappimage.png'
import comesoWeb from '@/assets/images/comesoweb.png'
import luaImage from '@/assets/images/luaimage.png'
import sweetgod from '@/assets/images/sweetgodheightsdashboard.png'
import deftpressImage from '@/assets/images/defpressweb.png'
import ecms from '@/assets/images/ecms.png'
import edosubeb from '@/assets/images/edosubeb.png'
import atlasfinance from '@/assets/images/atlasfinance.png'
import tBookings from '@/assets/images/t-bookings.png'
import nlparket from '@/assets/images/nlparket.png'

import Image from "next/image";

const portfolioProjects = [

  {
    company: "ATLAS Finance",
    year: "2025",
    title: "Atlas Finance",
    results: [
      { title: "Crafted a sleek, modern landing page with a soft-glassmorphism style" },
      { title: "Emphasized clear visual hierarchy using bold typography and structured spacing" },
      { title: "Built mobile-first responsive layouts for consistent performance across devices" },
      { title: "Used subtle animations and transitions to enhance user experience without distraction" },
      { title: "Focused on accessibility with readable contrast ratios and intuitive navigation" },
      { title: "Implemented the UI using the Wordpress Elementor Page builder" }
    ],
    link: "https://atlasfinace.com",
    src: atlasfinance
  },

  {
    company: "T‑Bookings",
    year: "2025",
    title: "T‑Bookings Travel Booking Website",
    results: [
      { title: "Designed a clean, intuitive layout optimized for quick search and booking flow" },
      { title: "Prioritized user journey by grouping filters, listings, and actions clearly" },
      { title: "Used high-quality travel imagery with generous spacing for a modern travel vibe" },
      { title: "Developed responsive layouts ensuring seamless access on mobile and tablet" },
      { title: "Incorporated animated interactions to guide users through search and booking" },
      
    ],
    link: "https://t-bookings.com/",
    src: tBookings
  },

  {
    company: "NLParket",
    year: "2025",
    title: "NLParket – PVC & Wood Flooring Website",
    results: [
      { title: "Showcased flooring collections with full-width visuals and elegant product cards" },
      { title: "Used a minimal, earthy color palette to align with natural product feel" },
      { title: "Designed custom icons and feature sections to highlight product durability and eco-quality" },
      { title: "Optimized spacing and layout for readability and ease of navigation" },
      { title: "Ensured responsive design across devices with consistent visual flow" },
      { title: "Built using WordPress with custom theme edits to match brand identity" }
    ],
    link: "https://www.nlparket.nl/",
    src: nlparket
  }

];




const WebsitesSection = () => {
 
  return <div className="pb-16 lg:py-24" id='Projects'>
    <div className="container">
      <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text "> Real Websites, Real Clients</p>
      </div>
      
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Most Recent Websites</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">High-impact websites crafted for performance, usability, and measurable results.</p>

      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects.map((project, projectIndex)=>(
          <div key={project.title} className="bg-gray-800 md:pt-12 md:px-10 rounded-3xl lg:pt-16 lg:px-20 z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none sticky"
          
          >
           <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: `url(${grainImage.src})`}}></div>
           <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:pb-16">

            
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"> 
              <span>{project.company}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
              </div>
              
              
           
            <h3 className="font-serif text-2xl mt-2 md:text-3xl md:mt-5">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map(result=>(
                <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                  <CheckIcon className="size-5 md:size-6"/>
                  <span className="md:w-3/4 ">{result.title}</span>
                  </li>
              ))}
            </ul>
            <div className="flex gap-2">
               <a href={project.link}>
            <button className="bg-white md:w-auto px-6 text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><span>View Website</span> 
              {/* <ArrowUpRight className="size-3"/> */}
            </button>
            </a>

            </div>
            {/* <a href={project.link}>
            <button className="bg-white md:w-auto px-6 text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><span>View Project</span> 
              <ArrowUpRight className="size-4"/>
            </button>
            </a> */}
            </div>

            <div className="relative">
                {
                    project.src && <Image alt="Project Image" src={project.src} width="500" height="500" className="mt-8 -mb-4 md:-mb-0 lg:absolute lg:-left-10 lg:mt-0 object-contain lg:h-full lg:max-w-none" />
                }
              
     
            {/* <Image src={project.image} alt={project.title} className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto'/> */}
            </div>
             
              </div>
          </div>
        ))}
      </div>
    </div>
  </div>;
};

export default WebsitesSection