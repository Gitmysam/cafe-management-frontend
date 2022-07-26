export interface product {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  description: string;
  status: boolean;
}

export interface SignUp {
  name: string;
  email: string;
  role: string;
  contactNumber?: number | null;
  status: boolean;
  password: string;
}

export interface Login{
  email:string,
  password:string
}