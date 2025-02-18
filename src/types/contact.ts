export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactInfo {
  icon: React.FC<{ size: number; color?: string }>;
  title: string;
  content: string;
  link?: string;
  color: string;
}