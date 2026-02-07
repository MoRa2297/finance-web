import { Button } from "@finance/ui";

export default function HomePage() {
  // Solo per verificare che l'SDK è importabile senza errori
  // console.log("API SDK initialized:", !!financeApi);
  // console.log("Accounts module:", !!financeApi.accounts);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Finance App</h1>
        <p className="mt-4 mb-8 text-gray-400">Monorepo is working!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    </main>
  );
}
