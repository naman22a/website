import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

type Props = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
};

const InputField: React.FC<Props> = ({ label, size: _, ...props }) => {
    const [field, { error }] = useField(props);

    return (
        <div className="flex flex-col my-5">
            <label className="mb-2 text-lg" htmlFor={field.name}>
                {label}
            </label>
            <input
                {...field}
                {...props}
                id={field.name}
                placeholder={props.placeholder ? props.placeholder : label}
                autoComplete="off"
                className={`px-5 py-2 bg-ctp-crust rounded outline-none border-b-2 border-b-transparent focus-within:border-b-ctp-red ${
                    error ? 'outline-1 outline-red-600' : ''
                }`}
            />
            {error && (
                <span className="text-sm font-semibold text-red-600 mt-2">
                    {error}
                </span>
            )}
        </div>
    );
};

export default InputField;
