import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '../ui/card';
import { Button } from '../ui/button';
import { ProjectProps } from '@/lib/types';
import { Github, Link, Link2 } from 'lucide-react';
import Tag from './Tag';
import CustomTooltip from './CustomTooltip';


function Project({ title, description, tags, imageURL, gitHubURL, projectURL }: ProjectProps) {
  return (
    <Card className='w-56 h-[550px] text-left'>
        <CardHeader className='flex justify-center h-56'>
            <img src={imageURL} width={220} height={300} />
        </CardHeader>
        <CardContent>
            <CardTitle className='mb-2 dark:text-gray20'>
                {title}
            </CardTitle>
            <div className='flex flex-wrap flex-row dark:text-gray30 gap-1 w-48'>
                {tags.map((tag: string) => (
                    <Tag key={tag} text={tag} />
                ))}
            </div>
            <CardDescription className='mt-5 text-left h-fit'>
                {description}
            </CardDescription>
        </CardContent>
        <CardFooter className='flex flex-row justify-end gap-2'>
            <CustomTooltip
                element={
                    <Button variant='outline' size='icon' className='border'>
                        <a href={gitHubURL} target="_blank" rel="noopener noreferrer" ><Github className='text-gray80 dark:text-gray30'/></a>
                    </Button>
                }
                info="Github link"
            />
            <CustomTooltip
                element={
                    <Button variant='outline' size='icon'>
                        <a href={projectURL} target="_blank" rel="noopener noreferrer" ><Link2 className='text-gray80 dark:text-gray30'/></a>
                    </Button>
                }
                info="Project link"
            />
        </CardFooter>
    </Card>
  )
}

export default Project
