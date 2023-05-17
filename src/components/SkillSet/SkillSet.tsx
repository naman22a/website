import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { Skill, SkillSetData } from '@/interfaces';
import { urlFor } from '@/lib';

interface Props extends SkillSetData {
    skills: Skill[];
}

const SkillSet: React.FC<Props> = (props) => {
    const {
        smallText,
        largeText1,
        largeText2,
        buttonText,
        description,
        skills
    } = props;

    return (
        <>
            <div
                className="mb-20 flex flex-col lg:flex-row justify-between items-center mt-20 lg:mt-0"
                id="mySkillSet"
            >
                <div className="lg:w-1/2">
                    <h2 className="uppercase text-ctp-red font-bold mb-6 tracking-wider">
                        {smallText}
                    </h2>
                    <h3 className="flex flex-row md:flex-col lg:flex-col font-bold capitalize text-3xl">
                        <span>{largeText1}</span>
                        <span className="block mr-3">&</span>
                        <span>{largeText2}</span>
                    </h3>
                    <a href="#projects">
                        <Button>{buttonText}</Button>
                    </a>
                </div>
                <div className="mt-7 lg:mt-0 lg:w-1/2">
                    <p>{description}</p>
                </div>
            </div>
            <div className="mb-20 w-full flex flex-wrap justify-evenly items-center md:justify-start md:items-start">
                {skills.map((skill) => (
                    <div
                        key={skill._id}
                        className="flex flex-col text-center m-4 transition-all duration-300 ease-in-out"
                    >
                        <div
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-ctp-crust shadow-lg grid place-items-center hover:-translate-y-2 transition-all duration-200"
                            style={{ backgroundColor: skill.bgColor }}
                        >
                            <Image
                                src={urlFor(skill.icon).url()}
                                height={45}
                                width={45}
                                alt={skill.name}
                                className="h-1/2 w-1/2 object-cover"
                            />
                        </div>
                        <p className="text-ctp-text mt-3">{skill.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SkillSet;
