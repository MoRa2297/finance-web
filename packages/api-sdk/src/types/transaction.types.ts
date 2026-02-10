export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  accountId: string;
  type: "income" | "expense";
}

export interface DashboardSummary {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  incomeChange: number;
  expenseChange: number;
}
