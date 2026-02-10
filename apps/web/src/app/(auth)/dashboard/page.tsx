import { Card, CardContent, Badge } from "@finance/ui";
import { formatCurrency } from "@finance/utils";
import { getDashboardSummary, getRecentTransactions } from "@/lib/data";
import { getRelativeTime } from "@finance/utils";

export default async function DashboardPage() {
  const [summary, recentTransactions] = await Promise.all([
    getDashboardSummary(),
    getRecentTransactions(5),
  ]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="mt-1 text-gray-400">Overview of your finances</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardContent>
            <p className="text-sm text-gray-400">Total Balance</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {formatCurrency(summary.totalBalance)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="text-sm text-gray-400">Income this month</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {formatCurrency(summary.monthlyIncome)}
            </p>
            <Badge variant="success" className="mt-2">
              +{summary.incomeChange}%
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="text-sm text-gray-400">Expenses this month</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {formatCurrency(summary.monthlyExpenses)}
            </p>
            <Badge
              variant={summary.expenseChange > 0 ? "danger" : "success"}
              className="mt-2"
            >
              {summary.expenseChange}%
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">
          Recent Transactions
        </h2>
        <Card padding="none">
          <div className="divide-y divide-gray-800">
            {recentTransactions.map((tx) => (
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
    </div>
  );
}
