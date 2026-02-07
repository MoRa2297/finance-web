export interface Account {
  id: string;
  name: string;
  balance: number;
  currency: string;
  type: AccountType;
  createdAt: string;
  updatedAt: string;
}

export type AccountType = "checking" | "savings" | "credit" | "investment";

export interface CreateAccountDto {
  name: string;
  balance: number;
  currency: string;
  type: AccountType;
}

export interface UpdateAccountDto {
  name?: string;
  balance?: number;
  currency?: string;
  type?: AccountType;
}
