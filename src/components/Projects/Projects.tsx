import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '@/interfaces';

interface Props {
    projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
    return (
        <div
            className="flex flex-col justify-center items-center"
            id="projects"
        >
            <h2 className="font-bold text-3xl mb-10 font-Hack text-ctp-red">
                &lt;
                <span className="text-ctp-text mx-1">Projects</span>
                /&gt;
            </h2>

            <div className="flex flex-col justify-center items-center">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.githubLink}
                        {...project}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
