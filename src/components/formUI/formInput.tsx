import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FormInputProps } from "@/types/input";

const FormInput: React.FC<FormInputProps> = ({
    value,
    mxLength,
    onChange,
    type,
    submitted,
    valid,
    error,
    placeHolder,
    label
}) => {
    return <div className="space-y-2">
        <Label htmlFor={type}>{label} <span className="text-red-700">*</span>{value && value.length == mxLength && <span className="text-red-700 text-xs italic">(max:{mxLength}) characters</span>}</Label>
        <Input id={type} value={value || ""} onChange={(e) => onChange(e.target.value, type)} placeholder={placeHolder}/>
        {submitted && !valid && <p className="text-red-700 text-xs">{error}</p>}
    </div>
}
export default FormInput;