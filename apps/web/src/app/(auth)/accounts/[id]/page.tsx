import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, Badge, Button } from "@finance/ui";
import { formatCurrency, formatDate } from "@finance/utils";
import { getAccountById, getTransactionsByAccount } from "@/lib/data";

interface AccountDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function AccountDetailPage({
  params,
}: AccountDetailPageProps) {
  const { id } = await params;
  const [account, transactions] = await Promise.all([
    getAccountById(id),
    getTransactionsByAccount(id),
  ]);

  if (!account) {
    notFound();
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/accounts"
          className="text-sm text-gray-400 hover:text-white"
        >
          ← Back to accounts
        </Link>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">{account.name}</h1>
            <Badge variant="neutral" className="mt-1">
              {account.type}
            </Badge>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Current Balance</p>
            <p
              className={`text-3xl font-bold ${account.balance >= 0 ? "text-white" : "text-red-400"}`}
            >
              {formatCurrency(account.balance)}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Transactions</h2>
        <Button variant="outline" size="sm">
          Add Transaction
        </Button>
      </div>

      {transactions.length === 0 ? (
        <Card>
          <CardContent>
            <p className="text-center text-gray-400">No transactions yet</p>
          </CardContent>
        </Card>
      ) : (
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
                      {formatDate(tx.date)}
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
      )}
    </div>
  );
}
