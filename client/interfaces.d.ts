import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<InputHTMLAttributes>{
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

interface CardProps {
  children: ReactNode;
}

interface UserData {
  displayName: string;
  preferredPronouns: string;
  formData: string;
  aboutMe: string;
  associateWith: string; 
  interestedIn: string;
  photo?: string;
}