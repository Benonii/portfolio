import './App.css';
import Project from './components/custom/Project';
import TimeCraftPic from './assets/images/timecraft.png'
import { Button } from './components/ui/button';

function App() {

  return (
    <div className='flex-col items-center justify-start mx-2 font'>
      <div>
        <div>
          <h1 className='font-iceland text-4xl font-bold mb-10'>Fullstack developer</h1>
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

        <div className='mt-10 w-[90vw]'>
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
      </div>
    </div>
  )
}

export default App
