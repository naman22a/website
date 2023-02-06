import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getBlogs } from '@/services';
import { BlogMeta } from '@/interfaces';
import Head from 'next/head';
import { BlogCard, Tag } from '@/components';

const Blogs = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="pt-20">
            <Head>
                <title>Blogs | Naman Arora</title>
            </Head>
            <h1 className="text-4xl font-semibold mb-6">Blogs</h1>
            <div>
                {blogs?.map(blog => (
                    <BlogCard key={blog.slug} {...blog} />
                ))}
            </div>
        </div>
    );
};

interface DataProps {
    blogs: BlogMeta[];
}

export const getStaticProps: GetStaticProps<DataProps> = async () => {
    const blogs = getBlogs().map(blog => blog.meta);

    return {
        props: { blogs }
    };
};

export default Blogs;
