import { Card, CardContent, Badge, Button } from "@finance/ui";

const mockAccounts = [
  {
    id: "1",
    name: "Main Checking",
    type: "checking",
    balance: 8450.0,
    currency: "EUR",
  },
  {
    id: "2",
    name: "Savings",
    type: "savings",
    balance: 3200.0,
    currency: "EUR",
  },
  {
    id: "3",
    name: "Credit Card",
    type: "credit",
    balance: -800.0,
    currency: "EUR",
  },
];

const typeColors = {
  checking: "default",
  savings: "success",
  credit: "warning",
  investment: "neutral",
} as const;

export default function AccountsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Accounts</h1>
          <p className="mt-1 text-gray-400">Manage your bank accounts</p>
        </div>
        <Button>Add Account</Button>
      </div>

      <div className="flex flex-col gap-4">
        {mockAccounts.map((account) => (
          <Card
            key={account.id}
            className="transition-colors hover:border-gray-700"
          >
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
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
                </div>
                <p
                  className={`text-xl font-bold ${account.balance >= 0 ? "text-white" : "text-red-400"}`}
                >
                  €
                  {Math.abs(account.balance).toLocaleString("it-IT", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
