import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { email, maxValue, phone, required } from "@/components/helper/Validator";
import { ContactUsForm } from "@/types/form";
import ApiHelper from "@/components/helper/ApiHelper";
import FormInput from "@/components/formUI/formInput";
import FormTextArea from "@/components/formUI/formTextArea";
import Layout from "@/components/Layout";
import PageMetaHeader from "@/components/Header/PageMetaHeader";

const Contact = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
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

    // const data = await ApiHelper.request({
    //   endpoint: "api/contact-us",
    //   method: "POST",
    //   body: formData,
    //   setLoading,
    // });
    // if (data.success && data.result?.message) {
      toast({ title: "Message sent!", description: "Thank you for contacting us! we will contact you shortly" });
      resetForm();
    // }
  }

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      name: {
        ...form.name,
        value: "",
        valid: false
      },
      email: {
        ...form.email,
        value: "",
        valid: false
      },
      subject: {
        ...form.subject,
        value: "",
        valid: false
      },
      phone: {
        ...form.phone,
        value: "",
        valid: false
      },
      message: {
        ...form.message,
        value: "",
        valid: false
      }
    });
  }

  return (
    <Layout>
      <PageMetaHeader title="Client Testimonials - Trusted Civil Engineering Solutions" pageUrl="/testimonials" description="Discover what our clients have to say about our civil engineering services. Read testimonials from property developers, municipal directors, architects, and more." />
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">Have a project in mind? Let's discuss how I can help.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "07741304657" },
                { icon: Mail, label: "Email", value: "thumbconstruction@yahoo.com" },
                { icon: MapPin, label: "Office", value: "11 Marshstreet North, Dartford, DA2 5WF " },
              ].map((item) => (
                <Card key={item.label}>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-sm text-muted-foreground break-all md:break-words">
                        {item.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form */}
            <Card className="lg:col-span-3">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormInput
                      value={form.name.value}
                      mxLength={form.name.mxLength}
                      onChange={onChangeHandler}
                      type="name"
                      submitted={submitted}
                      valid={form.name.valid}
                      error={form.name.error}
                      placeHolder="Your name"
                      label="Name"
                    />
                    <FormInput
                      value={form.email.value}
                      mxLength={form.email.mxLength}
                      onChange={onChangeHandler}
                      type="email"
                      submitted={submitted}
                      valid={form.email.valid}
                      error={form.email.error}
                      placeHolder="your@email.com"
                      label="Email Address"
                    />
                  </div>
                  <FormInput
                    value={form.phone.value}
                    mxLength={form.phone.mxLength}
                    onChange={onChangeHandler}
                    type="phone"
                    submitted={submitted}
                    valid={form.phone.valid}
                    error={form.phone.error}
                    placeHolder="Phone number"
                    label="Phone Number"
                  />

                  <FormInput
                    value={form.subject.value}
                    mxLength={form.subject.mxLength}
                    onChange={onChangeHandler}
                    type="subject"
                    submitted={submitted}
                    valid={form.subject.valid}
                    error={form.phone.error}
                    placeHolder="Subject of project inquiry"
                    label="Subject"
                  />
                  <FormTextArea
                    value={form.message.value}
                    mxLength={form.message.mxLength}
                    onChange={onChangeHandler}
                    type="message"
                    submitted={submitted}
                    valid={form.message.valid}
                    error={form.message.error}
                    placeHolder={"Tell me about your project..."}
                    label="Message"
                  />
                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
