import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { getBlogFromSlug, getSlugs } from '@/api';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { BlogMeta } from '@/interfaces';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Tag } from '@/components';
dayjs.extend(customParseFormat);

const BlogDetails = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { meta, source } = props;
    const { title, excerpt, tags, date } = meta;
    const pageTitle = `${title} | Naman Arora`;

    const router = useRouter();
    const slug = router.query.slug as string;

    return (
        <div className="pt-20">
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <h1 className="text-5xl font-semibold mb-4 pb-3 border-b-4 border-b-ctp-mauve inline-block">
                {title}
            </h1>
            <p className="mb-2">
                Pushlished on{' '}
                <span className="font-semibold">
                    {dayjs(date, 'DD-MM-YYYY').format('DD MMM YYYY')}
                </span>
            </p>
            <div className="mt-4 mb-8">
                {tags.map(tag => (
                    <Tag key={tag} tag={tag} />
                ))}
            </div>
            <div className="prose">
                <MDXRemote {...source} components={{ Image }} />
            </div>
        </div>
    );
};

interface DataProps {
    source: MDXRemoteSerializeResult<
        Record<string, unknown>,
        Record<string, string>
    >;
    meta: BlogMeta;
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
    return {
        props: {
            source: mdxSource,
            meta
        }
    };
};

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getSlugs().map(slug => ({ params: { slug } }));
    return { paths, fallback: false };
};

export default BlogDetails;
