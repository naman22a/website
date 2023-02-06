import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { getBlogs } from '@/services';
import { BlogMeta, FooterData } from '@/interfaces';
import { capitalize } from '@/utils';
import { BlogCard, Footer } from '@/components';
import { client } from '@/lib';

const TagPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { tag, blogs, footerData } = props;
    const pageTitle = `${capitalize(tag)} | Naman Arora`;

    return (
        <>
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
            <Footer {...footerData} />
        </>
    );
};

interface DataProps {
    tag: string;
    blogs: BlogMeta[];
    footerData: FooterData;
}

export const getStaticProps: GetStaticProps<DataProps> = async ({ params }) => {
    const { tag } = params as { tag: string };
    const blogs = getBlogs().filter(post => post.meta.tags.includes(tag));
    const footerData = (
        await client.fetch("*[_type == 'footer']")
    )[0] as FooterData;

    return {
        props: {
            tag,
            blogs: blogs.map(post => post.meta),
            footerData
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
