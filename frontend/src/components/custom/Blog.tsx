import { BlogProps } from "@/lib/types"
import { Link2 } from "lucide-react"
import { Button } from "../ui/button";
import ScribbledUnderline from "@/assets/scribbled-underline.svg"

function Blog({ title, description, link }: BlogProps) {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="flex flex-col items-center ">
          <div className='w-0 h-24 border border-gray30' />
          <Button variant='outline' size='icon' className="rounded-full backdrop-blur-md">
              <a href={link} target="_blank" rel="noopener noreferrer"><Link2 className="text-gray80 dark:text-gray30"/></a>
          </Button>
          <div className='w-0 h-24 border border-gray30' />

      </div>
      <div>
          <div className="text-left max-w-[500px] md:max-w-[700px]">
          <h3 className="font-iceland text-2xl md:text-3xl dark:text-gray20 relative group">
            {title}
            <img
              src={ScribbledUnderline}
              alt="underline"
              className="absolute left-0 bottom-[-8px] w-0 transition-all duration-500 group-hover:w-full"
            />
          </h3>


              <p className="font-nunito text-sm mt-4 md:text-lg dark:text-gray30">
                {description}
              </p>
          </div>
      </div>
    </div>

  )
}

export default Blog