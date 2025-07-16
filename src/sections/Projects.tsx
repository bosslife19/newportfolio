
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

import Image from "next/image";

const portfolioProjects = [

  {
    company: "COMESO GMBH",
    year: "2024",
    title: "COMESO – Mobile App",
    results: [
      { title: "Buy and Store Health Vouchers" },
      { title: "Use Vouchers to Pay for Healthcare Services" },
      { title: "Discover Nearby Partner Healthcare Providers" },
      { title: "Track Voucher Usage and Wallet Balance" },
      { title: "Secure Account with OTP-Based Login" },
      { title: "Schedule Appointments with Clinics and Hospitals" },
      { title: "Receive Reminders and Notifications" },
      { title: "View Transaction and Voucher History" },
      { title: "Simple, Fast, and Offline-Friendly Interface" }
    ],
    link: "https://play.google.com/store/apps/details?id=com.davidwoks.comeso&pcampaignid=web_share",
    github: "https://github.com/bosslife19/ComesoApp.git",
    src: comesoImage // replace with actual image path/variable
  },
  {
    company: "COMESO GMBH",
    year: "2024",
    title: "COMESO Web",
    results: [
      { title: "Built a secure web dashboard for patients and healthcare providers" },
      { title: "Implemented voucher management for creating and redeeming health vouchers" },
      { title: "Integrated Paystack for purchasing vouchers online" },
      { title: "Built real-time analytics for voucher usage and service access" },
      { title: "Developed secure multi-role authentication (Admin, Provider, Patient)" },
      { title: "Enabled clinic onboarding and management from the admin panel" },
      { title: "Created reporting tools for tracking clinic performance and voucher redemptions" }
    ],
    link: "https://comeso.de",
    github: "https://github.com/bosslife19/ComesoWeb",
    src: comesoWeb // replace with actual image path/variable
  },
  {
    company: "DeftPress",
    year: "2024",
    title: "DeftPress – Multi-Tenant Website Builder",
    results: [
      { title: "Built a multi-tenant website builder similar to WordPress" },
      { title: "Each user can create and manage multiple websites with custom domains" },
      { title: "Generated isolated SQLite databases for each tenant" },
      { title: "Implemented separate frontend and admin apps for website rendering and management" },
      { title: "Admin panel includes site builder, billing, theme/plugin management, and user roles" },
      { title: "Real-time updates using Laravel Echo and Pusher" }
    ],
    link: "https://deftpress.com",
    github: "https://github.com/bosslife19/deftpress-frontend.git",
    src: deftpressImage
  },
  {
    company: "LUA Fitness",
    year: "2024",
    title: "LUA – Workout & Progress Tracker",
    results: [
      { title: "Built a fitness app using React Native and Expo" },
      { title: "Streamed workout videos using `expo-video`" },
      { title: "Tracked time spent watching videos to calculate user progress" },
      { title: "Logged daily, weekly, and monthly workout activity per user" },
      { title: "Allowed trainers to upload and manage workout content" },
      { title: "Used Laravel backend to manage users and workout logs" }
    ],
    link: "https://sweetgodheights.com/public/images/base.apk",
    github: "https://github.com/bosslife19/lua-fitness-app.git",
    src: luaImage
  },
  {
    company: "Internal Tool – COMESO GMBH",
    year: "2024",
    title: "Email Campaign & Event Management Platform",
    results: [
      { title: "Built with Laravel and Filament for managing email campaigns" },
      { title: "Scheduled and sent bulk emails via Amazon SES" },
      { title: "Integrated Amazon SNS to track bounces, complaints, deliveries, and rejects" },
      { title: "Stored SNS events in separate database tables for easy reporting" },
      { title: "Custom checkbox group selection with a styled Filament UI" },
      { title: "Preview campaign content inside a wizard form before sending" },
      { title: "Uploaded and exported subscriber lists via CSV (no external packages)" },
      { title: "Restricted user access to only specific dashboard resources" }
    ],
    link: "https://emails.lopsim.com",
    github: "https://github.com/bosslife19/emails-management-lopsim.git",
    src: ecms
  },
  {
    company: "SweetGod Heights Schools",
    year: "2024",
    title: "SweetGodHeightsSchools – School Management System",
    results: [
      { title: "Robust school management platform built with Laravel" },
      { title: "Managed student enrollment, promotion, and records" },
      { title: "Tracked attendance for students and staff" },
      { title: "Generated report cards and academic performance analytics" },
      { title: "Handled fee payment structures and online invoicing" },
      { title: "Enabled parent-student portals with real-time updates" },
      { title: "Integrated role-based access control for admins, teachers, and parents" },
      { title: "Sent announcements and notifications via email/SMS" }
    ],
    link: "https://sweetgodheights.com",
    github: "https://github.com/bosslife19/sweetgodheights",
    src: sweetgod
  },
    {
    company: "EDOSUBEB",
    year: "2024",
    title: "EDOSUBEB Inventory Management System",
    results: [
      { title: "Used React and React-Bootstrap to build the UI from the Figma design" },
      { title: "Used Laravel on the backend to write the REST API" },
      { title: "Optimized the system to handle data of over 1200 schools and over 56000 items of inventory efficiently" },
      { title: "Provided features like data filtering, inventory tracking, role-based authentication, email notifications/scheduling,etc" }
    ],
    link: "https://www.edosubebims.com/",
    src: edosubeb,
    github:'https://github.com/bosslife19/imsdemo.git'
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
            <button className="bg-white md:w-auto px-6 text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><span>View Project</span> 
              {/* <ArrowUpRight className="size-3"/> */}
            </button>
            </a>
             <a href={project.link}>
            <button className="bg-white md:w-auto px-6 text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><span>View on Github</span> 
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