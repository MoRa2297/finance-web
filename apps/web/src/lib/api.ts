import { FinanceApi } from "@finance/api-sdk";

export const financeApi = new FinanceApi({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001",
});
