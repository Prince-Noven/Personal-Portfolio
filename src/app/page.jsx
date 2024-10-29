// pages/index.jsx
"use client";
import Image from 'next/image';
import { useState } from 'react';
import { metadata } from './metadata';

export default function Home() {
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
          <li><a href="/" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6 text-red-500 border-b-2 border-red-500">Home</a></li>
          <li><a href="/about" className="flex justify-center items-center p-2 gap-4 h-[40px] font-roboto font-medium text-sm leading-6">About</a></li>
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
        <div className="box-border flex flex-col items-start p-0 w-[1080px] border border-gray-100 ml-auto mr-auto">
          <section className="intro flex flex-col items-start p-0 gap-6 w-[672px] max-w-[672px] h-[384px] ml-8">
            <div className="relative flex flex-col justify-center items-center p-1 bg-white/90 shadow-lg rounded-full w-[64px] h-[64px]">
              <Image
                src="/images/profile-pic.png" // Path to your profile picture
                alt="Profile Picture"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <h1 className="text-5xl font-bold">Cybersecurity Student, Worker, and Friend</h1>
            <p className="text-lg">With over 3 years of working as Tech Support in an office setting and with the greater part of a bachelors in Cybersecurity, I am well versed in IT. I have experience building and maintaining client relationships from the first cold call or email to ensuring follow up visits. I have a student mindset and I am eager to expand my technical skillset.</p>
          </section>
          <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col w-1/2"> {/* Start of the Articles column */}
  <section className="articles py-8 ml-8">
    <div className="article mt-4">
      <div className="flex items-center text-gray-500">
        <span className="mr-2">|</span>
        <h4 className="text-sm">April 29, 2024</h4>
      </div>
      <h3 className="text-xl font-bold mt-2">New Job Taken At Church Office Building</h3>
      <p className="mt-2">On April 29th, 2024 I began my work as an intern at the Church Office Building in Salt Lake City. This new job will help provide new experiences, challanges, and work into my life. I look forward to continue learning about the Cybersecurity world.</p>
      <a href="#" className="text-blue-500 mt-4 inline-block">Read Article</a>
    </div>
    <div className="article mt-8">
      <div className="flex items-center text-gray-500">
        <span className="mr-2">|</span>
        <h4 className="text-sm">September 28, 2021</h4>
      </div>
      <h3 className="text-xl font-bold mt-2">I Return Home From My Missoin</h3>
      <p className="mt-2">At the end of September, I was released successfully from my 2 year servicem mission for the Church of Jesus Christ of Latter-Day Saints. It was an opporunity that I will always remember fondly the rest of my life.</p>
      <a href="#" className="text-blue-500 mt-4 inline-block">Read Article</a>
    </div>
    <div className="article mt-8">
      <div className="flex items-center text-gray-500">
        <span className="mr-2">|</span>
        <h4 className="text-sm">June 20, 2019</h4>
      </div>
      <h3 className="text-xl font-bold mt-2">Job Taken at Affordable Tax and Accounting</h3>
      <p className="mt-2">Starting in June I got a job at Affordable Tax and Accounting. This job helped me learn people and social skills which I have continued througout my life.</p>
      <a href="#" className="text-blue-500 mt-4 inline-block">Read Article</a>
    </div>
  </section>
</div> {/* End of the Articles column */}

            <div className="flex flex-col w-1/2 space-y-8">
              <section className="subscribe py-8 ml-8 border border-gray-200 p-4 rounded-lg"> {/* Start of the Subscribe section */}
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/envelope.jpg" // Path to your envelope icon
                    alt="Envelope Icon"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <h2 className="text-2xl font-semibold">Stay up to date</h2>
                </div>
                <p>Subscribe to my newsletter and get updates on new projects, articles, and more.</p>
                <form className="mt-4">
                  <input type="email" placeholder="Email address" className="border p-2 mr-2" />
                  <button type="submit" className="bg-blue-500 text-white p-2">Join</button>
                </form>
              </section>
              <section className="work py-8 ml-8 border border-gray-200 p-4 rounded-lg"> {/* Start of the Work section */}
  <div className="flex items-center mb-4">
    <Image
      src="/images/briefcase.png" // Path to your briefcase icon
      alt="Briefcase Icon"
      width={24}
      height={24}
      className="mr-2"
    />
    <h2 className="text-2xl font-semibold">Work</h2>
  </div>
  <ul className="mt-4 space-y-4">
    <p>Here are some of the companies I have worked for:</p>
    <li className="flex items-start">
      <Image
        src="/images/ldschurch.png" // Path to your LDS Church icon
        alt="LDS Church Icon"
        width={24}
        height={24}
        className="mr-2"
      />
      <div>
        <strong>Church of Jesus Christ</strong>
        <br />
        ICS Tech Support 2024 - Present
      </div>
    </li>
    <li className="flex items-start">
      <Image
        src="/images/shoppingcart.png" // Path to your Shopping Cart icon
        alt="Shopping Cart Icon"
        width={24}
        height={24}
        className="mr-2"
      />
      <div>
        <strong>Smiths Food and Drug Garden Center</strong>
        <br />
        Employee 2023 - 2023
      </div>
    </li>
    <li className="flex items-start">
      <Image
        src="/images/dollar.png" // Path to your Dollar icon
        alt="Dollar Cart Icon"
        width={24}
        height={24}
        className="mr-2"
      />
      <div>
        <strong>Affordable Tax and Accounting</strong>
        <br />
        Executive Secretary 2018 - 2021
      </div>
    </li>
    <li className="flex items-start">
      <Image
        src="/images/printer.png" // Path to your Printer icon
        alt="Printer Icon"
        width={24}
        height={24}
        className="mr-2"
      />
      <div>
        <strong>Gordons Copy and Print</strong>
        <br />
        Employee 2016 - 2018
      </div>
    </li>
  </ul>
</section> {/* End of the Work section */}
              <section className="skills py-8 ml-8 border border-gray-200 p-4 rounded-lg"> {/* Start of the Skills section */}
  <div className="flex items-center mb-4">
    <Image
      src="/images/bolt.png" // Path to your bolt icon
      alt="Bolt Icon"
      width={24}
      height={24}
      className="mr-2"
    />
    <h2 className="text-2xl font-semibold">Skills</h2>
  </div>
  <ul className="mt-4 space-y-4">
    <li className="flex flex-col items-start">
      <div className="flex items-center">
        <Image
          src="/images/html.png" // Path to your HTML icon
          alt="HTML Icon"
          width={24}
          height={24}
          className="mr-2"
        />
        <strong>HTML</strong>
      </div>
      <Image
        src="/images/loading.png" // Path to your loading bar icon
        alt="Loading Bar"
        width={100}
        height={10}
        className="mt-2"
      />
    </li>
    <li className="flex flex-col items-start">
      <div className="flex items-center">
        <Image
          src="/images/python.png" // Path to your Python icon
          alt="Python Icon"
          width={24}
          height={24}
          className="mr-2"
        />
        <strong>Python</strong>
      </div>
      <Image
        src="/images/loading.png" // Path to your loading bar icon
        alt="Loading Bar"
        width={100}
        height={10}
        className="mt-2"
      />
    </li>
    <li className="flex flex-col items-start">
      <div className="flex items-center">
        <Image
          src="/images/javascript.png" // Path to your JavaScript icon
          alt="JavaScript Icon"
          width={24}
          height={24}
          className="mr-2"
        />
        <strong>JavaScript</strong>
      </div>
      <Image
        src="/images/loading.png" // Path to your loading bar icon
        alt="Loading Bar"
        width={100}
        height={10}
        className="mt-2"
      />
    </li>
  </ul>
</section> {/* End of the Skills section */}
            </div> {/* End of the right column */}
          </div> {/* End of the flex row */}
        </div> {/* End of the box */}
      </main>
      <footer className="w-full flex justify-center py-4">
        <div className="w-[1080px]">
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
