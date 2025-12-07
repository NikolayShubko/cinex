export interface LoginFormValues {
  password: string;
  username: string;
  rememberMe: boolean;
}
export interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  plan: "basic" | "standard" | "premium";
  payMethod: "creditCard" | "paypal";
  cardInfo: {
    cardNumber: string;
    expiryDate: string;
    CVV: number | null;
    firstName: string;
    lastName: string;
  };
  device: "TV" | "Phone" | "Computer" | "Gaming Console";
}
