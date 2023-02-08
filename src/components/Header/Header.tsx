import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { images } from '@/constants';
import Image from 'next/image';

// Icons
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoIosClose } from 'react-icons/io';

const Header: React.FC = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <header
            className="flex items-center px-10 md:px-20 fixed h-20 md:h-24 w-full top-0 z-10
            bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-xl shadow bg-ctp-crust"
        >
            <Link href="/">
                <Image
                    priority
                    src={images.logo}
                    alt="Naman Arora"
                    className="h-20 w-20 object-cover"
                />
            </Link>
            <nav className="hidden md:inline-block ml-auto font-Hack">
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="border-b-transparent border-b-2 hover:border-b-ctp-pink"
                    >
                        /home
                    </Link>

                    <Link
                        href="/blogs"
                        className="border-b-transparent border-b-2 hover:border-b-ctp-pink"
                    >
                        /blogs
                    </Link>
                    {router.pathname === '/' && (
                        <>
                            <a
                                href="#projects"
                                className="border-b-transparent border-b-2 hover:border-b-ctp-pink"
                            >
                                /projects
                            </a>

                            <a
                                href="#contact"
                                className="border-b-transparent border-b-2 hover:border-b-ctp-pink"
                            >
                                /contact
                            </a>
                        </>
                    )}
                </div>
            </nav>

            <div
                className="ml-auto inline-block md:hidden cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <IoIosClose className="h-7 w-7" />
                ) : (
                    <CgMenuRightAlt className="h-7 w-7" />
                )}
            </div>

            {/* mobile menu */}
            <nav
                className={`flex flex-col absolute top-20 bg-ctp-surface0 w-full px-4 py-10 text-white items-center justify-center select-none ${
                    open ? 'left-0' : 'left-full'
                } transition-all duration-300 inline-block md:hidden`}
            >
                <Link
                    href="/"
                    className="my-5 text-lg"
                    onClick={() => setOpen(false)}
                >
                    Home
                </Link>
                <Link
                    href="/blogs"
                    className="my-5 text-lg"
                    onClick={() => setOpen(false)}
                >
                    Blogs
                </Link>
                {router.pathname === '/' && (
                    <>
                        <a
                            href="#projects"
                            className="my-5 text-lg"
                            onClick={() => setOpen(false)}
                        >
                            Projects
                        </a>

                        <a
                            href="#contact"
                            className="my-5 text-lg"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </a>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
