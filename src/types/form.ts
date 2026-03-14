interface FormField {
  value: string | null;
  valid: boolean;
  validator: Array<(value: string) => boolean>;
  error: string;
  mxLength: number;
} 

export interface ContactUsForm {
    name: FormField;
    email: FormField;
    subject: FormField;
    phone: FormField;
    message: FormField;
    [key: string]: any;
  }