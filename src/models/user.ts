export interface User {
  id: number;
  full_name: string;
  gender: string;
  birthdate: string;
  birth_country?: string;
  email: string;
  contact: string;
  photo?: string;
  verified: boolean;
  created_at: string;
}

export interface UserRegisterRequest {
  full_name: string;
  gender: string;
  birthdate: string;
  email: string;
  contact: string;
}
