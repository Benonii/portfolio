import './App.css';
import Project from './components/custom/Project';
import { Button } from './components/ui/button';
import Header from './components/custom/Header';
import Links from './components/custom/Links';
import Blog from './components/custom/Blog';
import { Sun, Moon, Volume2, VolumeOff  } from 'lucide-react';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import LightToDarkSound from '@/assets/sounds/light-to-dark.mp3';
import DarkToLightSound from '@/assets/sounds/dark-to-lgiht-1.mp3';
import { SoundContext } from '@/context/SoundContext';

import TimeCraftPic from '@/assets/images/timecraft.png'
import PizarooPic from '@/assets/images/pizza.jpg';
import EqubPic from '@/assets/images/equb.jpg';
import AiisPic from '@/assets/images/aiis.jpg';
import FreshfetchPic from '@/assets/images/fresh-fetch.png'

function App() {
  const [ playLightToDark ] = useSound(LightToDarkSound);
  const [ playDarkToLight ] = useSound(DarkToLightSound);
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference, default to 'dark'
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Add sound state
  const [isSoundEnabled, setIsSoundEnabled] = useState(() => {
    const stored = localStorage.getItem('sound');
    return stored ? stored === 'true' : true;
  });

  useEffect(() => {
    // Update root class and localStorage when theme changes
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Add sound effect
  useEffect(() => {
    localStorage.setItem('sound', isSoundEnabled.toString());
  }, [isSoundEnabled]);

  const toggleTheme = () => {
    // Only play sound if sound is enabled
    if (isSoundEnabled) {
      theme === 'light' ? playLightToDark() : playDarkToLight();
    }
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Add sound toggle function
  const toggleSound = () => {
    setIsSoundEnabled(prev => !prev);
  };

  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleSound }}>
      <div className='flex-col items-center justify-start scroll-smooth'>
        <div className='w-full'>
          <div className='relative w-full flex flex-row gap-1'>
            <div className='w-full'>
              <div className='w-full flex flex-row justify-center items-center'>
                <Header />
              </div>
              <div className='mt-20 flex flex-row gap-2 justify-center z-0'>
              <Button 
                variant='outline' 
                size='icon' 
                className="rounded-full backdrop-blur-md transition-colors duration-700" 
                onClick={toggleTheme}
              >
                {theme === 'dark' ? (
                  <Sun className='text-gray60 dark:text-gray10 transition-colors duration-700' />
                ) : (
                  <Moon className='text-gray60 transition-colors duration-700' />
                )}
              </Button>
                
              <Button 
                variant='outline' 
                size='icon' 
                className="rounded-full backdrop-blur-md"
                onClick={toggleSound}
              >
                {isSoundEnabled ? (
                  <Volume2 className='text-gray60 dark:text-gray10'/>
                ) : (
                  <VolumeOff className='text-gray60 dark:text-gray10'/>
                )}
              </Button>
              </div>
              <div className='mt-20 max-w-[900px]' id='about'>
                <h1 
                  className='
                    font-iceland text-4xl font-bold mb-10 mt-10 
                    z-50 max-w-full md:text-5xl dark:text-gray10'
                >
                  Fullstack developer
                </h1>
                <p className='text-left text-md font-nunito ml-2 md:text-lg dark:text-gray20'>
                  My name is Benoni Esckinder. I'm a certified full-stack engineer.
                  I like making my own projects and I work as a freelancer to feed myself.
                </p>
                <p className='text-left text-md font-texturina mt-5 ml-2 md:text-lg text-blue70 dark:text-blue40'>
                  I am currently working as a contract developer in a team of 6 engineers.
                  We are building a social  media app for gym lovers.
                </p>
              </div>
              <div className='mt-10 md:mt-20'>
                <Button
                  className='bg-blue70 text-white hover:bg-blue60'
                >
                  Download resume
                </Button>
              </div>
            </div>
            <div>
              <Links />
            </div>
          </div>

          <div className='mt-10 md:mt-20 w-full' id='projects'>
            <h2 className='font-iceland text-3xl font-semibold text-left mb-5 md:text-4xl'>Projects</h2>
            <div className='grid place-items-center grid-cols-1 md:grid-cols-3 gap-2 gap-y-6 border'>
              <Project
                title='Timecraft'
                description='A comprehensive tool for tracking and reporting how you spend your time'
                imageURL={TimeCraftPic}
                tags={['React', 'Typescript', 'Flask', 'Shadcn UI', 'SQLAlchemy', 'MySQL', 'Tailwind CSS']}
                gitHubURL='https://github.com/Benonii/TimeCraft_2'
                projectURL='https://youtu.be/axj2RJTNKK8?si=a2pmKbSpI-mrNjAy'
              />
              <Project
                title='Pizza Beno'
                description='A full-stack pizza delivery app made in less than a week'
                imageURL={PizarooPic}
                tags={['React', 'Typescript', 'NextJS', 'Material UI', 'Prisma', 'PostgreSQL']}
                gitHubURL='https://github.com/Benonii/pizaroo'
                projectURL='https://youtu.be/5ViXRu7ozXc?si=A5gr-m9b6gqv9D0M'
              />
              <Project
                title='Equb'
                description='A digital implementation of the Ethiopian traditional banking system.'
                imageURL={EqubPic}
                tags={['React', 'Javascript', 'SaSS/ScSS', 'FastAPI', 'PostgreSQL']}
                gitHubURL='https://github.com/Benonii/equb'
                projectURL='https://github.com/Benonii/equb'
              />
              <Project
                title='africaniis.com'
                description='My very first attempt at making a website. (You can see I don&apos;t know what I&apos;m doing here)'
                imageURL={AiisPic}
                tags={['HTML', 'CSS']}
                gitHubURL='https://github.com/Benonii/aiis'
                projectURL='https://africaniis.com/'
              />
              <Project
                title='Fresh-fetch'
                description='An grocery delivery app with buyer and seller facing sides'
                imageURL={FreshfetchPic}
                tags={['React', 'Javascript', 'CSS', 'DRF', 'SQLAlchemy', 'MySQL']}
                gitHubURL='https://github.com/Josephdada01/fresh-fetch'
                projectURL='https://youtu.be/S6aUJYxQHF4'
              />
            </div>
          </div>
          <div className='mt-10 md:mt-20 w-full' id='blogs'>
            <h2 className='font-iceland text-3xl font-semibold text-left mb-5 md:text-4xl' >Blogs</h2>
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
    </SoundContext.Provider>
  )
}

export default App
