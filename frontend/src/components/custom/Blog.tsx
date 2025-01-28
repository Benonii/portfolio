import { BlogProps } from "@/lib/types"
import { Link2 } from "lucide-react"
import { Button } from "../ui/button"

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
          <div className="text-left max-w-[500px] lg:max-w-[700px]">
              <h3 className="font-iceland text-2xl lg:text-3xl dark:text-gray20">
                {title}
              </h3>
              <p className="font-texturina text-sm mt-4 lg:text-lg dark:text-gray30">
                {description}
              </p>
          </div>
      </div>
    </div>

  )
}

export default Blog