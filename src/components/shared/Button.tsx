import type { Component, JSX } from 'solid-js';
import { twMerge } from 'tailwind-merge';

interface Props {
    children: JSX.Element;
    className?: string;
}

const Button: Component<Props> = ({ children, className }) => {
    return (
        <button
            class={twMerge(
                'mt-7 border-b-2 border-b-ctp-red pb-2 uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-ctp-red pr-3 pt-1 hover:pl-3 group text-base',
                className
            )}
        >
            <span class="group-hover:-translate-y-3">{children}</span>
        </button>
    );
};

export default Button;
