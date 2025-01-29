import { useState } from 'react';
import { useSoundContext } from '@/context/SoundContext';
import LogoImg from '@/assets/images/logo.jpg';
import { Home, Info, MonitorCog, SquareLibrary } from 'lucide-react';
import useSound from 'use-sound';
import OpenNavBar from '@/assets/sounds/navbar-open-2.mp3';
import CloseNavBar from '@/assets/sounds/navbar-open-1.mp3'


function Header() {
    const { isSoundEnabled } = useSoundContext();
    const [isExpanded, setIsExpanded] = useState(false);
    const [ playExpandSound ] = useSound(OpenNavBar, { volume: 0.3 });
    const [ playCollapseSound ] = useSound(CloseNavBar, { volume: 1 });

    const handleClick = () => {
        if (isSoundEnabled) {
            isExpanded ? playCollapseSound() : playExpandSound();
        }
        setIsExpanded(prev => !prev);
    };
    
    return (
        <div 
            className={
                `fixed top-8 flex flex-row justify-evenly items-center backdrop-blur-sm
                 shadow-lg shadow-blue40 rounded-3xl gap-4 bg-gray10-transparent dark:bg-transparent
                 h-[40px] transition-all duration-1000 ${isExpanded ? 'w-72 md:w-96 lg:w-[500px]' : 'w-20'
                 } `
            }
        >
           {isExpanded && <Home className='text-blue70 dark:text-gray30'/>}
           {isExpanded && <Info className='mr-5 text-blue70 dark:text-gray30' />}
            <div 
                className='fixed left-1[180px] rounded-full cursor-pointer'
                onClick={handleClick}
            >
                <img src={LogoImg} alt='My logo' width={55} height={55} className='rounded-full md:w-14 md:h-14 ' />
            </div>
            {isExpanded && <MonitorCog className='ml-5 text-blue70 dark:text-gray30'/>}
            {isExpanded && <SquareLibrary className='text-blue70 dark:text-gray30' />}     
        </div>
    )
}

export default Header
