import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../constants';

const NotFound: NextPage = () => {
    return (

        <div className="flex flex-col-reverse lg:flex-row items-center justify-start lg:justify-between w-full min-h-screen absolute top-0 left-0 px-5 md:px-0 pt-24 lg:pl-20">
            <Head>
                <title>404 Not found | Naman Arora</title>
            </Head>
            <div className="lg:w-1/2 lg:pb-0 pb-10">
                <h1 className="text-5xl text-ctp-peach font-semibold mb-3">
                    Opps!
                </h1>
                <h2 className="text-3xl text-ctp-green font-semibold mb-7">
                    We couldn't find that page.
                </h2>
                <h4 className="text-lg mb-6">
                    Maybe you can find what you need here ?
                </h4>
                <div>
                    <Link href="/">
                        <span className="py-2 px-5 rounded-full bg-ctp-surface0 cursor-pointer hover:bg-ctp-blue transition-all duration-150 mr-5">
                            Home
                        </span>
                    </Link>
                    <Link href="/blogs">
                        <span className="py-2 px-5 rounded-full bg-ctp-surface0 cursor-pointer hover:bg-ctp-blue transition-all duration-150 mr-5">
                            Blogs
                        </span>
                    </Link>
                </div>
            </div>

            <div className="lg:w-1/2 pb-5 lg:pb-0">
                <Image src={images.notFound} alt="404" />
            </div>
        </div>
    );
};

export default NotFound;
