export interface StoreData {
  data: contactDetails | null;
  loading: boolean;
  error: boolean;
}

export interface TestimonialStoreData {
  data: testimonialData[] | [];
  loading: boolean;
  error: boolean;
}

export interface serviceSliceData {
  services: serviceData[] | [];
  year_of_experience: number
}

export interface serviceStoreData {
  data: serviceSliceData;
  loading: boolean;
  error: boolean;
}

export interface profileStoreData {
  data: profileData | null;
  loading: boolean;
  error: boolean;
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

export interface experienceData {
  company: string;
  role: string;
  from: number;
  to: number | string;
  description: string;
}

export interface educationData {
  course: string;
  institution: string;
  from: number;
  to: number | string;
  description: string;
}

export interface skillData {
  name: string;
}

export interface personalInfo {
  first_name: string;
  last_name: string;
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
  year_of_experience: number
}

export interface homeStoreData {
  data: homeData | null;
  loading: boolean;
  error: boolean;
}
