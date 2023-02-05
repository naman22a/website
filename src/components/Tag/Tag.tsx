import Link from 'next/link';
import React from 'react';
import { capitalize } from '@/utils';

interface Props {
    tag: string;
}

const Tag: React.FC<Props> = ({ tag }) => {
    return (
        <Link href={`/tags/${tag}`}>
            <span className="py-2 px-5 rounded-full bg-ctp-surface0 cursor-pointer hover:bg-ctp-blue transition-all duration-150 mr-5">
                {capitalize(tag)}
            </span>
        </Link>
    );
};

export default Tag;
