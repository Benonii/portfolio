import { useState } from 'react';
import LogoImg from '@/assets/images/logo.jpg';
import { Home, Info, MonitorCog, SquareLibrary } from 'lucide-react';


function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div 
        className={
            `fixed top-5 flex flex-row justify-evenly items-center backdrop-blur-sm
             border border-black rounded-3xl gap-4 bg-gray30-transparent
             h-[40px] transition-all duration-500 ${isExpanded ? 'w-64' : 'w-20'
             } `
        }
    >
       {isExpanded && <Home />}
       {isExpanded && <Info className='mr-5' />}
        <div 
            className='fixed left-1[180px] rounded-full cursor-pointer '
            onClick={() => setIsExpanded(prev => !prev)}
        >
            <img src={LogoImg} alt='My logo' width={55} height={55} className='rounded-full' />
        </div>
        {isExpanded && <MonitorCog className='ml-5'/>}
        {isExpanded && <SquareLibrary />}     
    </div>
  )
}

export default Header
