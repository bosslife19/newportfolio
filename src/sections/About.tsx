import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from '@/assets/icons/star.svg'
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import HTMLICON from '@/assets/icons/html5.svg'
import ReactIcon from '@/assets/icons/react.svg'
import CSSiCON from '@/assets/icons/css3.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GitIcon from '@/assets/icons/github.svg'
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
const toolBoxItems = [{
  title: 'Javascript',
  iconType:JavaScriptIcon
},
{
  title: 'HTML5',
  iconType:HTMLICON
},{
  title: 'CSS3',
  iconType:CSSiCON
},{
  title: 'React',
  iconType:ReactIcon
},{
  title: 'Chrome',
  iconType:ChromeIcon
},{
  title: 'Github',
  iconType:GitIcon
},

]

const hobbies = [{
  title:'Painting',
  emoji: '',
  left:'5%',
  top: '5%'

},
{
  title:'Photography',
  emoji: '',
left:'50%',
  top: '5%'
},

{
  title:'Hiking',
  emoji: '',
  left:'35%',
  top: '40%'

},
{
  title:'Gaming',
  emoji: '',
  left:'10%',
  top: '35%'

},
{
  title:'Music',
  emoji: '',
  left:'70%',
  top: '45%'

},
{
  title:'Fitness',
  emoji: '',
  left:'5%',
  top: '65%'

},
{
  title:'Reading',
  emoji: '',
  left:'45%',
  top: '70%'

},

]
export const AboutSection = () => {
  return <div className='py-20 lg:py-28'>
    <div className="container">

    
    <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me"/>
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">

      
      <Card className='h-[320px] md:-span-2 lg:col-span-1'>
          <CardHeader title='My Reads' description="Explore the books shaping my perspectives"/>
          <div className="w-40 mx-auto mt-2 md:mt-0">
          <Image src={bookImage} alt='book cover'/>
          </div>
         
      </Card>
      <Card className="h-[320px] md:col-span-3 lg:col-span-2">
        <CardHeader title='My Toolbox' description="Explore the technologies and tools used to craft exceptional digital experiences." className=""/>
          
          <ToolboxItems toolBoxItems={toolBoxItems} className=""/>
          <ToolboxItems toolBoxItems={toolBoxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2"/>
      </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
      <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
        <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm" className="px-6 py-6"/>
      
          <div className="relative flex-1">
            {hobbies.map(hobby=>(
              <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                left:hobby.left,
                top:hobby.top
              }}>
                <span className="font-medium text-gray-950">{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
      </Card>
      <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
          <Image src={mapImage} alt='map' className="h-full w-full object-cover object-left-top" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after-outline after-outline-2 after:-outline-offset-2 after:rounded-full after:ouline-gray-950/30">
          <Image src={smileMemoji} alt='smiling memoji' className="size-20" />
          </div>
          
      </Card>
      </div>
     
    </div>
  </div>;
  </div>
};
