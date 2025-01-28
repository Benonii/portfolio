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


function Project({ title, description, tags, imageURL, gitHubURL, projectURL }: ProjectProps) {
  return (
    <Card className='w-56 text-left'>
        <CardHeader>
            <img src={imageURL} />
        </CardHeader>
        <CardContent>
            <CardTitle className='mb-2 dark:text-gray20'>
                {title}
            </CardTitle>
            <div className='dark:text-gray30'>
                {tags}
            </div>
            <CardDescription className='mt-5 text-left'>
                {description}
            </CardDescription>
        </CardContent>
        <CardFooter className='flex-row justify-end gap-2'>
            <Button variant='outline' size='icon' className='border'>
                <a href={gitHubURL} target="_blank" rel="noopener noreferrer" ><Github className='text-gray80 dark:text-gray30'/></a>
            </Button>
            <Button variant='outline' size='icon'>
                <a href={projectURL} target="_blank" rel="noopener noreferrer" ><Link2 className='text-gray80 dark:text-gray30'/></a>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default Project
