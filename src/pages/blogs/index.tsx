import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { getBlogs } from '@/services';
import { BlogMeta, FooterData } from '@/interfaces';
import { BlogCard, Footer } from '@/components';
import { client } from '@/lib';

const Blogs = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { blogs, footerData } = props;

    return (
        <>
            <Head>
                <title>Blogs | Naman Arora</title>
            </Head>
            <h1 className="text-4xl font-semibold mb-6">Blogs</h1>
            <div>
                {blogs?.map(blog => (
                    <BlogCard key={blog.slug} {...blog} />
                ))}
            </div>
            <Footer {...footerData} />
        </>
    );
};

interface DataProps {
    blogs: BlogMeta[];
    footerData: FooterData;
}

export const getStaticProps: GetStaticProps<DataProps> = async () => {
    const blogs = getBlogs().map(blog => blog.meta);
    const footerData = (
        await client.fetch("*[_type == 'footer']")
    )[0] as FooterData;

    return {
        props: { blogs, footerData }
    };
};

export default Blogs;
