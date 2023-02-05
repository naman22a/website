import React from 'react';
import { Button } from '@/components';
import { motion } from 'framer-motion';
import { ContactData } from '@/interfaces';

interface Props extends ContactData {}

const Contact: React.FC<Props> = props => {
    const { smallText, largeText, description1, description2, email } = props;
    return (
        <motion.div
            className="my-20 flex flex-col justify-center items-center"
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id="contact"
        >
            <h4 className="uppercase tracking-wider text-ctp-red font-bold text-sm">
                {smallText}
            </h4>
            <h2 className="font-bold mt-2 mb-6 text-3xl">{largeText}</h2>
            <p className="text-center lg:px-32">
                {description1}{' '}
                <span className="font-bold text-ctp-red">{email}</span>{' '}
                {description2}
            </p>
            <Button>
                <a className="flex gap-2" href={`mailto:${email}`}>
                    write me an email{' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                </a>
            </Button>
        </motion.div>
    );
};

export default Contact;
