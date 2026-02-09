import { Card, Badge } from "@finance/ui";

const mockTransactions = [
  {
    id: "1",
    description: "Grocery Store",
    amount: -85.5,
    date: "2025-01-15",
    category: "Food",
  },
  {
    id: "2",
    description: "Salary",
    amount: 3200.0,
    date: "2025-01-14",
    category: "Income",
  },
  {
    id: "3",
    description: "Netflix",
    amount: -15.99,
    date: "2025-01-13",
    category: "Entertainment",
  },
  {
    id: "4",
    description: "Gas Station",
    amount: -45.0,
    date: "2025-01-12",
    category: "Transport",
  },
  {
    id: "5",
    description: "Freelance Payment",
    amount: 850.0,
    date: "2025-01-11",
    category: "Income",
  },
];

export default function TransactionsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Transactions</h1>
        <p className="mt-1 text-gray-400">Your recent transactions</p>
      </div>

      <Card padding="none">
        <div className="divide-y divide-gray-800">
          {mockTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between px-6 py-4"
            >
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-medium text-white">{tx.description}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="neutral">{tx.category}</Badge>
                    <span className="text-xs text-gray-500">{tx.date}</span>
                  </div>
                </div>
              </div>
              <p
                className={`text-sm font-semibold ${tx.amount >= 0 ? "text-green-400" : "text-red-400"}`}
              >
                {tx.amount >= 0 ? "+" : ""}€
                {Math.abs(tx.amount).toLocaleString("it-IT", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
