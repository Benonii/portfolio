import { Button } from "../ui/button";
import { GithubIcon, Linkedin, Send, Twitter } from "lucide-react";
import { useSoundContext } from "@/context/SoundContext";

function Links() {
  const { isSoundEnabled } = useSoundContext();

  return (
    <div
        className={`fixed top-0 right-3 lg:right-10 flex flex-col items-center justify-start group`}
    >
        <div className='w-0 h-14 md:h-20 border border-gray30 transition-all duration-300 group-hover:border-gray20' />
        <a href="https://github.com/Benonii" target="_blank" rel="noopener noreferrer">
            <Button variant='outline' size='icon' className='rounded-full hover:shake-on-hover'>
                <GithubIcon className="text-gray80 dark:text-gray20"/>
            </Button>
        </a>
        <div className='w-0 h-8 md:h-14  border border-gray30' />
        <a href="https://www.linkedin.com/in/benoni-esckinder-929220269/" target="_blank" rel="noopener noreferrer">
            <Button variant='outline' size='icon' className='rounded-full hover:shake-on-hover'>
                <Linkedin className="text-gray80 dark:text-gray20"/>
            </Button>
        </a>
        <div className='w-0 h-8 md:h-14 border border-gray30' />
        <a href="https://t.me/thebludragon" target="_blank" rel="noopener noreferrer">
            <Button variant='outline' size='icon' className='rounded-full hover:shake-on-hover'>
                <Send className="text-gray80 dark:text-gray20"/>
            </Button>
        </a>
        <div className='w-0 h-8 md:h-14  border border-gray30' />
        <a href="https://x.com/BBesckinder" target="_blank" rel="noopener noreferrer">
            <Button variant='outline' size='icon' className={'rounded-full hover:shake-on-hover'}>
                <Twitter className="text-gray80 md:w-20 md:h-20 dark:text-gray20"/>
            </Button>
        </a>
    </div>
  )
}

export default Links;