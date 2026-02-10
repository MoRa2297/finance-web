import { Card, Badge } from "@finance/ui";
import { formatCurrency, getRelativeTime } from "@finance/utils";
import { getTransactions } from "@/lib/data";

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Transactions</h1>
        <p className="mt-1 text-gray-400">
          Income: {formatCurrency(totalIncome)} · Expenses:{" "}
          {formatCurrency(totalExpenses)}
        </p>
      </div>

      <Card padding="none">
        <div className="divide-y divide-gray-800">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between px-6 py-4"
            >
              <div>
                <p className="font-medium text-white">{tx.description}</p>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant="neutral">{tx.category}</Badge>
                  <span className="text-xs text-gray-500">
                    {getRelativeTime(tx.date)}
                  </span>
                </div>
              </div>
              <p
                className={`text-sm font-semibold ${tx.amount >= 0 ? "text-green-400" : "text-red-400"}`}
              >
                {tx.amount >= 0 ? "+" : ""}
                {formatCurrency(Math.abs(tx.amount))}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
