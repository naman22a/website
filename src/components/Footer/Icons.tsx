import type { Component } from 'solid-js';
import { BsGithub, BsLinkedin } from 'solid-icons/bs';
import { FaBrandsInstagram, FaBrandsTwitter } from 'solid-icons/fa';

interface Props {
    smallText: string;
    largeText: string;
    description1: string;
    description2: string;
    email: string;

    githubLink: string;
    instagramLink: string;
    twitterLink: string;
    linkedinLink: string;
}

const Icons: Component<Props> = ({
    linkedinLink,
    githubLink,
    twitterLink,
    instagramLink
}) => {
    return (
        <span
            class="inline-flex
            gap-4
            sm:ml-auto
            sm:mt-0
            mt-4
            justify-center
            sm:justify-start
            items-center"
        >
            <a
                class="text-gray-500
                cursor-pointer
                hover:text-ctp-red
                group"
                href={linkedinLink}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="LinkedIn link"
            >
                <BsLinkedin class="h-7 w-7" />
            </a>
            <a
                class="text-gray-500
                cursor-pointer
                hover:text-ctp-red
                group"
                href={githubLink}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Github link"
            >
                <BsGithub class="h-7 w-7" />
            </a>
            <a
                class="text-gray-500
                cursor-pointer
                hover:text-ctp-red
                group"
                href={twitterLink}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Twitter link"
            >
                <FaBrandsTwitter class="h-7 w-7" />
            </a>
            <a
                class="text-gray-500
                cursor-pointer
                hover:text-ctp-red
                group"
                href={instagramLink}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram link"
            >
                <FaBrandsInstagram class="h-7 w-7" />
            </a>
        </span>
    );
};

export default Icons;
