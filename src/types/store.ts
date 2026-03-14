
interface loadingData {
  loading: boolean;
  error: boolean;
}

interface periodData{
  from: number;
  to: number | string;
}
export interface StoreData extends loadingData {
  data: contactDetails | null;
}



export interface TestimonialStoreData extends loadingData {
  data: testimonialSliceData | null;
}

export interface testimonialSliceData {
  testimonials: testimonialData[] | [];
  contact_info: contactDetails;
}

export interface serviceSliceData {
  services: serviceData[] | [];
  year_of_experience: number;
  contact_info: contactDetails;
}

export interface serviceStoreData extends loadingData {
  data: serviceSliceData|null;
}

export interface profileStoreData extends loadingData {
  data: profileData | null;
}
export interface contactDetails {
  email: string;
  phone: string;
  address: string;
}

export interface testimonialData {
  first_name: string;
  last_name: string;
  content: string;
  star: number;
  title: string;
}

export interface serviceData {
  title: string;
  description?: string;
  points?: string[];
  special_point?: string;
}

export interface experienceData extends periodData{
  company: string;
  role: string;
  description: string;
}

export interface educationData extends periodData{
  course: string;
  institution: string;
  description: string;
}

export interface skillData {
  name: string;
}

export interface personalInfo extends Partial<contactDetails> {
  first_name: string;
  last_name: string;
  qualification: string;
  biography: string;
  bottom_line: string;
  image: {
    full_url: string;
  };
}

export interface profileData {
  services: serviceData[];
  experiences: experienceData[];
  educations: educationData[];
  skills: skillData[];
  profile: personalInfo;
}

export interface imageData {
  full_url: string;
  title?: string;
}

export interface homeContent {
  title: string;
  description: string;
  images: imageData[];
}

export interface projectData {
  name: string;
  type: string;
  city: string;
  image: imageData;
}



export interface homeData {
  services: serviceData[];
  content: homeContent;
  projects: projectData[];
  year_of_experience: number;
  contact_info: contactDetails;
}

export interface homeStoreData extends loadingData {
  data: homeData | null;
}
