import type { Component } from 'solid-js';
import { useField } from 'solid-js-form';
import { twMerge } from 'tailwind-merge';

const TextArea: Component<{
    name: string;
    label: string;
    placeholder: string;
    rows?: number;
}> = (props) => {
    const { field, form } = useField(props.name);
    //@ts-ignore
    const formHandler = form.formHandler;

    return (
        <div class="flex flex-col my-5">
            <label for={props.name} class="mb-2 text-lg">
                {props.label}
            </label>
            <textarea
                class={twMerge(
                    'px-5 py-2 bg-ctp-crust rounded outline-none border-b-2 border-b-transparent focus-within:border-b-ctp-red',
                    field.error() ? 'outline-1 outline-red-600' : ''
                )}
                name={props.name}
                placeholder={props.placeholder}
                value={field.value() as any}
                rows={props.rows}
                //@ts-ignore
                use:formHandler
            />
            <span class="text-sm font-semibold text-red-600 mt-2">
                {' '}
                {field.error()}
            </span>
        </div>
    );
};

export default TextArea;
