import Link from "next/link";
import { Card, CardContent, Badge, Button } from "@finance/ui";
import { formatCurrency } from "@finance/utils";
import { getAccounts } from "@/lib/data";

const typeColors = {
  checking: "default",
  savings: "success",
  credit: "warning",
  investment: "neutral",
} as const;

export default async function AccountsPage() {
  const accounts = await getAccounts();

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Accounts</h1>
          <p className="mt-1 text-gray-400">
            {accounts.length} accounts · Total: {formatCurrency(totalBalance)}
          </p>
        </div>
        <Button>Add Account</Button>
      </div>

      <div className="flex flex-col gap-4">
        {accounts.map((account) => (
          <Link key={account.id} href={`/accounts/${account.id}`}>
            <Card className="transition-colors hover:border-gray-700">
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">{account.name}</p>
                    <Badge
                      variant={
                        typeColors[account.type as keyof typeof typeColors]
                      }
                      className="mt-1"
                    >
                      {account.type}
                    </Badge>
                  </div>
                  <p
                    className={`text-xl font-bold ${account.balance >= 0 ? "text-white" : "text-red-400"}`}
                  >
                    {formatCurrency(account.balance)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
