import React from "react";
import { Card, Button } from "flowbite-react";
import PortfolioImage from "../assets/portfolioImage.jpg";

export function ProjectCard(props) {
  return (
    <div className="px-20 py-5">
      <Card imgAlt={props.imageAlt} imgSrc={props.imageSource}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <Button
          gradientDuoTone={props.gradientColor}
          href={props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.linktype}
        </Button>
      </Card>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <section className="bg-primaryBgDark">
      <h1 className="text-slate-300">Experience</h1>
      <div>
        <ProjectCard
          imageSource={PortfolioImage}
          imageAlt="Card Portfolio Image"
          title="Elie Kabengele Portfolio"
          description="My portfolio page made to accompany my resume. Built using React and Tailwind CSS for styling."
          linktype="Github"
          gradientColor="purpleToBlue"
          githubLink="https://github.com/amEhlee/amehlee-portfolio"
        />
        <ProjectCard
          imageSource={PortfolioImage}
          imageAlt="Capstone Peralta Image"
          title="Capstone Peralta"
          description="E-commerce app made for my final year of SAIT for our first client. "
          linktype="Github"
          gradientColor="purpleToBlue"
          githubLink="https://github.com/amEhlee/Capstone-Peralta"
        />
        <ProjectCard
          imageSource={PortfolioImage}
          imageAlt="Unity Platformer Image"
          title="Unity Platformer Using C#"
          description="Blog post detailing how to build a platformer in c# using Unity. The player will be able to run, jump and interact with the world"
          linktype="Notion Blog"
          gradientColor="pinkToOrange"
          githubLink="https://lydian-tomato-da3.notion.site/Introduction-To-Unity-ac57c9a1918746e6ae0b10c93e040b32"
        />
      </div>
    </section>
  );
}
