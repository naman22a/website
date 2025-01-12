import { createSignal, type Component } from 'solid-js';
import { IoLocationSharp, IoMail } from 'solid-icons/io';
import { BsGithub, BsLinkedin } from 'solid-icons/bs';
import { FaBrandsInstagram, FaBrandsTwitter } from 'solid-icons/fa';
import { RiBusinessSendPlaneFill } from 'solid-icons/ri';
import { SiLeetcode } from 'solid-icons/si';
import Button from '../shared/Button';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'solid-toast';
import { isEmail } from '../../utils';
import { twMerge } from 'tailwind-merge';

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
    leetcodeLink: string;
}

const Contact: Component<Props> = ({
    smallText,
    largeText,
    description1,
    description2,
    email: myEmail,
    githubLink,
    instagramLink,
    twitterLink,
    linkedinLink,
    leetcodeLink
}) => {
    const [name, setName] = createSignal('');
    const [nameError, setNameError] = createSignal('');
    const [email, setEmail] = createSignal('');
    const [emailError, setEmailError] = createSignal('');
    const [message, setMessage] = createSignal('');
    const [messageError, setMessageError] = createSignal('');

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
                    <form
                        class="mt-5 min-w-full md:px-10"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            setNameError('');
                            setEmailError('');
                            setMessageError('');

                            try {
                                // validation
                                if (!name()) {
                                    setNameError('Name is required.');
                                    return;
                                }

                                if (!email()) {
                                    setEmailError('Email is required.');
                                    return;
                                }

                                if (!message()) {
                                    setMessageError('Message is required.');
                                    return;
                                }

                                if (!isEmail(email())) {
                                    setEmailError('Invalid email.');
                                    return;
                                }

                                const res = await emailjs.send(
                                    import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
                                    import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
                                    {
                                        name: name(),
                                        email: email(),
                                        message: message()
                                    },
                                    {
                                        limitRate: {
                                            throttle: 10000 // 10 secs
                                        },
                                        publicKey: import.meta.env
                                            .PUBLIC_EMAILJS_PUBLIC_KEY
                                    }
                                );
                                if (res.status === 200) {
                                    toast.success(
                                        'Thank you. I will get back to you as soon as possible.',
                                        {
                                            position: 'top-center',
                                            style: {
                                                'background-color': '#1e1e2e',
                                                color: '#cdd6f4',
                                                'text-align': 'center'
                                            }
                                        }
                                    );
                                } else {
                                    toast.error('Opps! Something went wrong.', {
                                        position: 'top-center',
                                        style: {
                                            'background-color': '#1e1e2e',
                                            color: '#cdd6f4',
                                            'text-align': 'center'
                                        }
                                    });
                                }
                            } catch (error) {
                                console.error(error);
                                toast.error('Opps! Something went wrong.', {
                                    position: 'top-center',
                                    style: {
                                        'background-color': '#1e1e2e',
                                        color: '#cdd6f4',
                                        'text-align': 'center'
                                    }
                                });
                            }
                        }}
                    >
                        {/* Name */}
                        <div class="flex flex-col my-5">
                            <label for="name" class="mb-2 text-lg">
                                Name
                            </label>
                            <input
                                class={twMerge(
                                    'px-5 py-2 bg-ctp-crust rounded outline-none border-b-2 border-b-transparent focus-within:border-b-ctp-red',
                                    nameError() && 'outline-1 outline-red-600'
                                )}
                                name="name"
                                placeholder="What's your good name ?"
                                type="text"
                                value={name()}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span class="text-sm font-semibold text-red-600 mt-2">
                                {' '}
                                {nameError()}
                            </span>
                        </div>

                        {/* Email */}

                        <div class="flex flex-col my-5">
                            <label for="email" class="mb-2 text-lg">
                                Email
                            </label>
                            <input
                                class={twMerge(
                                    'px-5 py-2 bg-ctp-crust rounded outline-none border-b-2 border-b-transparent focus-within:border-b-ctp-red',
                                    emailError() && 'outline-1 outline-red-600'
                                )}
                                name="email"
                                placeholder="What's your web address ?"
                                type="email"
                                value={email()}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span class="text-sm font-semibold text-red-600 mt-2">
                                {' '}
                                {emailError()}
                            </span>
                        </div>

                        {/* Message */}
                        <div class="flex flex-col my-5">
                            <label for="message" class="mb-2 text-lg">
                                Message
                            </label>
                            <textarea
                                class={twMerge(
                                    'px-5 py-2 bg-ctp-crust rounded outline-none border-b-2 border-b-transparent focus-within:border-b-ctp-red',
                                    messageError() &&
                                        'outline-1 outline-red-600'
                                )}
                                name="message"
                                placeholder="What's your message ?"
                                value={message()}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={7}
                            />
                            <span class="text-sm font-semibold text-red-600 mt-2">
                                {' '}
                                {messageError()}
                            </span>
                        </div>

                        <Button type="submit">
                            <div class="flex items-center">
                                <RiBusinessSendPlaneFill class="mr-3 h-6 w-6" />
                                <span>Send Email</span>
                            </div>
                        </Button>
                    </form>
                </div>
                <div class="md:w-1/2 flex flex-col pt-12">
                    <p class="">
                        {description1}{' '}
                        <span class="font-bold text-ctp-sapphire">
                            {myEmail}
                        </span>{' '}
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
                            <a href={`mailto:${myEmail}`}>{myEmail}</a>
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
                            href={leetcodeLink}
                            aria-label="Leetcode Profile"
                            target="_blank"
                            class="p-2 rounded-lg hover:bg-ctp-lavender hover:-translate-y-1 transition-all duration-200 mr-4"
                        >
                            <SiLeetcode class="h-7 w-7" />
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

            <Toaster />
        </div>
    );
};

export default Contact;
