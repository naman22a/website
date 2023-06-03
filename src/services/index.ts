import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Blog } from '../interfaces';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const BLOGS_PATH = path.join(process.cwd(), 'src/blogs/');

export const getSlugs = (): string[] => {
    const files = fs.readdirSync(BLOGS_PATH, { encoding: 'utf-8' });

    return files.map((file) => file.split('.')[0]);
};

export const getBlogFromSlug = (slug: string): Blog => {
    const blogPath = path.join(BLOGS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(blogPath);
    const { content, data } = matter(source);

    return {
        content,
        meta: {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            tags: data.tags.sort(),
            date: data.date
        }
    };
};

export const getBlogs = () => {
    const blogs = getSlugs()
        .map((slug) => getBlogFromSlug(slug))
        .sort((a, b) => {
            if (
                dayjs(a.meta.date, 'DD-MM-YYYY').isBefore(
                    dayjs(b.meta.date, 'DD-MM-YYYY')
                )
            ) {
                return -1;
            }
            if (
                dayjs(a.meta.date, 'DD-MM-YYYY').isAfter(
                    dayjs(b.meta.date, 'DD-MM-YYYY')
                )
            ) {
                return 1;
            }
            return 0;
        });
    blogs.reverse();

    return blogs;
};
