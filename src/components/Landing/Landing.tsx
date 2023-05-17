import React from 'react';
import { BackgroundAnimation, Button } from '@/components';
import { LandingData } from '@/interfaces';

interface Props extends LandingData {}

const Landing: React.FC<Props> = (props) => {
    const { bgText1, bgText2, smallText, name, description, buttonText } =
        props;

    return (
        <div className="flex flex-col lg:flex-row pt-20 lg:pt-0 lg:justify-between items-center lg:h-screen">
            <div className="w-full lg:w-1/2">
                <h2 className="absolute -z-20 text-ctp-surface0 text-5xl md:text-8xl font-bold mt-2 md:-mt-5 capitalize">
                    {bgText1}
                    <br />
                    {bgText2}
                </h2>
                <h1 className="text-2xl md:text-3xl font-bold">{smallText}</h1>
                <h1 className="text-5xl md:text-8xl font-bold mb-3 flex items-end">
                    {name}
                    <span className="h-4 w-4 bg-ctp-red inline-block rounded-full ml-1"></span>
                </h1>
                <p className="lg:w-2/3">{description}</p>
                <a href="#mySkillSet" aria-label="Read more about me">
                    <Button className="invisible lg:visible">
                        {buttonText}
                    </Button>
                </a>
            </div>

            <div className="relative lg:w-1/2 h-1/2 w-full lg:h-full overflow-hidden">
                <BackgroundAnimation />
            </div>
        </div>
    );
};

export default Landing;
