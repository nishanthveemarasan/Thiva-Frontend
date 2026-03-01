export interface ContactUsForm {
    name: {
      value: string | null;
      valid: boolean;
      validator: Array<(value: string) => boolean>;
      error: string;
      mxLength: number;
    };
    email: {
      value: string | null;
      valid: boolean;
      validator: Array<(value: string) => boolean>;
      error: string;
      mxLength: number;
    };
    subject: {
      value: string | null;
      valid: boolean;
      validator: Array<(value: string) => boolean>;
      error: string;
      mxLength: number;
    };
    phone: {
      value: string | null;
      valid: boolean;
      validator: Array<(value: string) => boolean>;
      error: string;
      mxLength: number;
    };
    message: {
      value: string | null;
      valid: boolean;
      validator: Array<(value: string) => boolean>;
      error: string;
      mxLength: number;
    };
    [key: string]: any;
  }