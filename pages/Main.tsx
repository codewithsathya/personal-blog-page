import SocialIcon from '@/components/social-icons'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import siteMetadata from '@/data/siteMetadata'

const Main = () => {
  return (
    <div id="home" className="h-[70vh] text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-100">
            Lets build something together
          </p>
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I&apos;m <span className="text-primary-500">Sathiya</span>
          </h1>
          <h2 className="text-gray-700 dark:text-gray-300">A Full-Stack Web Developer</h2>
          <p className="m-auto max-w-[70%] py-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
            I&apos;m a full-stack developer working in Publicis Sapient, India. I love
            programming, reading tech blogs and learning new technologies.
          </p>
          {/* <div className="m-auto flex max-w-[330px] items-center justify-between py-4">
            <a href="https://www.linkedin.com/in/myselfsathya/" target="_blank" rel="noreferrer">
              <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                <FaLinkedinIn size={25} />
              </div>
            </a>
            <a href="https://github.com/codewithsathya" target="_blank" rel="noreferrer">
              <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                <FaGithub size={25} />
              </div>
            </a>
            <Link href="/#contact">
              <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                <AiOutlineMail size={25} />
              </div>
            </Link>
            <a href="https://resume.codewithsathya.com" target="_blank" rel="noreferrer">
              <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                <BsFillPersonLinesFill size={25} />
              </div>
            </a>
          </div> */}
          <div className="mt-2 flex flex-col items-center">
            <div className="mb-3 flex space-x-8">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={8} />
              <SocialIcon kind="github" href={siteMetadata.github} size={8} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={8} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={8} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={8} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
