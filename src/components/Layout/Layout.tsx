import React from 'react';
import { Header } from '@/components';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="pt-24 mx-5 lg:mx-20">{children}</div>
        </>
    );
};

export default Layout;
