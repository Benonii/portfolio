import { BlogProps } from "@/lib/types"
import { Link2 } from "lucide-react"
import { Button } from "../ui/button";


function Blog({ title, description, link }: BlogProps) {
  return (
    <div className="flex flex-row items-center gap-3 group w-[60vw]">

      <div className="flex flex-col items-center">
        <div className="w-0 h-32 border border-gray30 group-hover:border-blue60 dark:group-hover:border-blue40" />
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full backdrop-blur-md border-2 border-transparent group-hover:border-blue60 group-hover:text-blue60 dark:group-hover:border-primaryColor"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Link2 className="text-gray80 dark:text-gray30 group-hover:text-blue60 dark:group-hover:text-blue30"/>
          </a>
        </Button>

        <div className="w-0 h-32 border border-gray30 group-hover:border-blue60 dark:group-hover:border-blue30" />
      </div>
      <div>
        <div className="text-left max-w-[500px] md:max-w-[700px]">
          <h3 className="font-iceland text-lg md:text-2xl lg:text-3xl dark:text-gray20 relative dark:group-hover:text-gray10">
            {title}
          </h3>

          <p className="font-nunito text-xs mt-4 md:text-lg lg:text-xl dark:text-gray30 group-hover:font-[450]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog