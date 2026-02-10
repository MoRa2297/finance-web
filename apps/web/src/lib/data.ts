import {
  mockAccounts,
  mockTransactions,
  mockDashboardSummary,
} from "@/mocks/data";
import type { Account, Transaction, DashboardSummary } from "@finance/api-sdk";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getAccounts(): Promise<Account[]> {
  await delay(200);
  return mockAccounts;
}

export async function getAccountById(id: string): Promise<Account | null> {
  await delay(150);
  return mockAccounts.find((a) => a.id === id) ?? null;
}

export async function getTransactions(): Promise<Transaction[]> {
  await delay(200);
  return mockTransactions;
}

export async function getTransactionsByAccount(
  accountId: string,
): Promise<Transaction[]> {
  await delay(150);
  return mockTransactions.filter((t) => t.accountId === accountId);
}

export async function getDashboardSummary(): Promise<DashboardSummary> {
  await delay(100);
  return mockDashboardSummary;
}

export async function getRecentTransactions(
  limit: number = 5,
): Promise<Transaction[]> {
  await delay(150);
  return mockTransactions
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
