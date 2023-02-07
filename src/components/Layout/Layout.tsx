import React from 'react';
import { Header } from '@/components';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="pt-32 mx-5 lg:mx-20 min-h-screen flex flex-col items-start">
                {children}
            </div>
        </>
    );
};

export default Layout;
