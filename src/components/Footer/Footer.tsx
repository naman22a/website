import React from 'react';
import { FooterData } from '@/interfaces';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/constants';
import { BsGithub } from 'react-icons/bs';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

interface Props extends FooterData {}

const Footer: React.FC<Props> = (props) => {
    const { name, twitterUsername, githubLink, twitterLink, instagramLink } =
        props;
    return (
        <footer className="text-gray-600 body-font mt-auto w-full">
            <div className="container py-8 flex items-center sm:flex-row flex-col">
                <Link href="/">
                    <Image
                        src={images.logo}
                        alt="Naman Arora"
                        className="h-16 w-16 object-cover"
                    />
                </Link>
                <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-Hack">
                    © {new Date().getUTCFullYear()} {name}{' '}
                    <span className="hidden md:inline-block">—</span>
                    <a
                        href="https://twitter.com/namanarora1022"
                        className="ml-1 hover:text-ctp-red font-semibold hidden md:inline-block"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {twitterUsername}
                    </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
                    <a
                        className="ml-3 text-gray-500 cursor-pointer hover:text-ctp-red group"
                        href={githubLink}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Github link"
                    >
                        <BsGithub className="h-7 w-7" />
                    </a>
                    <a
                        className="ml-3 text-gray-500 cursor-pointer hover:text-ctp-red group"
                        href={twitterLink}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Twitter link"
                    >
                        <FaTwitter className="h-7 w-7" />
                    </a>
                    <a
                        className="ml-3 text-gray-500 cursor-pointer hover:text-ctp-red group"
                        href={instagramLink}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Instagram link"
                    >
                        <FaInstagram className="h-7 w-7" />
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
