import React, { TextareaHTMLAttributes } from 'react';
import { useField } from 'formik';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string;
    label: string;
};

const TextAreaField: React.FC<Props> = ({ label, ...props }) => {
    const [field, { error }] = useField(props);

    return (
        <div className="flex flex-col my-5">
            <label className="mb-2 text-lg" htmlFor={field.name}>
                {label}
            </label>
            <textarea
                {...field}
                {...props}
                id={field.name}
                placeholder={props.placeholder ? props.placeholder : label}
                autoComplete="off"
                className={`px-5 py-2 bg-ctp-crust rounded outline-none border-b-2 border-b-transparent focus-within:border-b-ctp-red ${
                    error ? 'outline-1 outline-red-600' : ''
                }`}
            />
            {error && <p className="text-red-600 mt-2 capitalize">{error}</p>}
        </div>
    );
};

export default TextAreaField;
