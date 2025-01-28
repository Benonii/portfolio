import { useState } from 'react';
import LogoImg from '@/assets/images/logo.jpg';
import { Home, Info, MonitorCog, SquareLibrary } from 'lucide-react';


function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div 
        className={
            `fixed top-8 flex flex-row justify-evenly items-center backdrop-blur-sm
             shadow-lg shadow-blue40 rounded-3xl gap-4 bg-gray10-transparent dark:bg-transparent
             h-[40px] transition-all duration-500 ${isExpanded ? 'w-72 md:w-96 lg:w-[500px]' : 'w-20'
             } `
        }
    >
       {isExpanded && <Home className='text-blue70 dark:text-gray30'/>}
       {isExpanded && <Info className='mr-5 text-blue70 dark:text-gray30' />}
        <div 
            className='fixed left-1[180px] rounded-full cursor-pointer'
            onClick={() => setIsExpanded(prev => !prev)}
        >
            <img src={LogoImg} alt='My logo' width={55} height={55} className='rounded-full md:w-14 md:h-14 ' />
        </div>
        {isExpanded && <MonitorCog className='ml-5 text-blue70 dark:text-gray30'/>}
        {isExpanded && <SquareLibrary className='text-blue70 dark:text-gray30' />}     
    </div>
  )
}

export default Header
