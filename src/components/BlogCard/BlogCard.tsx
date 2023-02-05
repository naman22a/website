import Link from 'next/link';
import React from 'react';
import { BlogMeta } from '@/interfaces';
import { Tag } from '@/components';

interface Props extends BlogMeta {}

const BlogCard: React.FC<Props> = blog => {
    return (
        <div key={blog.slug} className="font-Hack my-6">
            <Link href={`blogs/${blog.slug}`}>
                <h3 className="text-xl mb-2 flex items-center">
                    <span className="h-3 w-3 rounded-full inline-block bg-ctp-text mr-2"></span>
                    <span className="underline">{blog.title}</span>
                </h3>
            </Link>
            <p className="text-sm ml-3">{blog.excerpt}</p>
            <div className="mt-3 ml-3">
                {blog.tags.map((tag, index) => (
                    <Tag key={tag} tag={tag} />
                ))}
            </div>
        </div>
    );
};

export default BlogCard;
