import { BlogProps } from "@/lib/types"
import { Link2 } from "lucide-react"
import { Button } from "../ui/button"

function Blog({ title, description, link }: BlogProps) {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="flex flex-col items-center ">
          <div className='w-0 h-24 border border-gray30' />
          <Button variant='outline' size='icon' className="rounded-full backdrop-blur-md">
              <a href={link} target="_blank" rel="noopener noreferrer"><Link2 className="text-gray80"/></a>
          </Button>
          <div className='w-0 h-24 border border-gray30' />

      </div>
      <div>
          <div className="text-left max-w-96">
              <h3 className="font-iceland text-2xl">
                {title}
              </h3>
              <p className="font-texturina text-sm mt-4">
                {description}
              </p>
          </div>
      </div>
    </div>

  )
}

export default Blog