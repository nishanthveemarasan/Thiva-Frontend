import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { FormInputProps } from "@/types/input";

const FormTextArea: React.FC<FormInputProps> = ({
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
        <Label htmlFor="message">{label} <span className="text-red-700">*</span> {value && value.length == mxLength && <span className="text-red-700 text-xs italic">(max:{mxLength}) characters</span>}</Label>
        <Textarea id="message" value={value || ""} onChange={(e) => onChange(e.target.value, type)} placeholder={placeHolder} rows={5} />
        {submitted && !valid && <p className="text-red-700 text-xs">{error}</p>}
    </div>
}
export default FormTextArea;