export interface CurrencyFormatOptions {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

export function formatCurrency(
  amount: number,
  options: CurrencyFormatOptions = {},
): string {
  const {
    locale = "it-IT",
    currency = "EUR",
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
}
