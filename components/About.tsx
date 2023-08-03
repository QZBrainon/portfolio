import React from "react";
import Image from "next/image";


export default function About() {
    return (
        <section id="projects" className="dark-bg">
            
            <div className="flex">
                <div className="flex-full">
                    <AboutCard title={'Delivery App'} description={'A fullstack beer delivery app'} html_url={'https://github.com/QZBrainon/deliveryApp'} stacks={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"]}/>
                    <AboutCard title={'Soccer Team Manager'} description={'A fullstack game tracker for soccer teams, matches, scores and other data'} html_url={'https://github.com/QZBrainon/Trybe-Futebol-Clube'} stacks={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"]}/>
                    <AboutCard title={'Recipe App'} description={'A food and drink app that consumes different API services'} html_url={'https://github.com/QZBrainon/RecipeApp'} stacks={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"]}/>
                    <AboutCard title={'Blogs API'} description={'A fully implemented express API for a blog application'} html_url={'https://github.com/QZBrainon/BlogsAPI'} stacks={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"]}/>
                    <AboutCard title={'Talker Manager'} description={'A Node/Express API for scheduling speakers on an given event'} html_url={'https://github.com/QZBrainon/TalkerManager'} stacks={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"]}/>
                    <AboutCard title={'Sales Backend'} description={'A fully implemented NestJS API application for managing users and registering sales'} html_url={'https://github.com/QZBrainon/nestjs-api'} stacks={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" ]}/>
                    <AboutCard title={'Snake CLI'} description={'A snake game made with Python to be played directly in the CLI'} html_url={'https://github.com/QZBrainon/python-snake-cli'} stacks={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"]}/>
                    <AboutCard title={'Password Generator'} description={'A Python strong password generator'} html_url={'https://github.com/QZBrainon/random-password-generator'} stacks={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"]}/>
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">About</h5>
                    <h1 className="white">Me and my work</h1>
                    <p className="gray">Born and raised in Rio de Janeiro, Brazil, with a business background.</p>
                    <p className="gray">Throughout my professional life, I have learned many lessons, but the one that struck me the most was: </p>
                    <h3 className="white">Real value comes from creating solutions that work! My goal is to create real value to businesses around the world through technology.</h3>
                    <p className="gray">And to acomplish this, I have learned and worked with several different technologies, such as Javascript, Typescript, React, Express and Python among others</p>
                    <p className="gray">These are a few of my projects that I developed along my journey to become a web developer.</p>
                    <p className="gray">And there are many more to come!</p>
                    <p className="gray">If you are looking for an adaptable, willing to learn, business focused member to your team I am sure I can be a valuable addition.</p>
                    <p className="gray">Interested in working together? Feel free to contact me.</p>
                </div>
            </div>
        </section>
    )
}

type Props = {
    title: string,
    description: string,
    html_url: string,
    stacks: string[]
}

function AboutCard ({title, description, html_url, stacks} : Props) {
    return(
        <div className="light-bg about-card" >
            <div className="flex justify-space" style={{alignItems:'center'}}>
                <h3 className="green">{title}</h3>
                <div className="flex" style={{gap:'8px'}}>
                    {stacks.map((stack)=>(<Image key={stack} height={20} width={20} src={stack} alt="stack logo"/>))}
                </div>
            </div>
            <p className="white">{description}</p>
            <a className="gray align-right" target="_blank" rel="noreferrer" href={html_url}>View Code</a>
        </div>
    )
}
