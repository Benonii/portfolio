import { Button } from "../ui/button";
import { Github, GithubIcon, Linkedin, Send, Twitter } from "lucide-react";

function Links() {
  return (
    <div className='fixed top-0 right-3 flex flex-col items-center justify-start'>
        <div className='w-0 h-14 border border-gray30' />
        <Button variant='outline' size='icon' className="rounded-full backdrop-blur-md">
            <a href="" target="_blank" rel="noopener noreferrer"><GithubIcon className="text-gray80"/></a>
        </Button>
        <div className='w-0 h-8 border border-gray30' />
        <Button variant='outline' size='icon' className="rounded-full">
            <a href="" target="_blank" rel="noopener noreferrer"><Linkedin className="text-gray80"/></a>
        </Button>
        <div className='w-0 h-8 border border-gray30' />
        <Button variant='outline' size='icon' className="rounded-full">
            <a href="" target="_blank" rel="noopener noreferrer"><Send className="text-gray80"/></a>
        </Button>
        <div className='w-0 h-8 border border-gray30' />
        <Button variant='outline' size='icon' className="rounded-full">
            <a href="" target="_blank" rel="noopener noreferrer"><Twitter className="text-gray80"/></a>
        </Button>
    </div>
  )
}

export default Links
