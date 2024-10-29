// src/uses/page.jsx

"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Uses() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  const tools = [
    {
      category: 'Development Tools',
      items: [
        { name: 'Visual Studio Code', description: 'A powerful code editor redefined and optimized for building and debugging modern web and cloud applications.' },
        { name: 'GitHub', description: 'A platform for version control and collaboration, allowing multiple people to work on projects at the same time.' },
        { name: 'Docker', description: 'A tool designed to make it easier to create, deploy, and run applications by using containers.' },
        { name: 'Postman', description: 'An API platform for building and using APIs, simplifying each step of the API lifecycle.' },
        { name: 'Jira', description: 'A tool for agile project management, bug tracking, and issue tracking.' }
      ]
    },
    {
      category: 'Design Tools',
      items: [
        { name: 'Figma', description: 'A collaborative interface design tool that allows multiple people to work on the same design file in real-time.' },
        { name: 'Adobe XD', description: 'A vector-based user experience design tool for web apps and mobile apps.' },
        { name: 'Sketch', description: 'A digital design toolkit for macOS, used primarily for UI and UX design of websites and mobile apps.' },
        { name: 'InVision', description: 'A digital product design platform used to create interactive prototypes and manage design projects.' },
        { name: 'Canva', description: 'A graphic design platform used to create social media graphics, presentations, posters, and other visual content.' }
      ]
    },
    {
      category: 'Productivity Tools',
      items: [
        { name: 'Notion', description: 'An all-in-one workspace for note-taking, project management, and task management.' },
        { name: 'Trello', description: 'A web-based list-making application used for project management and task management.' },
        { name: 'Slack', description: 'A messaging app for teams that brings all your communication together in one place.' },
        { name: 'Google Workspace', description: 'A collection of cloud computing, productivity, and collaboration tools developed by Google.' },
        { name: 'Microsoft Teams', description: 'A collaboration app that helps your team stay organized and have conversations all in one place.' }
      ]
    },
    {
      category: 'Other Tools',
      items: [
        { name: 'Zoom', description: 'A video conferencing tool that allows you to virtually interact with co-workers when in-person meetings aren’t possible.' },
        { name: 'Miro', description: 'An online collaborative whiteboard platform that enables distributed teams to work effectively together.' },
        { name: 'Asana', description: 'A web and mobile application designed to help teams organize, track, and manage their work.' },
        { name: 'Dropbox', description: 'A file hosting service that offers cloud storage, file synchronization, personal cloud, and client software.' },
        { name: 'Evernote', description: 'An app designed for note-taking, organizing, task management, and archiving.' }
      ]
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
              <li><a href="/projects" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6">Projects</a></li>
              <li><a href="/uses" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6 text-red-500 border-b-2 border-red-500">Uses</a></li>
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
          <h1 className="text-4xl font-bold mb-4 text-left">Tools and Software I Recommend</h1>
          <p className="text-left mb-8 max-w-2xl">
            Here is a list of the tools and software I use regularly to stay productive and efficient in my work. Each tool serves a specific purpose and helps me to manage my projects, communicate with my team, and design and develop websites and applications.
          </p>
          {tools.map((tool, index) => (
            <div key={index} className="mb-20 flex">
              <h2 className="text-xl font-bold mb-4 w-1/4">{tool.category}</h2>
              <div className="w-3/4 pl-20">
                {tool.items.map((item, idx) => (
                  <div key={idx} className="mb-8">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
