import React from "react";
import { Card } from "flowbite-react";

function AboutCard(props) {
  return (
    <Card>
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src={props.ImageSource}
          alt={`${props.Heading}`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
          {props.Heading}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
          {props.Languages}
          <div className="lg:h-[150px] flex md-flex-row lg:flex-col lg:items-center my-4 gap-2 justify-center">
            <img
              className="max-h-[30px] max-w-[148px] rounded"
              alt="shield 1"
              src={props.Shield1}
            />
            <img
              className="max-h-[30px] max-w-[148px] rounded"
              alt="shield 2"
              src={props.Shield2}
            />
            <img
              className="max-h-[30px] max-w-[148px] rounded sm:hidden md:block"
              alt="shield 3"
              src={props.Shield3}
            />
          </div>
        </span>
        <p className="text-center font-light">{props.Description}</p>
      </div>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900 px-[20vw]">
        <h1 className="smaller-heading text-slate-300">About</h1>
        <p className=" text-slate-500 font-light text-center lg:px-[10vw]">
          Starting from my humble days coding small indie projects I've come a
          long way. I've done remote work for a variety of groups and projects
          and collaborated with talent far above myself to reach a common goal.
          I hope I can showcase my talents now!
        </p>
        <p className="mt-10 mb-4 text-blue-300 text-center whitespace-nowrap">
          Here's a lay of my skills!
        </p>
        <div className="flex flex-col sm:flex-col lg:flex-row gap-4">
          <AboutCard
            Shield1="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
            Shield2="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
            Shield3="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            ImageSource="https://images.pexels.com/photos/10721746/pexels-photo-10721746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            Heading="Frontend"
            Languages="React, HTML, CSS Tailwind, MUI"
            Description="With humble beginning building out UI for small indie games I used to make
                        Frontend has escalated into being one of my top talents. With my current
                        work building interfaces for New Idea Machine my focus has turned into building clean,
                        responsive and most of all inclusive experiences."
          />
          <AboutCard
            Shield1="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6"
            Shield2="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
            Shield3="https://img.shields.io/badge/Krita-203759?style=for-the-badge&logo=krita&logoColor=EEF37B"
            ImageSource="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            Heading="Design"
            Languages="UX UI Figma, Adobe XD, Krita"
            Description="Art has always been one of my favorite things to do in my spare time and
                        naturally that has done wonders for my perspectives on design. For my time
                        at SAIT i've had the pleasure of working with great mentors to design both
                        mobile and desktop systems. Let me show you what I can do!"
          />
          <AboutCard
            Shield1="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
            Shield2="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
            Shield3="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
            ImageSource="https://images.pexels.com/photos/12899188/pexels-photo-12899188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            Heading="Backend"
            Languages="Node.Js, Spring Boot, Express, MongoDB"
            Description="Though this is the aspect with my least showings I can still safely say I have decent 
                        experience working with backend. From building CRUD apps with Node and Spring, to managing APIs and 
                        realtime datebase connections with services like MongoDB, MySQL and Oracle SQL i'm ready to
                        show you what I can do!"
          />
        </div>
      </section>
    </>
  );
}
