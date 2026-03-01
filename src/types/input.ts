export interface FormInputProps {
    value: string | null;
    mxLength: number;
    onChange: (value: string, type: string) => void;
    type: string;
    submitted: boolean;
    valid: boolean;
    error: string;
    placeHolder: string;
    label: string;
}