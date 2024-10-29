// pages/about/page.jsx
"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <div className={`flex flex-col items-center min-h-screen ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <header className={`w-full flex items-center bg-${isDarkTheme ? 'gray-900' : 'white'} py-4`}>
        <div className="flex-grow flex justify-center">
          <nav className="flex items-center p-2 border border-gray-200 shadow-lg rounded-full">
            <ul className="flex space-x-4">
              <li><a href="/" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6">Home</a></li>
              <li><a href="/about" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6 text-red-500 border-b-2 border-red-500">About</a></li>
              <li><a href="/projects" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6">Projects</a></li>
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
        <section className="w-full max-w-4xl mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">I am Michael. I live in Bountiful, where I help develop the future.</h1>
            <p className="mb-4">I was born and raised in Bountiful Utah. I am an energetic, quick witted and fast talking induvial who loves to spend time with his friends and family. I have many hobbies and passions which I love to invest my time in.</p>
            <p className="mb-4">Since a young age I have always had a fancy for computer work and writing. These endeavors have followed me into my adult years as I strive to better myself each day in the technological field. These wonderful opportunities have helped me grow proficient in technology and give me experience in such fields. </p>
            <p className="mb-4">Using my writing skills, I can communicate effectively with employers and users. I always maintain a professional atmosphere in my work and writing. You can rest assured that when I use technology and write that I do so using the utmost discretion and descriptors. </p>
            <p className="mb-4">Using these talents in my life I have been grateful to work for many wonderful employers and teachers. I hope to continue to expand my horizons and build a repertoire worthy of an IT professional. </p>
          </div>
          <div className="md:w-1/2 p-4 pl-24 flex flex-col items-start">
            <Image
              src="/images/selfie.jpg"
              alt="Michael's picture"
              width={350}
              height={350}
              className="mb-4"
            />
            <div className="flex flex-col items-start space-y-4 mb-8">
              <a href="https://x.com/" className="flex items-center text-blue-500">
                <Image
                  src="/images/x.png"
                  alt="X icon"
                  width={15}
                  height={15}
                  className="mr-2"
                />
                Follow me on X
              </a>
              <a href="https://github.com/Prince-Noven" className="flex items-center text-blue-500">
                <Image
                  src="/images/github.png"
                  alt="GitHub icon"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Follow me on GitHub
              </a>
              <a href="https://www.linkedin.com/in/michael-y-horne/" className="flex items-center text-blue-500">
                <Image
                  src="/images/linkd.png"
                  alt="LinkedIn icon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Follow me on LinkedIn
              </a>
            </div>
            <hr className="w-full border-t border-gray-300 mb-4" />
            <div className="flex items-center mt-4">
              <Image
                src="/images/envelope.jpg"
                alt="Email icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <p>michael.y.horne@gmail.com</p>
            </div>
          </div>
        </section>
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
