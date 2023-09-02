import React from 'react';
import {
    ContactData,
    ContactFormInfo,
    HandleSubmit,
    Links
} from '@/interfaces';
import { Formik, Form } from 'formik';
import { Button, InputField, TextAreaField } from '@/components';
import emailjs from '@emailjs/browser';
import { isEmail } from '@/utils';
import toast from 'react-hot-toast';
import { RiSendPlaneFill } from 'react-icons/ri';
import { IoLocationSharp } from 'react-icons/io5';
import { MdMail } from 'react-icons/md';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

interface Props extends ContactData, Links {}

const Contact: React.FC<Props> = (props) => {
    const {
        smallText,
        largeText,
        description1,
        description2,
        email,
        linkedinLink,
        githubLink,
        instagramLink,
        twitterLink
    } = props;

    const handleSubmit: HandleSubmit<ContactFormInfo> = async (
        values,
        { setErrors }
    ) => {
        const { name, email, message } = values;

        // validation
        if (!name) {
            setErrors({
                name: 'Name is required.'
            });
            return;
        }

        if (!isEmail(email)) {
            setErrors({
                email: 'Invalid Email.'
            });
            return;
        }

        if (!message) {
            setErrors({
                message: 'Message is required.'
            });
            return;
        }

        const toastId = toast.loading('Loading...');

        try {
            const res = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    name: name,
                    email: email,
                    message
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            toast.dismiss(toastId);
            if (res.status === 200) {
                toast.success(
                    'Thank you. I will get back to you as soon as possible.'
                );
            } else {
                console.error(res.text);
                toast.error('Opps! Something went wrong.');
            }
        } catch (error) {
            toast.dismiss(toastId);
            console.error(error);
            toast.error('Opps! Something went wrong.');
        }
    };

    return (
        <div
            className="my-20 flex flex-col justify-center items-center"
            id="contact"
        >
            <h4 className="uppercase tracking-wider text-ctp-red font-bold text-sm">
                {smallText}
            </h4>
            <h2 className="font-bold mt-2 mb-6 text-3xl">{largeText}</h2>

            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 grid place-items-center">
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form className="mt-5 min-w-full md:px-10">
                                <InputField
                                    name="name"
                                    label="Name"
                                    placeholder="What's your good name ?"
                                />
                                <InputField
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    placeholder="What's your web address ?"
                                />
                                <TextAreaField
                                    rows={7}
                                    name="message"
                                    label="Your Message"
                                    placeholder="What's you want to say ?"
                                />
                                <Button type="submit">
                                    <div className="flex items-center">
                                        <RiSendPlaneFill className="mr-3 h-6 w-6" />
                                        <span>Send Email</span>
                                    </div>
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="md:w-1/2 flex flex-col pt-12">
                    <p className="">
                        {description1}{' '}
                        <span className="font-bold text-ctp-red">{email}</span>{' '}
                        {description2}
                    </p>
                    <div className="font-Hack mt-7">
                        <div className="flex my-3">
                            <IoLocationSharp className="h-5 w-5 mr-3 text-ctp-peach" />
                            <a
                                href="https://goo.gl/maps/JKMwzmvmzk9HQheWA"
                                target="_blank"
                            >
                                New Delhi, India
                            </a>
                        </div>

                        <div className="flex my-2">
                            <MdMail className="h-5 w-5 mr-3 text-ctp-green" />
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <a
                            href={linkedinLink}
                            aria-label="LinkedIn Profile"
                            target="_blank"
                            className="p-2 rounded-lg hover:bg-ctp-lavender hover:-translate-y-1 transition-all duration-200 mr-4"
                        >
                            <BsLinkedin className="h-7 w-7" />
                        </a>
                        <a
                            href={githubLink}
                            aria-label="Github Profile"
                            target="_blank"
                            className="p-2 rounded-lg hover:bg-ctp-lavender hover:-translate-y-1 transition-all duration-200 mr-4"
                        >
                            <BsGithub className="h-7 w-7" />
                        </a>
                        <a
                            href={twitterLink}
                            aria-label="Twitter Profile"
                            target="_blank"
                            className="p-2 rounded-lg hover:bg-ctp-lavender hover:-translate-y-1 transition-all duration-200 mr-4"
                        >
                            <FaTwitter className="h-7 w-7" />
                        </a>
                        <a
                            href={instagramLink}
                            aria-label="Instagram Profile"
                            target="_blank"
                            className="p-2 rounded-lg hover:bg-ctp-lavender hover:-translate-y-1 transition-all duration-200 mr-4"
                        >
                            <FaInstagram className="h-7 w-7" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
