import { Button } from "../ui/button";
import { Github, GithubIcon, Linkedin, Send, Twitter } from "lucide-react";
import { useSoundContext } from "@/context/SoundContext";
import useSound from "use-sound";
import LinksSound from '@/assets/sounds/links-bell.mp3'

function Links() {
  const { isSoundEnabled } = useSoundContext();
  const [ play, { stop }] = useSound(LinksSound);

  return (
    <div
        className={`fixed top-0 right-3 lg:right-10 flex flex-col items-center justify-start group`}
        onMouseEnter={() => isSoundEnabled && play()}
        onMouseLeave={() => stop()}
    >
        <div className='w-0 h-14 md:h-20 border border-gray30 transition-all duration-300 group-hover:border-gray50' />
        <Button variant='outline' size='icon' className={`rounded-full backdrop-blur-md  hover:animate-shake}`}>
            <a href="" target="_blank" rel="noopener noreferrer"><GithubIcon className="text-gray80 dark:text-gray20"/></a>
        </Button>
        <div className='w-0 h-8 md:h-14  border border-gray30' />
        <Button variant='outline' size='icon' className={`rounded-full ${isSoundEnabled ? 'hover:animate-shake' : ''}`}>
            <a href="" target="_blank" rel="noopener noreferrer"><Linkedin className="text-gray80 dark:text-gray20"/></a>
        </Button>
        <div className='w-0 h-8 md:h-14 border border-gray30' />
        <Button variant='outline' size='icon' className={`rounded-full ${isSoundEnabled ? 'hover:animate-shake' : ''}`}>
            <a href="" target="_blank" rel="noopener noreferrer"><Send className="text-gray80 dark:text-gray20"/></a>
        </Button>
        <div className='w-0 h-8 md:h-14  border border-gray30' />
        <Button variant='outline' size='icon' className={`rounded-full ${isSoundEnabled ? 'hover:animate-shake' : ''}`}>
            <a href="" target="_blank" rel="noopener noreferrer"><Twitter className="text-gray80 md:w-20 md:h-20 dark:text-gray20"/></a>
        </Button>
    </div>
  )
}

export default Links;