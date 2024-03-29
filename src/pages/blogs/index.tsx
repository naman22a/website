import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { getBlogs } from '@/services';
import { BlogMeta, FooterData } from '@/interfaces';
import { BlogCard, Footer, Pagination } from '@/components';
import { client } from '@/lib';
import { useState } from 'react';

const Blogs = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { blogs, footerData } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(4);

    const lastBlogIndex = currentPage * blogsPerPage;
    const firstBlogIndex = lastBlogIndex - blogsPerPage;
    const currentBlogs = blogs.slice(firstBlogIndex, lastBlogIndex);

    return (
        <>
            <Head>
                <title>Blogs | Naman Arora</title>
            </Head>
            <h1 className="text-4xl font-semibold">Blogs</h1>
            <div>
                {currentBlogs?.map((blog) => (
                    <BlogCard key={blog.slug} {...blog} />
                ))}
            </div>
            <Pagination
                totalBlogs={blogs.length}
                blogsPerPage={blogsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Footer {...footerData} />
        </>
    );
};

interface DataProps {
    blogs: BlogMeta[];
    footerData: FooterData;
}

export const getStaticProps: GetStaticProps<DataProps> = async () => {
    const blogs = getBlogs().map((blog) => blog.meta);
    const footerData = (
        await client.fetch("*[_type == 'footer']")
    )[0] as FooterData;

    return {
        props: { blogs, footerData }
    };
};

export default Blogs;
