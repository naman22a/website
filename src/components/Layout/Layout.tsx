import React, { PropsWithChildren } from 'react';
import { Header } from '@/components';
import { Toaster } from 'react-hot-toast';

interface Props extends PropsWithChildren {}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="pt-32 mx-5 lg:mx-20 min-h-screen flex flex-col items-start">
                {children}
            </div>
            <Toaster
                toastOptions={{
                    style: {
                        backgroundColor: '#1e1e2e',
                        color: '#cdd6f4'
                    }
                }}
            />
        </>
    );
};

export default Layout;
