import Link from 'next/link';
import React from 'react';
import { BlogMeta } from '@/interfaces';
import { Tag } from '@/components';
import { motion } from 'framer-motion';

interface Props extends BlogMeta {}

const BlogCard: React.FC<Props> = blog => {
    return (
        <motion.div
            key={blog.slug}
            className="font-Hack my-6"
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Link href={`/blogs/${blog.slug}`}>
                <h2 className="text-xl mb-2 flex items-center">
                    <span className="h-3 w-3 rounded-full inline-block bg-ctp-text mr-2"></span>
                    <span className="underline">{blog.title}</span>
                </h2>
            </Link>
            <p className="text-sm ml-3">{blog.excerpt}</p>
            <div className="mt-3 ml-3">
                {blog.tags.map((tag, index) => (
                    <Tag key={tag} tag={tag} />
                ))}
            </div>
        </motion.div>
    );
};

export default BlogCard;
