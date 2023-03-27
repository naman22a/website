import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { images } from '@/constants';
import Image from 'next/image';
const Menu = dynamic(() => import('./Menu'));

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
            <Menu open={open} setOpen={setOpen} />
        </header>
    );
};

export default Header;
