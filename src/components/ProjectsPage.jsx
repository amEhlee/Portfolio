import React from "react";
import { Carousel, Card, Button } from "flowbite-react";

// import images of projects
import PortfolioPage from "../assets/images/PortfolioPage.jpg";
import CapstonePeralta from "../assets/images/CapstonePeralta.jpg";
import UnityPlatformer from "../assets/images/UnityPlatformer.jpg";

export function ProjectCard(props) {
  return (
    <div className="px-20 py-10">
      <Card imgAlt={props.imageAlt} imgSrc={props.imageSource}>
        <div className="flex flex-col items-center justify-center">
          <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            {props.description}
          </p>

          <Button
            gradientDuoTone={props.gradientColor}
            outline={true}
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="duration-500 max-w-fit mt-4 hover:text-white"
          >
            {props.linktype}
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primaryBgDark">
        <h1 className="smaller-heading text-slate-300">Projects</h1>
        <p className="text-slate-500 font-light text-center">
          Lay of projects i've done using a variety of technologies and
          resources
        </p>
        <Carousel slide={false} className="min-w-[400px] sm:min-w-[400px] md:min-w-[550px]">
          <ProjectCard
            imageSource={CapstonePeralta}
            imageAlt="Capstone Peralta Image"
            title="Capstone Peralta"
            description="E-commerce app made for my final year of SAIT for our first client. Fill Carts, place Orders all built using Spring and React"
            linktype="Github"
            gradientColor="purpleToBlue"
            githubLink="https://github.com/amEhlee/Capstone-Peralta"
          />
          <ProjectCard
            imageSource={PortfolioPage}
            imageAlt="Card Portfolio Image"
            title="Elie Kabengele Portfolio"
            description="My portfolio page made to accompany my resume. Built using React and Tailwind CSS for styling."
            linktype="Github"
            gradientColor="purpleToBlue"
            githubLink="https://github.com/amEhlee/amehlee-portfolio"
          />
          <ProjectCard
            imageSource={UnityPlatformer}
            imageAlt="Unity Platformer Image"
            title="Unity Platformer Using C#"
            description="Blog post detailing how to build a platformer in C# using Unity. The player will be able to run, jump and interact with the world"
            linktype="Notion Blog"
            gradientColor="pinkToOrange"
            githubLink="https://lydian-tomato-da3.notion.site/Introduction-To-Unity-ac57c9a1918746e6ae0b10c93e040b32"
          />
        </Carousel>
      </section>
      {/* <img className="w-full" src={wavelow} alt="wave svg"></img> */}
    </>
  );
}
