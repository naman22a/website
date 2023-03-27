import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ open, setOpen }) => {
    const router = useRouter();

    return (
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
    );
};

export default Menu;
