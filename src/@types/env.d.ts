declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_SANITY_TOKEN: string;
            NEXT_PUBLIC_SANITY_PROJECT_ID: string;
            NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
            NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
            NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
        }
    }
}

export {};
