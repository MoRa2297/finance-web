export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export function isPositiveNumber(value: number): boolean {
  return value > 0 && Number.isFinite(value);
}

export function isWithinRange(
  value: number,
  min: number,
  max: number,
): boolean {
  return value >= min && value <= max;
}
