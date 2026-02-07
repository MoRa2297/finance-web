export interface DateFormatOptions {
  locale?: string;
  format?: "short" | "medium" | "long" | "full";
}

const formatMap: Record<string, Intl.DateTimeFormatOptions> = {
  short: { day: "2-digit", month: "2-digit", year: "numeric" },
  medium: { day: "numeric", month: "short", year: "numeric" },
  long: { day: "numeric", month: "long", year: "numeric" },
  full: { weekday: "long", day: "numeric", month: "long", year: "numeric" },
};

export function formatDate(
  date: string | Date,
  options: DateFormatOptions = {},
): string {
  const { locale = "it-IT", format = "medium" } = options;
  const dateObj = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat(locale, formatMap[format]).format(dateObj);
}

export function getRelativeTime(date: string | Date, locale = "it-IT"): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - dateObj.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (diffDays > 0) return rtf.format(-diffDays, "day");
  if (diffHours > 0) return rtf.format(-diffHours, "hour");
  if (diffMinutes > 0) return rtf.format(-diffMinutes, "minute");
  return rtf.format(-diffSeconds, "second");
}
