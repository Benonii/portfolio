import './App.css';
import Project from './components/custom/Project';
import TimeCraftPic from './assets/images/timecraft.png'
import { Button } from './components/ui/button';
import Header from './components/custom/Header';
import Links from './components/custom/Links';
import Blog from './components/custom/Blog';

function App() {

  return (
    <div className='flex-col items-center justify-start scroll-smooth'>
      <div className='w-full'>
        <div className='relative w-full flex flex-row border gap-1'>
          <div className='w[90%]'>
            <div className='w-full flex flex-row justify-center items-center'>
              <Header />
            </div>
            <div className='mt-40'>
              <h1 className='font-iceland text-4xl font-bold mb-10 mt-10 z-50 max-w-full'>Fullstack developer</h1>
              <p className='text-left text-md font-texturina ml-2'>
                My name is Benoni Esckinder. I’m a certified full-stack engineer.
                I like making my own projects and I work as a freelancer to feed myself.
              </p>
              <p className='text-left text-md font-texturina mt-5 ml-2'>
                I am currently working as a contract developer in a team of 6 engineers.
                We are building a social  media app for gym lovers.
              </p>
            </div>
            <div className='mt-10'>
              <Button className='bg-blue70 font-iceland text-lg'>Download Resume</Button>
            </div>
          </div>
          <div>
            <Links />
          </div>
        </div>

        <div className='mt-10 w-full'>
          <h2 className='font-iceland text-3xl font-semibold text-left mb-5'>Projects</h2>
          <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <Project
              title='Timecraft'
              description='A comprehensive tool for tracking and reporting how you spend your time'
              imageURL={TimeCraftPic}
              tags={['React', 'Typescript', 'Flask']}
              gitHubURL='https://github.com/Benonii/portfolio'
              projectURL='https://github.com/Benonii/portfolio'
            />
            <Project
              title='Timecraft'
              description='A comprehensive tool for tracking and reporting how you spend your time'
              imageURL={TimeCraftPic}
              tags={['React', 'Typescript', 'Flask']}
              gitHubURL='https://github.com/Benonii/portfolio'
              projectURL='https://github.com/Benonii/portfolio'
            />
            <Project
              title='Timecraft'
              description='A comprehensive tool for tracking and reporting how you spend your time'
              imageURL={TimeCraftPic}
              tags={['React', 'Typescript', 'Flask']}
              gitHubURL='https://github.com/Benonii/portfolio'
              projectURL='https://github.com/Benonii/portfolio'
            />
          </div>
        </div>
        <div className='mt-10 w-full'>
          <h2 className='font-iceland text-3xl font-semibold text-left mb-5'>Blogs</h2>
          <div className='ml-5'>
            <Blog
              title='What happens when you type google.com and press enter'
              description='A mandatory article I wrote about all the things happening in the background when you make a search'
              link='your mum'
            />
            <Blog
              title='What happens when you type google.com and press enter'
              description='A mandatory article I wrote about all the things happening in the background when you make a search'
              link='your mum'
            />
            <Blog
              title='What happens when you type google.com and press enter'
              description='A mandatory article I wrote about all the things happening in the background when you make a search'
              link='your mum'
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
