// src/projects/page.jsx

"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  const projects = [
    {
      image: '/images/ldschurch.png', // Image for company 1
      name: 'Church of Jesus Christ',
      description: 'Accomplishing great work to inspire others to do the same.',
      link: 'https://www.churchofjesuschrist.org/?lang=eng'
    },
    {
      image: '/images/ensign.png', // Image for company 2
      name: 'Ensign College',
      description: 'Engaging in student success and preparing myself for the future.',
      link: 'https://www.ensign.edu/'
    },
    {
      image: '/images/dollar.png', // Image for company 3
      name: 'Affordable Tax and Accounting',
      description: 'Financially and professionally helping others to succeed.',
      link: 'https://www.ataxaa.com/'
    },
    {
      image: '/images/shoppingcart.png', // Image for company 4
      name: 'Smiths Marketplace',
      description: 'Planting seeds of growth in my life.',
      link: 'https://www.smithsfoodanddrug.com/'
    },
    {
      image: '/images/github.png', // Image for company 5
      name: 'GitHub',
      description: 'Creating challanging project to push my limits and inspire new ideas.',
      link: 'https://github.com/'
    },
    {
      image: '/images/wattpad.png', // Image for company 6
      name: 'Wattpad',
      description: 'Creating inspiring works to embolden and bring about the future.',
      link: 'https://www.wattpad.com/home'
    }
  ];

  return (
    <div className={`flex flex-col items-center min-h-screen ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <header className={`w-full flex items-center bg-${isDarkTheme ? 'gray-900' : 'white'} py-4`}>
        <div className="flex-grow flex justify-center">
          <nav className="flex items-center p-2 border border-gray-200 shadow-lg rounded-full">
            <ul className="flex space-x-4">
              <li><a href="/" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6">Home</a></li>
              <li><a href="/about" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6">About</a></li>
              <li><a href="/projects" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6 text-red-500 border-b-2 border-red-500">Projects</a></li>
              <li><a href="/uses" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6">Uses</a></li>
            </ul>
          </nav>
        </div>
        <button onClick={toggleTheme} className="mr-4">
          <Image
            src="/images/sun.png" // Your sun icon
            alt="Toggle theme"
            width={30}
            height={30}
          />
        </button>
      </header>
      <main className="w-full flex flex-col justify-center p-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 max-w-2xl text-left">Projects and Achievements I have accomplished. Each one a personal history.</h1>
          <p className="text-left mt-4 mb-8 max-w-2xl">
            Below are the several companies and websites I have done projects with and worked for; providing ample opportunities for me to grow and learn. Each one has been a stepping stone in my career and has helped me grow as a person.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col items-start p-5">
                <Image
                  src={project.image}
                  alt={`${project.name} logo`}
                  width={50}
                  height={50}
                  className="mb-2"
                />
                <h2 className="text-xl font-bold mb-4">{project.name}</h2>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} className="flex items-center text-blue-500">
                  <Image
                    src="/images/link.png"
                    alt="Link icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="w-full flex justify-center py-4">
        <div className="w-[1080px]">
          <hr className="w-full border-t border-gray-300 mb-4" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="flex justify-center items-center p-[8px_12px] gap-4 w-[62px] h-[40px] font-roboto font-medium text-sm leading-6">Home</a></li>
              <li><a href="/about" className="flex justify-center items-center p-[8px_12px] gap-4 w-[62px] h-[40px] font-roboto font-medium text-sm leading-6">About</a></li>
              <li><a href="/projects" className="flex justify-center items-center p-[8px_12px] gap-4 w-[62px] h-[40px] font-roboto font-medium text-sm leading-6">Projects</a></li>
              <li><a href="/uses" className="flex justify-center items-center p-[8px_12px] gap-4 w-[62px] h-[40px] font-roboto font-medium text-sm leading-6">Uses</a></li>
            </ul>
          </nav>
          <p className="text-right text-gray-400">© 2024 Michael Horne. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
