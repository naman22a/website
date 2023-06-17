import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getBlogFromSlug, getSlugs } from '@/services';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { BlogMeta, FooterData } from '@/interfaces';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/base16/dracula.css';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Footer, Tag } from '@/components';
import { client } from '@/lib';
dayjs.extend(customParseFormat);

const BlogDetails = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { meta, source, footerData } = props;
    const { title, tags, date } = meta;
    const pageTitle = `${title} | Naman Arora`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={meta.excerpt} />
                <meta name="keywords" content={tags.join(', ')} />
            </Head>
            <h1 className="md:text-5xl text-3xl md:font-semibold font-bold mb-4 md:pb-3 md:border-b-4 md:border-b-ctp-mauve inline-block">
                {title}
            </h1>
            <p className="mb-2">
                Pushlished on{' '}
                <span className="font-semibold">
                    {dayjs(date, 'DD-MM-YYYY').format('DD MMM YYYY')}
                </span>
            </p>
            <div className="mt-4 mb-8">
                {tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                ))}
            </div>
            <div className="prose w-full">
                <MDXRemote {...source} components={{ Image }} />
            </div>
            <Footer {...footerData} />
        </>
    );
};

interface DataProps {
    source: MDXRemoteSerializeResult<
        Record<string, unknown>,
        Record<string, string>
    >;
    meta: BlogMeta;
    footerData: FooterData;
}

export const getStaticProps: GetStaticProps<DataProps> = async ({ params }) => {
    const { slug } = params as { slug: string };
    const { content, meta } = getBlogFromSlug(slug);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                rehypeHighlight
            ]
        }
    });
    const footerData = (
        await client.fetch("*[_type == 'footer']")
    )[0] as FooterData;

    return {
        props: {
            source: mdxSource,
            meta,
            footerData
        }
    };
};

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getSlugs().map((slug) => ({ params: { slug } }));
    return { paths, fallback: false };
};

export default BlogDetails;
