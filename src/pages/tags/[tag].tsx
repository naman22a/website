import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { getBlogs } from '@/services';
import { BlogMeta } from '@/interfaces';
import { capitalize } from '@/utils';
import { BlogCard } from '@/components';

const TagPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { tag, blogs } = props;
    const pageTitle = `${capitalize(tag)} | Naman Arora`;

    return (
        <div className="pt-20">
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <h1 className="text-4xl font-semibold mb-6">
                All Blogs related to{' '}
                <span className="text-ctp-peach">{capitalize(tag)}</span>
            </h1>
            {blogs?.map(blog => (
                <BlogCard key={blog.slug} {...blog} />
            ))}
        </div>
    );
};

interface DataProps {
    tag: string;
    blogs: BlogMeta[];
}

export const getStaticProps: GetStaticProps<DataProps> = async ({ params }) => {
    const { tag } = params as { tag: string };
    const blogs = getBlogs().filter(post => post.meta.tags.includes(tag));

    return {
        props: {
            tag,
            blogs: blogs.map(post => post.meta)
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const blogs = getBlogs();
    const tags = new Set(blogs.map(blog => blog.meta.tags).flat());
    const paths = Array.from(tags).map(tag => ({ params: { tag } }));

    return {
        paths,
        fallback: false
    };
};

export default TagPage;
