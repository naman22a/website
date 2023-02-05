import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { ImageType } from '../interfaces';

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-08-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: ImageType) => builder.image(source) as any;
