import { Card, CardContent, Badge } from "@finance/ui";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="mt-1 text-gray-400">Overview of your finances</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardContent>
            <p className="text-sm text-gray-400">Total Balance</p>
            <p className="mt-1 text-2xl font-bold text-white">€12,450.00</p>
            <Badge variant="success" className="mt-2">
              +2.5%
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="text-sm text-gray-400">Income this month</p>
            <p className="mt-1 text-2xl font-bold text-white">€3,200.00</p>
            <Badge variant="success" className="mt-2">
              +12%
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="text-sm text-gray-400">Expenses this month</p>
            <p className="mt-1 text-2xl font-bold text-white">€1,840.00</p>
            <Badge variant="danger" className="mt-2">
              +8%
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
