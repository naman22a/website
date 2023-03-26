import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

const Button: React.FC<Props> = ({ children, className, ...props }) => {
    return (
        <button
            className={
                'mt-7 border-b-2 border-b-ctp-red pb-2 uppercase tracking-wider font-semibold transition-all duration-400 hover:bg-ctp-red pr-3 pt-1 hover:pl-3 group text-base' +
                ` ${className}`
            }
            {...props}
        >
            <span className="group-hover:-translate-y-3">{children}</span>
        </button>
    );
};

export default Button;
