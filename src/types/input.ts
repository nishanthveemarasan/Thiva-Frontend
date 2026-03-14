type changeFn = (value: string, type: string) => void;
export interface FormInputProps {
    value: string | null;
    mxLength: number;
    onChange: changeFn;
    type: string;
    submitted: boolean;
    valid: boolean;
    error: string;
    placeHolder: string;
    label: string;
}