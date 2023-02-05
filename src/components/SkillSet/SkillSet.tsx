import React from 'react';
import { Button } from '@/components';
import { motion } from 'framer-motion';
import { Skill, SkillSetData } from '@/interfaces';
import Skillbar from 'react-skillbars';

const colors = {
    bar: '#f38ba8',
    title: {
        text: '#fff',
        background: '#313244'
    }
};

interface Props extends SkillSetData {
    skills: Skill[];
}

const SkillSet: React.FC<Props> = props => {
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
                <motion.div
                    className="lg:w-1/2"
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
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
                </motion.div>
                <motion.div
                    className="mt-7 lg:mt-0 lg:w-1/2"
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>{description}</p>
                </motion.div>
            </div>
            <div className="mb-20 capitalize font-Hack">
                <Skillbar
                    skills={skills}
                    colors={colors}
                    animationDuration={3000}
                    animationDelay={0}
                />
            </div>
        </>
    );
};

export default SkillSet;
