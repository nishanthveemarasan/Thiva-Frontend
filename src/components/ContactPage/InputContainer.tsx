import React from "react";
import { Label } from "../ui/label";

type InputContainerProps<T extends React.ElementType> = {
    as?: T;
    mxLength: number;
    onChange: (value: string, type: string) => void;
    submitted: boolean;
    label: string;
    value: string | null;
    valid: boolean;
    error: string;
    row?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, "onChange">;
const InputContainer = <T extends React.ElementType>({ as, mxLength, value, onChange, submitted, valid, error, rows, label, ...props }: InputContainerProps<T>) => {
    const Input = as || "input";

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.name && onChange(e.target.value, props.name);
    }
    return <div className="space-y-2">
        <Label htmlFor={props.type}>{label} <span className="text-red-700">*</span>{value && value.length == mxLength && <span className="text-red-700 text-xs italic">(max:{mxLength}) characters</span>}</Label>
        <Input id={props.type} value={value || ""} onChange={onChangeHandler} rows={rows} {...props} className={`flex ${as == "textarea" ? 'min-h-[80px]' : 'h-10'} w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`} />
        {submitted && !valid && <p className="text-red-700 text-xs">{error}</p>}
    </div>

}
export default InputContainer;