
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import Image from "next/image";

const portfolioProjects = [
  {
    company: "EDOSUBEB",
    year: "2024",
    title: "EDOSUBEB Inventory Management System",
    results: [
      { title: "Used React and React-Bootstrap to build the UI from the Figma design" },
      { title: "Used Laravel on the backend to write the REST API" },
      { title: "Optimized the system to handle data of over 1200 schools and over 56000 items of inventory efficiently" },
      { title: "Provided features like data filtering, inventory tracking, role-based authentication, email notifications/scheduling,etc" },
    ],
    link: "https://www.edosubebims.com/",
    src: 'https://centusvest.com/storage/app/public/photos/edosubeb.mp4',
  },
  {
    company: "Authentic Alabama",
    year: "2024",
    title: "Authentic Alabama Fans Football items E-Shop",
    results: [
      { title: "Built using WordPress CMS" },
      { title: "Integrated live bidding using Ultimate Auction Plugin Pro" },
      { title: "Integrated multiple payment gateways (Stripe, Paypal)" },
      { title: "Provided features like Silent Bidding, Proxy Bidding, Email Notifications, Countdown timers etc" },
    ],
    link: "https://authenticalabamafans.com/",
    src: 'https://centusvest.com/storage/app/public/photos/authenticalabama.mp4',
  },
  {
    company: "FuseIO",
    year: "2023",
    title: "FUSEIO Landing Page",
    results: [
      { title: "Pixel perfect design from Figma" },
      { title: "User-friendly/mobile responsive layout using TailwindCSS" },
      { title: "Implemented MailChimp to collect emails" },
    ],
    link: "https://myfuse.io/",
    src: 'https://centusvest.com/storage/app/public/photos/fuseio.mp4',
  },
  {
    company: "DOWELL UX Living Labs",
    year: "2024",
    title: "Samantha Content Evaluator",
    results: [
      { title: "Built out the mobile responsive and user-friendly UI using React" },
      { title: "Evaluates text content to determine if its AI Generated or not" },
      { title: "Keeps track of number of times the software is used by a particular user" },
      // { title: "Sends result to user's valid email (returns an error if email does not exist)" },
    ],
    link: "https://www.uxlivinglab.org/products/samanta_content_evaluator/",
    src: 'https://centusvest.com/storage/app/public/photos/samantha.mp4',
  },
  {
    company: "EZ Drive",
    year: "2024",
    title: "EZ Drive Mobile App",
    results: [
      { title: "Cross-Platform and user-friendly application built using React Native" },
      { title: "Remotely Connect to IOT devices in every EZ Drive Vehicle" },
      { title: "Execute commands remotely to open/close car doors and trunk through the app" },
      { title: "Get the location, battery status and condition of each vehicle in EZ Drive" },
    ],
    link: "https://github.com/bosslife19/ez-car-rentals-mobile-app",
    src: 'https://centusvest.com/storage/app/public/photos/ezdrive.mp4',
  },
];

const ProjectsSection = () => {
  return <div className="pb-16 lg:py-24" id='Projects'>
    <div className="container">
      <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">Real-world Results</p>
      </div>
      
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Most Recent Projects</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">How I have brought Ideas to digital realties for my clients</p>

      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects.map((project, projectIndex)=>(
          <div key={project.title} className="bg-gray-800 md:pt-12 md:px-10 rounded-3xl lg:pt-16 lg:px-20 z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none sticky"
          style={{
            top:`calc(64px + ${projectIndex * 45}px)`
          }}
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
            <a href={project.link}>
            <button className="bg-white md:w-auto px-6 text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><span>Visit Live Site</span> 
              <ArrowUpRight className="size-4"/>
            </button>
            </a>
            </div>

            <div className="relative">
              <video width="500" height="500" controls autoPlay muted className="mt-8 -mb-4 md:-mb-0 lg:absolute lg:-left-10 lg:mt-0 object-contain lg:h-full lg:max-w-none" >
      <source src={project.src} type="video/mp4"  />
     
      Your browser does not support the video tag.
    </video>
            {/* <Image src={project.image} alt={project.title} className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto'/> */}
            </div>
             
              </div>
          </div>
        ))}
      </div>
    </div>
  </div>;
};

export default ProjectsSection