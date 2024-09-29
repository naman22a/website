import { type Component } from 'solid-js';
import { IoLocationSharp, IoMail } from 'solid-icons/io';
import { BsGithub, BsLinkedin } from 'solid-icons/bs';
import { FaBrandsInstagram, FaBrandsTwitter } from 'solid-icons/fa';
import { Form, type FormType } from 'solid-js-form';
import * as yup from 'yup';
import type { Store } from 'solid-js/store';
import Input from './Input';
import TextArea from './TextArea';
import type { ContactFormValues } from '../../interfaces';
import { RiBusinessSendPlaneFill } from 'solid-icons/ri';
import Button from '../shared/Button';

interface Props {
    smallText: string;
    largeText: string;
    description1: string;
    description2: string;
    email: string;

    githubLink: string;
    instagramLink: string;
    twitterLink: string;
    linkedinLink: string;
}

const Contact: Component<Props> = ({
    smallText,
    largeText,
    description1,
    description2,
    email,
    githubLink,
    instagramLink,
    twitterLink,
    linkedinLink
}) => {
    return (
        <div
            class="my-20 flex flex-col justify-center items-center"
            id="contact"
        >
            <h4 class="uppercase tracking-wider text-ctp-red font-bold text-sm">
                {smallText}
            </h4>
            <h2 class="font-bold mt-2 mb-6 text-3xl">{largeText}</h2>

            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 grid place-items-center">
                    <Form
                        class="mt-5 min-w-full md:px-10"
                        initialValues={
                            {
                                name: '',
                                email: '',
                                message: ''
                            } satisfies ContactFormValues
                        }
                        validation={
                            {
                                name: yup
                                    .string()
                                    .required('Name is required.'),
                                email: yup
                                    .string()
                                    .required()
                                    .email('Invalid Email.'),
                                message: yup
                                    .string()
                                    .required('Message is required.')
                            } as any
                        }
                        onSubmit={
                            (async (
                                form: Store<FormType.Context<ContactFormValues>>
                            ) => {
                                console.log(form.values);
                            }) as any
                        }
                    >
                        <Input
                            name="name"
                            label="Name"
                            placeholder="What's your good name ?"
                        />
                        <Input
                            name="email"
                            label="Email"
                            placeholder="What's your web address ?"
                            type="email"
                        />
                        <TextArea
                            rows={7}
                            name="message"
                            label="Message"
                            placeholder="What's you want to say ?"
                        />
                        <Button type="submit">
                            <div class="flex items-center">
                                <RiBusinessSendPlaneFill class="mr-3 h-6 w-6" />
                                <span>Send Email</span>
                            </div>
                        </Button>
                    </Form>
                </div>
                <div class="md:w-1/2 flex flex-col pt-12">
                    <p class="">
                        {description1}{' '}
                        <span class="font-bold text-ctp-red">{email}</span>{' '}
                        {description2}
                    </p>
                    <div class="font-JetBrains mt-7">
                        <div class="flex my-3">
                            <IoLocationSharp class="h-5 w-5 mr-3 text-ctp-peach" />
                            <a
                                href="https://goo.gl/maps/JKMwzmvmzk9HQheWA"
                                target="_blank"
                            >
                                New Delhi, India
                            </a>
                        </div>

                        <div class="flex my-2">
                            <IoMail class="h-5 w-5 mr-3 text-ctp-green" />
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                    </div>
                    <div class="flex mt-5">
                        <a
                            href={linkedinLink}
                            aria-label="LinkedIn Profile"
                            target="_blank"
                            class="p-2 rounded-lg hover:bg-ctp-lavender hover:-translate-y-1 transition-all duration-200 mr-4"
                        >
                            <BsLinkedin class="h-7 w-7" />
                        </a>
                        <a
                            href={githubLink}
                            aria-label="Github Profile"
                            target="_blank"
                            class="p-2 rounded-lg hover:bg-ctp-lavender hover:-translate-y-1 transition-all duration-200 mr-4"
                        >
                            <BsGithub class="h-7 w-7" />
                        </a>
                        <a
                            href={twitterLink}
                            aria-label="Twitter Profile"
                            target="_blank"
                            class="p-2 rounded-lg hover:bg-ctp-lavender hover:-translate-y-1 transition-all duration-200 mr-4"
                        >
                            <FaBrandsTwitter class="h-7 w-7" />
                        </a>
                        <a
                            href={instagramLink}
                            aria-label="Instagram Profile"
                            target="_blank"
                            class="p-2 rounded-lg hover:bg-ctp-lavender hover:-translate-y-1 transition-all duration-200 mr-4"
                        >
                            <FaBrandsInstagram class="h-7 w-7" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
