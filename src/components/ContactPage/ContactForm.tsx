import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { email, maxValue, phone, required } from "@/components/helper/Validator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ContactUsForm } from "@/types/form";
import { Send } from "lucide-react";
import InputContainer from "./InputContainer";
const ContactForm = () => {
    const { toast } = useToast();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<ContactUsForm>({
        name: {
            value: "",
            error: "Name is required",
            valid: false,
            validator: [required, maxValue({ max: 50 })],
            mxLength: 50
        },
        email: {
            value: "",
            error: "A Valid Email is required",
            valid: false,
            validator: [required, email, maxValue({ max: 100 })],
            mxLength: 100
        },
        subject: {
            value: "",
            error: "The Subject is required",
            valid: false,
            validator: [required, maxValue({ max: 100 })],
            mxLength: 100
        },
        message: {
            value: "",
            error: "Query is required",
            valid: false,
            validator: [required, maxValue({ max: 1000 })],
            mxLength: 1000
        },
        phone: {
            value: "",
            error: "A Valid Phone Number is required",
            valid: false,
            validator: [required, maxValue({ max: 15 }), phone],
            mxLength: 15
        }
    });
    const onChangeHandler = (input: string | null, type: keyof ContactUsForm) => {
        let value = input ?? "";
        let valid = true;
        for (let validator of form[type].validator) {
            valid = valid && validator(value);
        }
        if (value.length > form[type].mxLength) {
            return false;
        }
        setForm((prevState) => {
            return {
                ...prevState,
                [type]: {
                    ...prevState[type],
                    value: value,
                    valid: valid,
                },
            };
        });
    }

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        let formValid = true;
        for (let key in form) {
            formValid = formValid && form[key].valid;
        }
        if (!formValid) {
            return false;
        }

        const formData = {
            name: form.name.value?.trim(),
            email: form.email.value?.trim(),
            subject: form.subject.value?.trim(),
            phone: form.phone.value?.trim(),
            message: form.message.value?.trim()
        }

        console.log(formData);
        return;

        const res = await fetch("/api/contact-us", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success && data.result?.message) {
            toast({ title: "Message sent!", description: data.result.message });
            resetForm();
        } else {
            toast({ title: "Error", description: data.message || "Failed to send message", variant: "destructive" });
        }
    }
    const resetForm = () => {
        setSubmitted(false);
        setForm((prevState) => {
            const resetState: ContactUsForm = { ...prevState };
            for (let key in resetState) {
                resetState[key] = {
                    ...resetState[key],
                    value: "",
                    valid: false,
                };
            }
            return resetState;
        });
    }
    return <Card className="lg:col-span-3">
        <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                    <InputContainer
                        as='input'
                        value={form.name.value ?? ""}
                        mxLength={form.name.mxLength}
                        onChange={onChangeHandler}
                        name="name"
                        type="text"
                        submitted={submitted}
                        valid={form.name.valid}
                        error={form.name.error}
                        placeholder="Your name"
                        label="Name"
                    />
                    <InputContainer
                        as='input'
                        value={form.email.value ?? ""}
                        mxLength={form.email.mxLength}
                        onChange={onChangeHandler}
                        type="email"
                        name="email"
                        submitted={submitted}
                        valid={form.email.valid}
                        error={form.email.error}
                        placeholder="your@email.com"
                        label="Email Address"
                    />
                </div>
                <InputContainer
                    as='input'
                    value={form.phone.value ?? ""}
                    mxLength={form.phone.mxLength}
                    onChange={onChangeHandler}
                    type="text"
                    name="phone"
                    submitted={submitted}
                    valid={form.phone.valid}
                    error={form.phone.error}
                    placeholder="Phone number"
                    label="Phone Number"
                />

                <InputContainer
                    as='input'
                    value={form.subject.value ?? ""}
                    mxLength={form.subject.mxLength}
                    onChange={onChangeHandler}
                    type="text"
                    name="subject"
                    submitted={submitted}
                    valid={form.subject.valid}
                    error={form.subject.error}
                    placeholder="Subject of project inquiry"
                    label="Subject"
                />
                <InputContainer
                    as='textarea'
                    value={form.message.value ?? ""}
                    mxLength={form.message.mxLength}
                    onChange={onChangeHandler}
                    name="message"
                    submitted={submitted}
                    valid={form.message.valid}
                    error={form.message.error}
                    placeholder={"Tell me about your project..."}
                    rows={5}
                    label="Message"
                />
                <Button role="button" type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
            </form>
        </CardContent>
    </Card>
}
export default ContactForm;