import { FormikHelpers } from 'formik';

export interface BaseData {
    _id: string;
    _type: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
}

export interface ImageType {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}

export interface LandingData extends BaseData {
    bgText1: string;
    bgText2: string;
    smallText: string;
    name: string;
    description: string;
    buttonText: string;
    image: ImageType;
}

export interface SkillSetData extends BaseData {
    smallText: string;
    largeText1: string;
    largeText2: string;
    buttonText: string;
    description: string;
}

export interface Skill extends BaseData {
    name: string;
    bgColor: string;
    icon: ImageType;
}

export interface Project extends BaseData {
    title: string;
    description: string;
    previewLink?: string;
    githubLink: string;
    tags: string[];
    image: ImageType;
}

export interface ContactData extends BaseData {
    smallText: string;
    largeText: string;
    description1: string;
    description2: string;
    email: string;
}

export interface FooterData extends BaseData {
    name: string;
    twitterUsername: string;
    githubLink: string;
    instagramLink: string;
    twitterLink: string;
}

export interface BlogMeta {
    title: string;
    slug: string;
    excerpt: string;
    tags: string[];
    date: string;
}

export interface Blog {
    content: string;
    meta: BlogMeta;
}

export interface ContactFormInfo {
    name: string;
    email: string;
    message: string;
}

export type HandleSubmit<T> = (
    values: T,
    formikHelpers: FormikHelpers<T>
) => void | Promise<any>;
