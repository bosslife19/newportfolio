import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/martins.png";
import memojiAvatar3 from "@/assets/images/uchejames.png";

import { SectionHeader } from "@/components/SectionHeader";
import grainImage from '@/assets/images/grain.jpg'
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Christian Gerini",
    position: "CEO @ 2HIRE",
    text: "Working with David was a real pleasure. His attention to while going through our API Docs was truly exceptional.",
    avatar: memojiAvatar1,
  },
  {
    name: "Martins Egbokhabho",
    position: "IT Specialist at Uniek Ideas Consulting",
    text: "I worked with David during his time here at Uniek Ideas Consulting. He was a real team player, and diligent in his work. I really love his work ethic!",
    avatar: memojiAvatar2,
  },
  {
    name: "Uche James",
    position: "Web designer/Freelancer",
    text: "I have collaborated on multiple Projects with David. His problem solving skills and unique way of tackling projects is just a delight to see",
    avatar: memojiAvatar3,
  },

];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">

    <div className="container">
    <SectionHeader eyebrow="Testimonials" title='What People Say about My Work' description="Don't just take my word for it. See what has been said about me"/>
    
    <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
        {[...new Array(2).fill(0).map((_,index)=>(
        <Fragment key={index}>
          {testimonials.map(testimonial=>(
        
        <Card key={testimonial.name} className="max-w-xs md:p-8 md:max-w-md p-6 hover:-rotate-3 transition duration-300">
          <div className="flex gap-4 items-center">
          <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
          <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full max-w-full object-contain rounded-full"/>
          </div>
          <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-white/40">{testimonial.position}</div>
          </div>
          </div>
         
        
        
         
        
        <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
       
        </Card>
       
      
      ))}
        </Fragment>
 
        ))]}
     
      </div>
    </div>
    </div>
  </div>;
};
